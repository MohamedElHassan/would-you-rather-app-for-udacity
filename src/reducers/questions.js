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
      const {qid,answer , authedUser}   = action
      const currentQuestionOption = state[qid][answer]
      const newQuestion = {
      [qid]:{
        ...state[qid],
        ...currentQuestionOption,
        votes:[...currentQuestionOption.votes.concat(authedUser)]
        
      }
      };
      return{
        ...state,
        ...newQuestion,
      }
    default:
      return state;
  }
}
