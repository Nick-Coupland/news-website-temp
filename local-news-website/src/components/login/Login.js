import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleLogin() {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="loginForm">
            <h1>Log in to Yummy!</h1>
                <form onSubmit={this.handleLogin}>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter Username" name="username" onChange={this.handleUsernameChange}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={this.handlePasswordChange}/>

                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;