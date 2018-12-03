import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import List from './components/list/List';
import Article from './components/article/Article';

import CallAPI from './CallAPI';

import logo from './img/logo.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "home",
      homeItems: [],
      currentArticle: null
    };
    this.showHome = this.showHome.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.updateArticleData = this.updateArticleData.bind(this);
  }

  showHome() {
    this.setState({currentView: "home"});
  }

  showLogin() {
    this.setState({currentView: "login"});
  }

  handleLogin(data) {
    new CallAPI().loginUser(data);
    // Add callback and negative response
    this.setState({currentView: "home"});
  }

  showSignup() {
    this.setState({currentView: "signup"});
  }

  handleSignup(data) {
    new CallAPI().addUser(data, (err, result) => {
      if(err) {
        console.log(err);
        return;
      }
      console.log(result);
    });
    this.setState({currentView: "home"});
  }

  handleThumbnailClick(id) {
    let articleData = this.state.homeItems.filter(article => article.id === id);
    this.setState({
      currentView: "article",
      currentArticle: articleData
    });
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
      currentView = <List items={this.state.homeItems} onClick={this.handleThumbnailClick}/>
    }
    else if(this.state.currentView === "article") {
      currentView = <Article articleData={this.state.currentArticle}/>
    }
    else if(this.state.currentView === "login") {
      currentView = <Login onSubmit={this.handleLogin}/>
    }
    else if(this.state.currentView === "signup") {
      currentView = <Signup onSubmit={this.handleSignup}/>
    }
    return (
      <div>
        <Header logo={logo} showHome={this.showHome} onLoginClick={this.showLogin} onSignupClick={this.showSignup}/>
        {currentView}
        <Footer/>
      </div>
    );
  }
}

export default App;