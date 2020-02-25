import { loadingResults, loadResults, clearResults } from "./results";
import { clearSearch } from "./search";
import Axios from "axios";

export const fetchResults = () => (dispatch, getState) => {
  const name = getState().search;

  if (!name) {
    dispatch(clearResults());
    return;
  }

  dispatch(clearSearch());
  dispatch(loadingResults());

  Axios.get(`/api/search?name=${name}`).then(data => {
    dispatch(loadResults(data.data));
  });
};
