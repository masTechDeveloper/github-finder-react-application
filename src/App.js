import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar></Navbar>
        <UserItem></UserItem>
      </div>
    );
  }
}

export default App;
