import React, { Component } from 'react';
import './Login.css';
import TwitterLogo from '../twitter.svg';

export default class Login extends Component {
  state = {
    userName: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const {userName} = this.state;

    if(!userName.length) return;

    localStorage.setItem('@simple-twitter:userName', userName);
    this.props.history.push('/timeline');
  }
  handleUserName = (e) => {
    this.setState({userName: e.target.value});
  }
  render() {
    return (
      <div className="login-wrapper">
        <img src={TwitterLogo} alt="Twitter Logo" />
        
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.userName}
            onChange={this.handleUserName}
            placeholder="Username" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
