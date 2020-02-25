import { createStore } from "redux";
import reducers from "./reducers";
import middleware from "./middleware";

const initialState = {
  search: "",
  results: { loading: false, results: null }
};

export const makeStore = (state: any = initialState) => {
  return createStore(reducers, state, middleware);
};
