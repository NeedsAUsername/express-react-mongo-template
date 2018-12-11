import React from 'react';
import './auth.css';
import AuthInput from './input.js';

class Auth extends React.Component {
  // Todo:
  // If user is logged in, show button to logout
  // If not, show buttons to signup/login
  state = {
    formShown: false
  }
  handleClick = (e, form) => {
    e.preventDefault();
    this.setState({
      formShown: form
    })
  }
  render () {
    return (
      <div>
        <h1>Auth Component</h1>
        <button onClick={(e) => this.handleClick(e, "login")}>Login</button>
        <button onClick={(e) => this.handleClick(e, "signup")}>Signup</button>
        {this.state.formShown ? <AuthInput title={this.state.formShown}/> : null}
      </div>
    )
  }
}

export default Auth;
