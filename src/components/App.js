import React, { Fragment , Component}  from "react";
import { BrowserRouter , Route , Switch } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import "semantic-ui-css/semantic.min.css";
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'
import QuestionPage from './QuestionPage'
import NavBar from "./NavBar";
import  ProtectedRoute  from '../protectedRoute'
import PageNotFound from './PageNotFound'
import Logout from "./Logout";
class App extends Component {

  render() {
  
  const { authedUser } = this.props;
  if (!authedUser) {
    return (
      <BrowserRouter>
        <Switch>
          <Route  path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Fragment>
       
      <NavBar/>
        <div  style={{ marginTop: "7em" }}>
          <Switch> 
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/new'  component={NewQuestion} />
            <Route path='/logout' exact component={Logout} />
            <Route path='/leaderboard' component={Leaderboard}/>
            <Route path='/poll/:id' component={QuestionPage} />   
            <Route path="/404" exact component={PageNotFound} />
            <Route path="/"  component={PageNotFound} />
          </Switch>
        </div>
        
      </Fragment>
      </BrowserRouter>
    
    
  );
}
}
const mapStateToProps = state => {
  // console.log(state);
  const { authedUser } = state;
  return { authedUser };
};
export default connect(mapStateToProps)(App);
