import React, { useState } from "react"
import { Icon, Menu } from "semantic-ui-react"
import { connect } from "react-redux"
import { Link, NavLink, Redirect, withRouter } from "react-router-dom"
import { logout, isAuthenticated } from "../loginAuth"
import { setAuthedUser } from "../actions/authedUser"
function NavBar(props) {
  const [activeItem, handleActiveItem] = useState("Dashboard")
  const handleItemClick = (e, { name }) => {
    handleActiveItem(name)
  }

  // const handleLogout = ()=>{
  //   logout()
  //   props.history.push('/')

  // }

  return (
    <Menu pointing secondary>
      <Link to='/dashboard'>
        <Menu.Item
          name='Dashboard'
          active={activeItem === "Dashboard"}
          onClick={handleItemClick}
        />
      </Link>

      <Link to='/add'>
        <Menu.Item
          name='New Question'
          active={activeItem === "New Question"}
          onClick={handleItemClick}
        />
      </Link>

      <Link to='/leaderboard'>
        <Menu.Item
          name='Leaderboard'
          active={activeItem === "Leaderboard"}
          onClick={handleItemClick}
        />
      </Link>
      {/* <Link to='/leaderboard'>
            Leaderboard
          </Link> */}

      <Menu.Menu position='right'>
        <Menu.Item
          name={
            props.authedUser
              ? "Welcome back " + props.users[props.authedUser].name
              : "Login, Please"
          }
          active={activeItem === "logout"}
          onClick={handleItemClick}
        />
        {isAuthenticated() && (
          <Icon
            name='log out'
            size='big'
            link
            onClick={() => {
              logout()
              props.dispatch(setAuthedUser(null))
              console.log(props)
              return (
                <Redirect
                  to={{
                    pathname: "/",
                    state: {
                      from: props.location,
                    },
                  }}
                />
              )
            }}
          />
        )}
      </Menu.Menu>
    </Menu>
  )
}

const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser,
})

export default withRouter(connect(mapStateToProps)(NavBar))
