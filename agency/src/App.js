import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PageWrapper from './components/PageWrapper'
import Home from './components/pages/Home'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render () {
    return(
      <PageWrapper>
        <Home />
      </PageWrapper>
    )
  }
}

export default App;
