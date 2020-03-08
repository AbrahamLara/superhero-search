import { AnyAction } from "redux";

export const LOAD_PAYLOAD = "LOAD_PAYLOAD";
export const CLEAR_PAYLOAD = "CLEAR_PAYLOAD";

export function loadPayload(payload: any): AnyAction {
  return {
    type: LOAD_PAYLOAD,
    payload
  };
}

export function clearPayload(): AnyAction {
  return {
    type: CLEAR_PAYLOAD
  };
}
