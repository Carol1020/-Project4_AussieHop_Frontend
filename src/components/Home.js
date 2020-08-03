import React, { Component } from 'react';
import Registration from "./auth/Registration";
import Login from "./auth/Login";

class Home extends Component {

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h3>Status: { this.props.loggedInStatus }</h3>
        <Registration handleSuccessfulAuth={ this.handleSuccessfulAuth } />
        <Login />
      </div>
    );
  }
}

export default Home;
