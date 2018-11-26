import React, { Component } from 'react';

class Login extends Component {
    handleLogin() {
      console.log("Login attempted.")
    }

    render() {
        return (
            <div className="loginForm">
            <h1>Log in to Nick's News!</h1>
                <form action="">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter Username" name="username"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password"/>

                    <button type="submit" onClick={this.handleLogin}>Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;