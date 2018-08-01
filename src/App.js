import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="app_master">
        <Home/>
      </div>
    );
  }
}

export default App;
