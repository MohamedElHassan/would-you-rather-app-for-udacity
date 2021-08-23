import { Redirect, Route } from "react-router-dom"
import { isAuthenticated } from "./loginAuth"
const protectedRoute = ({ component: Component, exact, path }) => (
  
  <Route
    exact={exact}
    path={path}
    render={(props)=>
        isAuthenticated() ? 
        <Component {...props}/> 
       : 
        <Redirect to={{
          pathname:'/',
          state:{
            from:props.location,
          }
        }} />
      
    }
  />
  
)
export default protectedRoute
