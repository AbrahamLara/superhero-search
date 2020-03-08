import { loadPayload, clearPayload } from "./payload";
import { clearSearch } from "./search";
import { stopLoading, startLoading } from "./loading";
import Axios from "axios";

export const fetchPayload = () => (dispatch, getState) => {
  const name = getState().search;

  if (!name) {
    return;
  }

  dispatch(clearSearch());
  dispatch(startLoading());

  Axios.get(`/api/search?name=${name}`)
    .then(data => dispatch(loadPayload(data.data)))
    // TODO: Add catch method
    .finally(() => dispatch(stopLoading()));
};
