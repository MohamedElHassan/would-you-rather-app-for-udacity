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
function App(props) {
  // useEffect(() => {
  //   props.dispatch(handleReceiveQuestions());
  //   props.dispatch(handleReceiveUsers());
  // });
  return (
    <Router>
    
    <div>
    
     {/* {props.authedUser === true ? <NavBar/> : <Login/>} */}
      {props.loading === true ? <Login/> : 
      <Fragment>
      <NavBar/>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/new' component={NewQuestion} />
        <Route path='/leaderboard' component={Leaderboard}/>
        <Route path='/poll/:id' component={QuestionPage} />
        <Route path='/login' component={Login} />
        
      </Fragment>
      }
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
