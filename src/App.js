import React, { Component } from 'react';
import logo from './logo.svg';
import rocket from './rocket.svg'; 
import './App.css';
import { AppBody } from './components/AppBody'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Space</h2>
        </div>
        <AppBody rocketImage={rocket} />
      </div>
    );
  }
}

export default App;
