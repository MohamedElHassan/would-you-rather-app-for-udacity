import React, { Fragment }  from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import "semantic-ui-css/semantic.min.css";
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'
import NavBar from './NavBar'
import AnsweredQuestions from './AnsweredQuestions'
import UnAnsweredQuestions from "./UnAnsweredQuestions";
import QuestionPage from './QuestionPage'
function App(props) {
  // useEffect(() => {
  //   props.dispatch(handleReceiveQuestions());
  //   props.dispatch(handleReceiveUsers());
  // });
  return (
    <div>
      
      {props.loading === true ? null : 
      <Fragment>
        <NavBar />
      <QuestionPage id='8xf0y6ziyjabvozdd253nd' />
      
      </Fragment>
      }
    </div>
  );
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}
export default connect(mapStateToProps)(App);
