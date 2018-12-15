import React from 'react';
import {NavLink} from 'react-router-dom';
import Auth from '../auth';

class Navbar extends React.Component {

  render () {
    return (
      <div>
        <h1>Chat Stream</h1>
        <NavLink to="/" >Home</NavLink>
        <Auth />
      </div>
    )
  }
}

export default Navbar;
