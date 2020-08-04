import React, { Component } from 'react';
import axios from "axios";
import Registration from "./auth/Registration";
import Login from "./auth/Login";

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    // this.props.history.push("/");
  };

  handleLogoutClick() {
    axios.delete("http://localhost:3001/logout", { withCredentials: true}).then(response => {
      this.props.handleLogout();
    }).catch(error => {
      console.log("logout error", error);
    })
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h3>Status: { this.props.loggedInStatus }</h3>
        <Registration handleSuccessfulAuth={ this.handleSuccessfulAuth } />
        <Login handleSuccessfulAuth={ this.handleSuccessfulAuth } />
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
      </div>
    );
  }
}

export default Home;
