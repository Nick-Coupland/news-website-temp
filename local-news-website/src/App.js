import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';

import logo from './img/logo.svg';


class App extends Component {
  render() {
    return (
      <div>
        <Header logo={logo}/>
      </div>
    );
  }
}

export default App;