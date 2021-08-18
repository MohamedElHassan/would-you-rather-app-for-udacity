import React, {useState} from 'react';
import { Menu } from 'semantic-ui-react'
import Login from './Login';
function NavBar(){
    const [activeItem,handleActiveItem] = useState('Dashboard')
    const  handleItemClick = (e, { name }) => handleActiveItem(name)

    return(
        <Menu pointing secondary>
          <Menu.Item

            name='Dashboard'
            active={activeItem === 'Dashboard'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='New Question'
            active={activeItem === 'New Question'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Leaderboard'
            active={activeItem === 'Leaderboard'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
          <Login/>
        </Menu>
    )   
}
export default NavBar