import { createStore } from "redux";
import reducers from "./reducers";
import middleware from "./middleware";

const initialState = {
  search: "",
  payload: null,
  loading: false,
  msg: ""
};

export const makeStore = (state: any = initialState) => {
  return createStore(reducers, state, middleware);
};
