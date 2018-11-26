import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
// import Signup from './components/signup/Signup';

import logo from './img/logo.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "home"
    };
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
  }

  showLogin() {
    this.setState({currentView: "login"});
  }

  showSignup() {
    this.setState({currentView: "signup"});
  }

  render() {
    let currentView;
    if(this.state.currentView === "home") {
      currentView = <p>content here</p>
    }
    else if(this.state.currentView === "login") {
      currentView = <Login/>
    }
    else if(this.state.currentView === "signup") {
      // currentView = <Signup/>
    }
    return (
      <div>
        <Header logo={logo} onLoginClick={this.showLogin} onSignupClick={this.showSignup}/>
        {currentView}
        <Footer/>
      </div>
    );
  }
}

export default App;