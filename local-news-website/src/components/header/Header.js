import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    // Binds functions to this object
    constructor(props) {
        super(props);
        this.onSignoutClick = this.onSignoutClick.bind(this);
    }

    // Clears localStorage simulating signout, redirects to homepage
    onSignoutClick() {
        localStorage.clear();
        this.props.showHome();
    }

    render() {
        // Allows conditional rendering of account buttons based on login status
        let accountButtons;
        if(localStorage.getItem('username') !== null) {
            accountButtons = <div className="accountButtons">
                <a href="#default" onClick={this.props.onPlusClick}>+ New article</a>
                <a href="#default">{localStorage.username}</a>
                <a href="#default" onClick={this.onSignoutClick}>Sign out</a>
            </div>
        }
        else {
            accountButtons = <div className="accountButtons">
                <a href="#default" onClick={this.props.onLoginClick}>Log in</a>
                <a href="#default" onClick={this.props.onSignupClick}>Sign up</a>
            </div>
        }

        return (
            <div className="header">
                <div className="logoSection" onClick={this.props.showHome}>
                    <img src={this.props.logo} alt="Main logo"/>
                    <a href="#default" className="logo">Nick's News</a>
                </div>

                <div className="headerRight">
                    {accountButtons}
                </div>
            </div>
        );
    }
}

export default Header;