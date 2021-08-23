import React, { Fragment, Component } from "react";
import {withRouter,  BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import "semantic-ui-css/semantic.min.css";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import QuestionPage from "./QuestionPage";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import Logout from "./Logout";
import ProtectedRoute from "../protectedRoute";
import { logout } from "../loginAuth";
class App extends Component {
  render() {
    const { authedUser } = this.props;

    // if (!authedUser) {
    //   return (
    //     <Fragment>
          
    //       <Switch>
    //         <Route path='/' exact component={Login} />
            
    //       </Switch>
    //     </Fragment>
    //   );
    // }
    return (
      <Fragment>
        <NavBar />
        <div style={{ marginTop: "2em" }}>
          <Switch>
            <Route path='/' exact render={(props)=>  <Login {...props}/>
            }/>
            <ProtectedRoute path='/dashboard' component={Dashboard} />
            <ProtectedRoute path='/add' component={NewQuestion} />
            <ProtectedRoute path='/leaderboard' component={Leaderboard} />
            <ProtectedRoute path='/questions/:id' component={QuestionPage} />
            <Route path='/' render={()=>{
              logout()
              return <PageNotFound/>
              
            }} />
            {/* <Route path='/logout' exact component={Logout} /> */}
            {/* <Route path='/'  component={PageNotFound} /> */}
            {/* <Route path='/' component={Login} /> */}
            {/* <Redirect to='/404'/> */}
          </Switch>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  const { authedUser } = state;
  return { authedUser };
};
export default withRouter(connect(mapStateToProps)(App));
