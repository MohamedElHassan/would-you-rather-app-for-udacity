import React, {useState} from 'react';
import { Icon, Menu } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { NavLink ,withRouter} from 'react-router-dom'
import { logout , isAuthenticated } from '../loginAuth';
function NavBar(props){
    const [activeItem,handleActiveItem] = useState('Dashboard')
    const  handleItemClick = (e, { name }) => handleActiveItem(name)

    const handleLogout = ()=>{
      logout()
      props.history.push('/logout')
     
    } 
    return(
        <Menu pointing secondary>
          <NavLink to='/dashboard' exact>
          <Menu.Item

            name='Dashboard'
            active={activeItem === 'Dashboard'}
            onClick={handleItemClick}
          />
          </NavLink>

          <NavLink to='/new' >
          <Menu.Item
            name='New Question'
            active={activeItem === 'New Question'}
            onClick={handleItemClick}
          />
          </NavLink>

          <NavLink to='/leaderboard'>
          <Menu.Item
            name='Leaderboard'
            active={activeItem === 'Leaderboard'}
            
            onClick={handleItemClick}
            
          />
          </NavLink>
          
          
          <Menu.Menu position='right'>
            <Menu.Item
              name={props.authedUser ? 'Welcome back '+props.users[props.authedUser].name : 'Login, Please'}
              active={activeItem === 'logout'}              
              onClick={handleItemClick}
            />
            { isAuthenticated && (<Icon name='log out' size='big' link onClick={handleLogout} />)}
          </Menu.Menu>
        </Menu>
    )   
}

const mapStateToProps = (state) => ({
  users:state.users,
  authedUser:state.authedUser
  });

export default withRouter(connect(mapStateToProps)(NavBar))