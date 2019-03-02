import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Users from './users';
import Auth from './auth';
import Navbar from './components/navbar';
import {fetchUsers} from './actions/users/fetchUsers';
import {fetchCurrentUser} from './actions/auth/fetchCurrentUser';

const routes = [
  {path: '/', name: 'Home', icon: 'fas fa-home'}
]


class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    if (!!localStorage.token) {
      this.props.fetchCurrentUser();
    }
  }
  render() {
    return (
      // todo: Setup routes for different pages(user profile, users search, posts, etc.)
      // change root component to posts instead of users
      <Router>
        <div className="app">
          <Navbar routes={routes}/>
          <Route exact path='/' component={Users} />
          <Route exact path='/account' component={Auth} />
        </div>
      </Router>
    );
  }
}


export default connect(null, {fetchUsers, fetchCurrentUser})(App);
