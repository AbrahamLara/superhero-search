import { AnyAction } from "redux";
import { SET_MSG, CLEAR_MSG } from "../actions/msg";

export default function msg(state: string = "", action: AnyAction): string {
  switch (action.type) {
    case SET_MSG:
      return action.msg;
    case CLEAR_MSG:
      return "";
    default:
      return state;
  }
}
