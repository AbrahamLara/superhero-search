import { combineReducers } from "redux";
import search from "./search";
import results from "./results";
import loading from "./loading";

export default combineReducers({
  loading,
  results,
  search
});
