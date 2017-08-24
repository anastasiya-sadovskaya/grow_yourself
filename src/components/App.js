import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './A.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path = '/' component = {A}/>
        <Route path = '/a' component = {A}/>
      </Router> 
    );
  }
}

export default App;
