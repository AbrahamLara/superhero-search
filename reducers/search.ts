import { AnyAction } from "redux";
import { NEW_SEARCH, CLEAR_SEARCH } from "../actions/search";

export default function search(state: string = "", action: AnyAction): string {
  switch (action.type) {
    case NEW_SEARCH:
      return action.search;
    case CLEAR_SEARCH:
      return "";
    default:
      return state;
  }
}
