import { AnyAction } from "redux";

export const SET_MSG = "SET_MSG";
export const CLEAR_MSG = "CLEAR_MSG";

export function setMessage(msg: string): AnyAction {
  return {
    type: SET_MSG,
    msg
  };
}

export function clearMessage(): AnyAction {
  return {
    type: CLEAR_MSG
  };
}
