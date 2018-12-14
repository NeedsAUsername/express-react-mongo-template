import React from 'react';
import {connect} from 'react-redux';
import './auth.css';
import AuthInput from './input.js';
import {signup} from '../actions/auth/signup';
import {login} from '../actions/auth/login';

class Auth extends React.Component {
  // Todo:
  // On login, set token inside local storage
  // If user is logged in, show button to logout
  // Set up redux
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
  formAction = (formState) => {
    if (this.state.formShown === "signup") {
      this.props.signup(formState)
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
const mapStateToProps = (store) => {
  return {
    loggedIn: store.currentUser.authenticated
  }
}

export default connect(mapStateToProps, {signup, login})(Auth);
