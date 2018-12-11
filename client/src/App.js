import React, { Component } from 'react';
import './App.css';
import Users from './users';
import Auth from './auth';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Users />
        <Auth />
      </div>
    );
  }
}

export default App;
