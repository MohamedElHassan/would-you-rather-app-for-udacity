import React from "react";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { setAuthedUser} from '../actions/authedUser'
function Login(props) {
  const { users } = props;
  const handleChange = (e,result) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(result.value))  
  };
  
  const usersOption = users.map((user) => {
    return {
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    };
  });
 return (
    <div>
      Choose User
      <Dropdown
        onChange={handleChange}
        inline
        options={usersOption}
        defaultValue={usersOption.value}
      />
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}
export default connect(mapStateToProps)(Login);
