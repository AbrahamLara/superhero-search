import { AnyAction } from "redux";
import { LOAD_RESULTS, CLEAR_RESULTS } from "../actions/results";

export default function results(state: any = null, action: AnyAction): any {
  switch (action.type) {
    case LOAD_RESULTS:
      return action.results;
    case CLEAR_RESULTS:
      return null;
    default:
      return state;
  }
}
