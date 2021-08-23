import React ,{ useState , useEffect} from "react";
import { Button, Dropdown ,  Header , Segment} from "semantic-ui-react";
import { connect } from "react-redux";
import { setAuthedUser} from '../actions/authedUser'
import { Redirect, withRouter } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { isAuthenticated, login } from '../loginAuth'
function Login(props) {
  // useEffect(()=>{
  //   // const {
  //   //   history,
  //   //   location: { pathname }
  //   // } = this.props;
  //   // this.referrer = pathname;
  //   props.history.push('/');
    

  // }, []);

  const dispatch = useDispatch()
  const [user, handleUser] = useState('')
  const [toReferrer, redirectToReferrer] = useState(false)
  const { users } = props;
  const handleChange = (e,result) => {
    e.preventDefault();
    handleUser(result.value)
    
  };
  
  const handleLogin = ()=>{
    
    if(user !== ''){
      dispatch(setAuthedUser(user))
      
    }
    login()
    redirectToReferrer(true)
  }
  // if(from.pathname === '/404' || isAuthenticated()){
    
  //   return <Redirect to={from} />
  //   }

  let { from } = props.location.state || { from: {pathname: '/dashboard'}}
  console.log(from)
  // from = /dadsjflsdjklf
  
  const pages = ['/dashboard','/leaderboard','add']

  if(!from.pathname.includes(pages)){

    <Redirect to='/404' />
  }
  
  console.log(from)
  
    console.log(from)

// if(from !== '/dashboard' || '/add' || '/leaderboard' && toReferrer === false){
//   redirectToReferrer(false)
//   return <Redirect to={} />
// }

  if(toReferrer === true){
    
  return <Redirect to={from} />
  
}
// if(from === '/dashboard'){
//   redirectToReferrer(false)
//   console.log('a7a')
//   return props.history.push('/404')
  
// }


  
  const usersOption = users.map((user) => {
    return {
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    };
  });

  // if(toHome === true){
  //   return <Redirect to='/' />
  // }
 
 return (
   
    <div>
    <Segment placeholder>
    <Header as='h1' textAlign='center'>
        Login
      </Header>
      
      <Dropdown
        onChange={handleChange}
        inline
        options={usersOption}
        defaultValue={usersOption.value}
      />Please, Choose User
     <Button disabled={user === ''} primary onClick={handleLogin}>
        Sign in
     </Button>
    
  </Segment>

     
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}
export default withRouter(connect(
  mapStateToProps
  
)(Login));