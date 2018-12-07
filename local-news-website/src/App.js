import React, { Component } from 'react';
// Import main CSS file
import './App.css';

// Import React components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import ArticleForm from './components/articleForm/ArticleForm';
import List from './components/list/List';
import Article from './components/article/Article';

// Import module to send API requests
import CallAPI from './CallAPI';

import logo from './img/logo.svg';


class App extends Component {
  // Configures component state and binds functions to this object
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

  // Shows homepage
  showHome() {
    new CallAPI().getArticles(this.updateArticleData);
    window.scrollTo(0, 0);
  }

  // Shows login page
  showLogin() {
    this.setState({currentView: "login"});
  }

  // Calls API to process login
  handleLogin(data) {
    new CallAPI().loginUser(data, (err) => {
      if(err) {
        alert("Error loggin in. Please try again.");
        return;
      }
      this.showHome();
    });
  }

  // Shows signup page
  showSignup() {
    this.setState({currentView: "signup"});
  }

  // Calls API to process signup
  handleSignup(data) {
    new CallAPI().addUser(data, (err) => {
      if(err) {
        alert("Error signing in. Please try again.");
        return;
      }
      this.showHome();
    });
  }

  // Shows new article form
  showArticleForm() {
    this.setState({currentView: "articleForm"});
    window.scrollTo(0, 0);
  }

  // Calls API to process article submission
  handleArticleSubmit(data) {
    new CallAPI().addArticle(data, (err) => {
      if(err) {
        alert("Error submitting article. Please try again.");
        return;
      }
      this.showHome();
    });
  }

  // Sets state to allow conditional rendering of article page
  handleThumbnailClick(id) {
    let articleData = this.state.homeItems.filter(article => article.id === id);
    this.setState({
      currentView: "article",
      currentArticle: articleData
    });
  }

  // Calls API to pull homepage article data
  updateArticleData(err, data) {
    if(err) {
      alert("Error getting articles. Please try again.");
      return;
    }
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

  // Calls API to process pinning article (admin only)
  handlePin(id) {
    new CallAPI().pinArticle(id);
  }

  // Calls API to process unpinning article (admin only)
  handleUnpin(id) {
    new CallAPI().unpinArticle(id);
  }

  // Calls API to process positive article rating
  handleLike(id) {
    new CallAPI().likeArticle(id);
  }

  // Calls API to process negative article rating
  handleUnlike(id) {
    new CallAPI().unlikeArticle(id);
  }

  // Pulls through homepage article data on rendering of component
  componentDidMount() {
    new CallAPI().getArticles(this.updateArticleData);
  }

  render() {
    // Assigns currentView variable for conditional rendering of imported components
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
      // Renders header, footer, and main page content
      <div>
        <Header logo={logo} showHome={this.showHome} onLoginClick={this.showLogin} onSignupClick={this.showSignup} onPlusClick={this.showArticleForm}/>
        {currentView}
        <Footer showHome={this.showHome} showArticleForm={this.showArticleForm}/>
      </div>
    );
  }
}

// Exports component for rendering
export default App;