import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions";
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
    case ANSWER_QUESTION:
      const {qid,answer , authedUser} = action
      const newQuestions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };
      return{
        ...state,
        newQuestions
      }
    default:
      return state;
  }
}
