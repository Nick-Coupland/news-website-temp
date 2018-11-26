import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import logo from './img/logo.svg';


class App extends Component {
  render() {
    return (
      <div>
        <Header logo={logo}/>
        <Footer/>
      </div>
    );
  }
}

export default App;