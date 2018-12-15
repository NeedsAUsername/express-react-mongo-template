import React from 'react';
import {NavLink} from 'react-router-dom';
import Auth from '../auth';

class Navbar extends React.Component {

  render () {
    return (
      <div className="navbar">
        <h1>Chat Stream</h1>
        <NavLink className="navlink" to="/" >Home</NavLink>
        <Auth className="navlink"/>
      </div>
    )
  }
}

export default Navbar;
