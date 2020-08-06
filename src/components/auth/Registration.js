import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Registration extends Component {
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
      axios.post("http://localhost:3001/registrations", {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      },
      { withCredentials: true }
    ).then(response => {
      console.log("registration res", response);
      if (response.data.status === "created") {
        this.props.handleSuccessfulAuth(response.data);
      }
    }).catch(error => {
      console.log("registration error", error);
    })
  event.preventDefault();
  }

  render() {
    return (
      <div className='row justify-content-md-center'>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className = "center">Registration</h2>
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
                  <div className="form-group">
                    <label >Password Confirmation</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password_confirmation"
                      placeholder="Password Confirmation"
                      value={this.state.password_confirmation}
                      onChange={this.handleChange}
                      required
                    />
                </div>
                <div className="form-group float-right">
                  <button type="submit" className="btn btn-primary">Register</button>{' '}
                  <Link to="/log-in" type="submit">Already have an account?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
