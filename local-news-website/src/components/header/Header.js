import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.onSignoutClick = this.onSignoutClick.bind(this);
    }

    onSignoutClick() {
        localStorage.clear();
        this.props.showHome();
    }

    render() {
        let accountButtons;
        if(localStorage.getItem('username') !== null) {
            accountButtons = <div className="accountButtons">
                <a href="#default" onClick={this.onSignoutClick}>Sign out</a>
                <a href="#default" onClick={this.props.onPlusClick}>+</a>
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