import React, { Component } from 'react';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        };
        this.handleAlert = this.handleAlert.bind;
    }
    handleUsernameChange(name) {
        this.setState({ username: name })
    }
    handlePasswordChange(password) {
        this.setState({ password: password })
    }
    handleAlert() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }
    render() {
        return (
            <div>
                <input onChange={e => this.handleUsernameChange(e.target.value)} type="text" />
                <input onChange={e => this.handlePasswordChange(e.target.value)} type="text" />
                <button onClick={this.handleAlert}>Login</button>
            </div>
        );
    }
}
export default Login