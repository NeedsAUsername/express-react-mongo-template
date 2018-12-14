import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Users from './users';
import Auth from './auth';
import {fetchUsers} from './actions/users/fetchUsers';
import {fetchCurrentUser} from './actions/auth/fetchCurrentUser';

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    if (!!localStorage.token) {
      this.props.fetchCurrentUser();
    }
  }
  render() {
    return (
      // Later: Setup routes for different pages(user profile, users search, posts, etc.)
      <Router>
        <div className="app">
          <Users />
          <Auth />
        </div>
      </Router>
    );
  }
}


export default connect(null, {fetchUsers, fetchCurrentUser})(App);
