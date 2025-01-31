import { loadPayload } from "./payload";
import { stopLoading, startLoading } from "./loading";
import Axios from "axios";
import { setMessage } from "./msg";

export const fetchPayload = (search: string) => dispatch => {
  if (!search) {
    return;
  }

  dispatch(startLoading());

  Axios.get(`/api/search?name=${search}`)
    .then(data => {
      const payload = data.data;

      if (payload.error) {
        dispatch(setMessage(payload.error));
      }

      dispatch(loadPayload(payload));
    })
    .catch(({ response }) => {
      try {
        dispatch(setMessage(response.data.msg));
        dispatch(loadPayload(response.data));
      } catch (e) {
        dispatch(setMessage("Error occured"));
        dispatch(loadPayload({}));
      }
    })
    .finally(() => dispatch(stopLoading()));
};
