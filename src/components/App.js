import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Profile from './Profile.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
         <Route exact  path = '/' component = {Profile}/>
         <Route path = '/signup' component = {Signup}/>
         <Route path = '/login' component = {Login}/>
        </Switch>
      </Router> 
    );
  }
}

export default App;
