import { AnyAction } from "redux";

export const NEW_SEARCH = "NEW_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export function newSearch(search: string): AnyAction {
  return {
    type: NEW_SEARCH,
    search
  };
}

export function clearSearch(): AnyAction {
  return {
    type: CLEAR_SEARCH
  };
}
