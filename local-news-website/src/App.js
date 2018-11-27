import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import List from './components/list/List';

import CallAPI from './CallAPI';

import logo from './img/logo.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "home",
      homeItems: []
    };
    this.showHome = this.showHome.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.updateArticleData = this.updateArticleData.bind(this);
  }

  showHome() {
    this.setState({currentView: "home"});
  }

  showLogin() {
    this.setState({currentView: "login"});
  }

  showSignup() {
    this.setState({currentView: "signup"});
  }

  handleSignup(data) {
    console.log(data);
    this.setState({currentView: "home"});
  }

  updateArticleData(data) {
    let data2 = data.map(item => {
      return {
        id: item.ArticleID,
        title: item.Title,
        body: item.ArticleBody,
        photo: item.Location
      };
    });
    this.setState({
      homeItems: data2,
      currentView: "home"
    });
  }

  componentDidMount() {
    new CallAPI().getArticles(this.updateArticleData);
  }

  render() {
    let currentView;
    if(this.state.currentView === "home") {
      currentView = <List items={this.state.homeItems}/>
    }
    else if(this.state.currentView === "login") {
      currentView = <Login/>
    }
    else if(this.state.currentView === "signup") {
      currentView = <Signup onSubmit={this.handleSignup}/>
    }
    return (
      <div>
        <Header logo={logo} onLogoClick={this.showHome} onLoginClick={this.showLogin} onSignupClick={this.showSignup}/>
        {currentView}
        <Footer/>
      </div>
    );
  }
}

export default App;