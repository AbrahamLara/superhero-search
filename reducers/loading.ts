import { AnyAction } from "redux";
import { START_LOADING, STOP_LOADING } from "../actions/loading";

export default function loading(
  state: boolean = false,
  action: AnyAction
): boolean {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
}
