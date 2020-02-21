import { AnyAction } from "redux";

export const LOADING_RESULT = "LOADING_RESULT";
export const LOADED_RESULT = "LOADED_RESULT";
export const CLEAR_RESULT = "CLEAR_RESULT";

export function loadingResult(): AnyAction {
  return {
    type: LOADING_RESULT
  };
}

export function loadedResult(resulT: Array<any>): AnyAction {
  return {
    type: LOADED_RESULT,
    resulT
  };
}

export function clearResult(): AnyAction {
  return {
    type: CLEAR_RESULT
  };
}
