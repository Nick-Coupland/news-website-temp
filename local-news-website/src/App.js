import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import ArticleForm from './components/articleForm/ArticleForm';
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
    this.showArticleForm = this.showArticleForm.bind(this);
    this.handleArticleSubmit = this.handleArticleSubmit.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.updateArticleData = this.updateArticleData.bind(this);
  }

  showHome() {
    // this.setState({currentView: "home"});
    new CallAPI().getArticles(this.updateArticleData);
    window.scrollTo(0, 0);
  }

  showLogin() {
    this.setState({currentView: "login"});
  }

  handleLogin(data) {
    new CallAPI().loginUser(data);
    // Add callback and negative response
    this.setState({currentView: "home"});
    // new CallAPI().getArticles(this.updateArticleData);
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

  showArticleForm() {
    this.setState({currentView: "articleForm"});
    window.scrollTo(0, 0);
  }

  handleArticleSubmit(data) {
    console.log(data);
    new CallAPI().addArticle(data, (err, res) => {
      if(err) {
        console.log(err);
        return;
      }
      console.log(res);
    })
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
        photo: item.ImageLocation,
        author: item.Author,
        pinStatus: item.Pinned,
        likes: item.Likes,
        likeStatus: item.LikeStatus
      };
    });
    this.setState({
      homeItems: data2,
      currentView: "home"
    });
  }

  handlePin(id) {
    new CallAPI().pinArticle(id);
  }

  handleUnpin(id) {
    new CallAPI().unpinArticle(id);
  }

  handleLike(id) {
    new CallAPI().likeArticle(id);
  }

  handleUnlike(id) {
    new CallAPI().unlikeArticle(id);
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
      currentView = <Article articleData={this.state.currentArticle} handlePin={this.handlePin} handleUnpin={this.handleUnpin} handleLike={this.handleLike} handleUnlike={this.handleUnlike}/>
    }
    else if(this.state.currentView === "login") {
      currentView = <Login onSubmit={this.handleLogin}/>
    }
    else if(this.state.currentView === "signup") {
      currentView = <Signup onSubmit={this.handleSignup}/>
    }
    else if(this.state.currentView === "articleForm") {
      currentView = <ArticleForm onSubmit={this.handleArticleSubmit}/>
    }
    return (
      <div>
        <Header logo={logo} showHome={this.showHome} onLoginClick={this.showLogin} onSignupClick={this.showSignup} onPlusClick={this.showArticleForm}/>
        {currentView}
        <Footer showHome={this.showHome} showArticleForm={this.showArticleForm}/>
      </div>
    );
  }
}

export default App;