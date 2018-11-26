import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logoSection">
                    <img src={this.props.logo} alt="Main logo"/>
                    <a href="#default" className="logo">Nick's News</a>
                </div>

                <div className="headerRight">
                    <a href="#default" onClick={this.props.onLoginClick}>Log in</a>
                    <a href="#default" onClick={this.props.onSignupClick}>Sign up</a>
                </div>
            </div>
        );
    }
}

export default Header;