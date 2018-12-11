import React from 'react';
import './auth.css';
import AuthInput from './input.js';

class Auth extends React.Component {
  // Todo:
  // SignUp/Login actions to Express API
  // If user is logged in, show button to logout
  state = {
    formShown: false
  }
  handleClick = (e, form) => {
    e.preventDefault();
    this.setState({
      formShown: form
    }, () => console.log(this.state))
  }
  formAction = (e, formData) => {
    e.preventDefault();
    if (this.state.formShown === "signup") {
      alert("signing up as " + formData.email)
      //signup action here to Express
    } else if (this.state.formShown === "login") {
      alert("logging in as " + formData.email)
      //login action here to Express
    }
  }
  render () {
    return (
      <div>
        <h1>Auth Component</h1>
        <button onClick={(e) => this.handleClick(e, "login")}>Login</button>
        <button onClick={(e) => this.handleClick(e, "signup")}>Signup</button>
        {this.state.formShown ? <AuthInput title={this.state.formShown} formAction={this.formAction}/> : null}
      </div>
    )
  }
}

export default Auth;
