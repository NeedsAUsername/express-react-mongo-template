import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './users';
import Auth from './auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users />
        <Auth />
      </div>
    );
  }
}

export default App;
