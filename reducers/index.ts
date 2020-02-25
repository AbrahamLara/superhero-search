import { combineReducers } from "redux";
import search from "./search";
import results from "./results";

export default combineReducers({
  results,
  search
});
