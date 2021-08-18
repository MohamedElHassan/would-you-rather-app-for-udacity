import { ADD_QUESTION, RECEIVE_QUESTIONS } from "../actions/questions";
import { INITIAL_DATA } from "../actions/shared";

export default function questions(state = {}, action) {
  switch (action.type) {
    case INITIAL_DATA:
      return action.questions;
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
