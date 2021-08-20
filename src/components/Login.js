import React ,{ useState , useEffect} from "react";
import { Button, Dropdown ,  Header , Segment} from "semantic-ui-react";
import { connect } from "react-redux";
import { setAuthedUser} from '../actions/authedUser'
import { withRouter } from "react-router-dom";
import { useDispatch } from 'react-redux'
function Login(props) {
  useEffect(()=>{
    // const {
    //   history,
    //   location: { pathname }
    // } = this.props;
    // this.referrer = pathname;
    props.history.push("/login");
  

  }, []);

  const dispatch = useDispatch()
  const [user, handleUser] = useState('')
  const { users } = props;
  const handleChange = (e,result) => {
    e.preventDefault();
    handleUser(result.value)
    
  };
  const handleLogin = ()=>{
    if(user !== ''){
      dispatch(setAuthedUser(user))
    }
    

    props.history.push('/dashboard')
  }
  
 
  
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