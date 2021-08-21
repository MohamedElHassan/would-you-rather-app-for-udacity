import { _getQuestions , _saveQuestion , _saveQuestionAnswer } from "../_DATA";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION  = 'ADD_QUESTION'
export const ANSWER_QUESTION  = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
export function answerQuestion({authedUser, qid, answer}) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
    
    
  };
}
function addQuestion(question){
  return{
    type:ADD_QUESTION,
    question,
  }
}
export function handleAddQuestion({optionOneText,optionTwoText,author}){
  return(dispatch)=>{
    return _saveQuestion({optionOneText,optionTwoText,author}).then((formattedQuestion)=>{
      dispatch(addQuestion(formattedQuestion))
    })
  }
}

export function handleReceiveQuestions() {
  return (dispatch) => {
    
    return _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions))
      
      
    });
  };
}
//Continue Here
export function handleSaveAnswer({authedUser,qid,answer}){
  return(dispatch)=>{
    // _saveQuestionAnswer({authedUser,qid,answer})
    return _saveQuestionAnswer({authedUser,qid,answer}).then(()=>{
      dispatch(answerQuestion({authedUser, qid, answer}))
      
    })
  }
}

