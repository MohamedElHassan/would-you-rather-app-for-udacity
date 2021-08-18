import React ,{ useState} from "react";
import { Dropdown ,  Header , Segment} from "semantic-ui-react";
import { connect } from "react-redux";
import { setAuthedUser} from '../actions/authedUser'
import {  Redirect } from "react-router-dom";
function Login(props) {
  const [toHome, handleToHome] = useState(false)
  const { users } = props;
  const handleChange = (e,result) => {
    e.preventDefault();
    handleToHome(true) 
    props.dispatch(setAuthedUser(result.value)) 
  };
  
  if(toHome === true){
    return <Redirect to='/' />
  }
  
  const usersOption = users.map((user) => {
    return {
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    };
  });

  if(toHome === true){
    return <Redirect to='/' />
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
     
    
  </Segment>

     
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}
export default connect(mapStateToProps)(Login);
