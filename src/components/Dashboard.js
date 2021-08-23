import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Header , Divider, Grid,  Segment  } from "semantic-ui-react";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";
import { Redirect } from "react-router-dom";
import { logout } from '../loginAuth';
function Dashboard({questionId , answeredQuestions , unAnsweredQuestions ,authedUser}) {
  // // // const userList = Object.keys(users).forEach(uid => {
  // // //   const user = users[uid];
  // // //   const answeredQuestions = Object.keys(user.answers).length;
  // // //   const createdQuestions = user.questions.length;
  // // //   user.score = answeredQuestions + createdQuestions;
  // // //   usersWithScore[uid] = user;
  // // });
  // console.log(userList)



  if(!authedUser){
    logout()
    console.log('Hello world')
   return <Redirect to='/'/>
    
  }

  questionId.map((qId)=>(
    <div key={qId}>
    <Question id={qId} key={qId} />
    </div>
  ))
  return (
    
    <div>
    <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
      <Header as='h1'>Un Answered Questions</Header>
    {unAnsweredQuestions.map((qId)=>(
      <div key={qId}>
      
      <UnAnsweredQuestions id={qId} key={qId}  />
      </div>
    ))}
      </Grid.Column>
      <Grid.Column>
      <Header as='h1'>Answered Questions</Header>
    {answeredQuestions.map((qId)=>(
      <div key={qId}>
      
      <AnsweredQuestions id={qId} key={qId}  />
      </div>
    ))}
      </Grid.Column>
    </Grid>
    <Divider vertical></Divider>
</Segment>

    
   

    </div>
  );
}
function mapStateToProps({ users, questions, authedUser }) {
  // if (!users) 
  //   return
  // console.log(authedUser, users);
  // output the questions array and filter it to exclude the answered Questions
  // const answeredQuestions = Object.keys(user.answers).length;
  if(!authedUser){
    logout()
    console.log('Hello world')
   return <Redirect to='/'/>
    
  }
  
  const user = users[authedUser];
  const answeredQuestions = Object.keys(user.answers);
  const unAnsweredQuestions = Object.keys(questions).filter((q) =>
     !answeredQuestions.includes(q)
   );
   return {
    questionId: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    
    answeredQuestions : answeredQuestions.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    unAnsweredQuestions :  unAnsweredQuestions.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    authedUser,
  };
}

// const mapStateToProps = state => {
//   return {
//      users: state.users 
//     };

// };

export default connect(mapStateToProps)(Dashboard);

