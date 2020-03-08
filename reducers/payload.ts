import { AnyAction } from "redux";
import { LOAD_PAYLOAD, CLEAR_PAYLOAD } from "../actions/payload";

export default function payload(state: any = null, action: AnyAction): any {
  switch (action.type) {
    case LOAD_PAYLOAD:
      return action.payload;
    case CLEAR_PAYLOAD:
      return null;
    default:
      return state;
  }
}
