import { loadPayload } from "./payload";
import { stopLoading, startLoading } from "./loading";
import Axios from "axios";
import { setMessage } from "./msg";

export const fetchPayload = () => (dispatch, getState) => {
  const name = getState().search;

  if (!name) {
    return;
  }

  dispatch(startLoading());

  Axios.get(`/api/search?name=${name}`)
    .then(data => {
      const payload = data.data;
      if (payload.response === "error") {
        dispatch(setMessage(payload.error));
        return;
      }

      dispatch(loadPayload(payload));
    })
    // TODO: Add catch method
    .finally(() => dispatch(stopLoading()));
};
