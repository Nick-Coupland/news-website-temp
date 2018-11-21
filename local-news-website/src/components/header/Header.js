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
                    <p>Log in buttons will go here.</p>
                </div>
            </div>
        );
    }
}

export default Header;