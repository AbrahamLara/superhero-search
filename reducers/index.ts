import { combineReducers } from "redux";
import search from "./search";
import payload from "./payload";
import loading from "./loading";

export default combineReducers({
  loading,
  payload,
  search
});
