import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions";
import { INITIAL_DATA } from "../actions/shared";

function user(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.question.id],
      };
    default:
      return state;
  }
}

export default function users(state = {}, action) {
  switch (action.type) {
    case INITIAL_DATA:
      return action.users;
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: user(state[action.question.author], action),
      };
    case ANSWER_QUESTION:
      const {qid, answer , authedUser} = action
      const newUsers = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      return{
        ...state,
        newUsers
      }
    default:
      return state;
  }
}
