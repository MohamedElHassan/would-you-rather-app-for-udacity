import React ,{ useState , useEffect} from "react";
import { Button, Dropdown ,  Header , Segment} from "semantic-ui-react";
import { connect } from "react-redux";
import { setAuthedUser} from '../actions/authedUser'
import { Redirect, withRouter } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { login } from '../loginAuth'
function Login(props) {
  useEffect(()=>{
    // const {
    //   history,
    //   location: { pathname }
    // } = this.props;
    // this.referrer = pathname;
    props.history.push('/');
    

  }, []);

  const dispatch = useDispatch()
  const [user, handleUser] = useState('')
  const [toReferrer, redirectToReferrer] = useState(false)
  const { users } = props;
  const handleChange = (e,result) => {
    e.preventDefault();
    handleUser(result.value)
    
  };
  const handleLogin = ()=>{
    if(toReferrer === false){
      props.history.push('/dashboard')
      redirectToReferrer(true)
    }
    if(user !== ''){
      dispatch(setAuthedUser(user))
      
    }
    login()
    
    
    console.log(props.location)
   
  }
  
  
  const { from } = props.location.state || { from: {pathname: '/'}}
  
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

  if(toReferrer === true){
    return <Redirect to={from.pathname} />
  }
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