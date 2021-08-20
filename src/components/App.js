import React, { Fragment }  from "react";
import { BrowserRouter as Router , Route } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import "semantic-ui-css/semantic.min.css";
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'
import QuestionPage from './QuestionPage'
import NavBar from "./NavBar";
import  ProtectedRoute  from '../protectedRoute'
function App(props) {
  // useEffect(() => {
  //   props.dispatch(handleReceiveQuestions());
  //   props.dispatch(handleReceiveUsers());
  // });
  return (
    <Router>
    
    <div>
    
     {/* {props.authedUser === true ? <NavBar/> : <Login/>} */}
      
      <Fragment>
      <NavBar/>
        <ProtectedRoute path='/' exact component={Dashboard}/>
        <ProtectedRoute path='/new' component={NewQuestion} />
        <ProtectedRoute path='/leaderboard' component={Leaderboard}/>
        <ProtectedRoute path='/poll/:id' component={QuestionPage} />
        <ProtectedRoute path='/login' component={Login} />
        
      </Fragment>
      
    </div>
    </Router>
  );
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}
export default connect(mapStateToProps)(App);
