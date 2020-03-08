import { combineReducers } from "redux";
import search from "./search";
import payload from "./payload";
import loading from "./loading";
import msg from "./msg";

export default combineReducers({
  msg,
  loading,
  payload,
  search
});
