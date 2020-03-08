import { AnyAction } from "redux";

export const LOAD_RESULTS = "LOAD_RESULTS";
export const CLEAR_RESULTS = "CLEAR_RESULTS";

export function loadResults(results: any): AnyAction {
  return {
    type: LOAD_RESULTS,
    results
  };
}

export function clearResults(): AnyAction {
  return {
    type: CLEAR_RESULTS
  };
}
