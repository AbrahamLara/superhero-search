import { loadResults, clearResults } from "./results";
import { clearSearch } from "./search";
import { stopLoading, startLoading } from "./loading";
import Axios from "axios";

export const fetchResults = () => (dispatch, getState) => {
  const name = getState().search;

  if (!name) {
    dispatch(stopLoading());
    dispatch(clearResults());
    return;
  }

  dispatch(clearSearch());
  dispatch(startLoading());

  Axios.get(`/api/search?name=${name}`)
    .then(data => dispatch(loadResults(data.data)))
    // TODO: Add catch method
    .finally(() => dispatch(stopLoading()));
};
