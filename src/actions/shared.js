import { _getData } from "../_DATA";
import {AUTHED_ID} from './authedUser'
import { setAuthedUser } from './authedUser'
export const INITIAL_DATA = "INITIAL_DATA";

export function initialData({ users, questions }) {
  return {
    type: INITIAL_DATA,
    users,
    questions,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return _getData().then(([users, questions]) => {
      dispatch(initialData({ users, questions }));
      
    });
  };
}
