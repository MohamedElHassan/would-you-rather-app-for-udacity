import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";
function Dashboard({questionId , answeredQuestions , unAnsweredQuestions}) {
  



  // // // const userList = Object.keys(users).forEach(uid => {
  // // //   const user = users[uid];
  // // //   const answeredQuestions = Object.keys(user.answers).length;
  // // //   const createdQuestions = user.questions.length;
  // // //   user.score = answeredQuestions + createdQuestions;
  // // //   usersWithScore[uid] = user;
  // // });
  // console.log(userList)
  return (
    <div>
    {/* {answeredQuestions.map((qId)=>(
      <div>
      
      <AnsweredQuestions id={qId} key={qId}  />
      </div>
    ))} */}

    {questionId.map((qId)=>(
      <div>
      <Question id={qId} key={qId} />
      </div>
    ))}

    {/* {unAnsweredQuestions.map((qId)=>(
      <div>
      {console.log(qId)}
      <UnAnsweredQuestions id={qId} key={qId}  />
      </div>
    ))} */}

    </div>
  );
}
function mapStateToProps({ users, questions, authedUser }) {
  // if (!users) 
  //   return
  // console.log(authedUser, users);
  const user = users[authedUser];
  // output the questions array and filter it to exclude the answered Questions
  // const answeredQuestions = Object.keys(user.answers).length;
  
  const answeredQuestions = Object.keys(user.answers);
  
  // const unAnsweredQuestions = Object.keys(questions).filter((q)=> q !== answeredQuestions )
  
  
   const unAnsweredQuestions = Object.keys(questions).filter((q) =>
     !answeredQuestions.includes(q)
   );
   
  
  return {
    questionId: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    
    answeredQuestions,
    unAnsweredQuestions,
  };
}

// const mapStateToProps = state => {
//   return {
//      users: state.users 
//     };

// };

export default connect(mapStateToProps)(Dashboard);

