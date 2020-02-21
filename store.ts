import { createStore } from "redux";
import reducers from "./reducers";
import middleware from "./middleware";
import { fromJS } from "immutable";

const initialState = fromJS({
  search: "",
  results: []
});

export const makeStore = (state: any = initialState) => {
  return createStore(reducers, state, middleware);
};
