import { AnyAction } from "redux";
import {
  LOADING_RESULTS,
  LOAD_RESULTS,
  CLEAR_RESULTS
} from "../actions/results";

let initialState = {
  loading: false,
  data: null
};

export default function results(
  state: any = initialState,
  action: AnyAction
): any {
  switch (action.type) {
    case LOADING_RESULTS:
      return {
        ...state,
        loading: true
      };
    case LOAD_RESULTS:
      return {
        loading: false,
        data: action.results
      };
    case CLEAR_RESULTS:
      return {
        loading: false,
        data: null
      };
    default:
      return state;
  }
}
