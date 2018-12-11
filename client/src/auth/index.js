import React from 'react';
import './auth.css';
import AuthInput from './input.js';

class Auth extends React.Component {
  // Todo:
  // If user is logged in, show button to logout
  // If not, show button to signup/login
  render () {
    return (
      <div>
        <h1>Auth Component</h1>
        <AuthInput />
      </div>
    )
  }
}

export default Auth;
