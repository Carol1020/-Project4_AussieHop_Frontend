import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

    handleChange(event) {
      console.log("handle change", handleChange);
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit(event) {
      const {
        email,
        password,
        password_confirmation
      } = this.state;

      console.log("form submitted");
      axios.post("http://localhost:3001/login", {
        user: {
          email: email,
          password: password,
          password_confirmation: password,
        }
      },
      { withCredentials: true }
    ).then(response => {
      console.log("registration res", response);
    }).catch(error => {
      console.log("registration error", error);
    })
  event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />

        <input
          type="password_confirmation"
          name="password_confirmation"
          placeholder="password confirmation"
          value={this.state.password_confirmation}
          onChange={this.handleChange}
          required
        />

        <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
