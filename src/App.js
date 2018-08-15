import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Dash from './components/Dash/Dash';
import About from './components/About/About';
import TopNav from './components/TopNav/TopNav';
import {HashRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app_master"> 
            <TopNav/>
        <HashRouter>
          <Switch>
            <Route exact path = '/' component={Home}/>
            <Route exact path = '/dash' component={Dash}/>
            <Route exact path = '/about' component={About}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
