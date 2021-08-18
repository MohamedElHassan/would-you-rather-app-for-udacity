import React, {useState} from 'react';
import { Menu } from 'semantic-ui-react'
import Login from './Login';
import { NavLink } from 'react-router-dom'
function NavBar(){
    const [activeItem,handleActiveItem] = useState('Dashboard')
    const  handleItemClick = (e, { name }) => handleActiveItem(name)

    return(
        <Menu pointing secondary>
          <NavLink to='/' exact>
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
          
          <NavLink to='/login'>
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
          </NavLink>
          
        </Menu>
    )   
}
export default NavBar