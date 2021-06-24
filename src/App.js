import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timbers from './Container/Timbers/Timbers';
import Timber from './Container/Timbers/Timber';
import Contacts from './Container/Contacts/Contacts';
import Contact from './Container/Contacts/Contact';
import About from './Container/About/About';
import Auth from './Container/Aunthentication/Auth';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Auth} exact/>
        <Route path= "/timber" component={Timbers} exact/>
        <Route path="/timber/:id" component={Timber} exact />
        <Route path="/contacts" component={Contacts} exact/>
        <Route path="/contacts/:id" component={Contact} exact/>
        <Route path="/about" component={About} exact/>
      </Router>
    );
  }
}

export default App; 