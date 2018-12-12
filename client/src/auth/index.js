import React from 'react';
import './auth.css';
import AuthInput from './input.js';

class Auth extends React.Component {
  // Todo:
  // Login action to Express API
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
  // later move to redux/mobx/etc. b/c right now, we need to refresh to see the new user, since our users component and auth component don't share state.
  formAction = (formData) => {
    if (this.state.formShown === "signup") {
      console.log("signing up as " + formData.email);
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        accepts: 'application/json',
        body: JSON.stringify(formData)
      }).then(response => response.json())
        .then(json => {
          alert(JSON.stringify(json));
        })
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
