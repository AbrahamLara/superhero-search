import { AnyAction } from "redux";
import { LOADING_RESULT, LOADED_RESULT, CLEAR_RESULT } from "../actions/result";

export default function result(state: any = {}, action: AnyAction): any {
  switch (action.type) {
    case LOADING_RESULT:
      return action.result;
    case LOADED_RESULT:
      return "";
    case CLEAR_RESULT:
      return {};
    default:
      return state;
  }
}
