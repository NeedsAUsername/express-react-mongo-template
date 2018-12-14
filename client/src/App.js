import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Users from './users';
import Auth from './auth';

class App extends Component {
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

export default App;
