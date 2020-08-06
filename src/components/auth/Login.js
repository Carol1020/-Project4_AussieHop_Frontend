import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "carolisperfect@hotmail.com",
      password: "beef",
      loginErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit(event) {
      const {
        email,
        password
      } = this.state;

      console.log("form submitted");
      axios.post("http://localhost:3001/sessions", {
        email: email,
        password: password
      },
      { withCredentials: true }
    ).then(response => {
      console.log(response);
      if (response.data.logged_in) {
        this.props.handleSuccessfulAuth(response.data);
      }
    }).catch(error => {
      console.log("login error", error);
    })
  event.preventDefault();
  }

  render() {
    return (
      <div className='row justify-content-md-center'>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className = "center">Log In</h2>
                <form onSubmit={ this.handleSubmit }>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label >Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <Link to="/" className="btn btn-primary float-right">Log In</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Login;
