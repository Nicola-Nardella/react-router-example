import React from 'react';
import { NavLink } from 'react-router-dom'

const cls = s => s ? `NavBar-${s}` : 'NavBar'
export default class NavBar extends React.Component {
  render () {
    return (
      <div className={cls()}>
        <NavLink to='/home' activeClassName={cls('-selected')}>Home</NavLink>
        <NavLink to='/about' activeClassName={cls('-selected')}>About</NavLink>
        <NavLink to='/blog' activeClassName={cls('-selected')}>Blog</NavLink>
      </div>
    )
  }
}

