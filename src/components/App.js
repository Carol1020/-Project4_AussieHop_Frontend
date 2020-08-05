import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import Home from "./Home";
import AllRoutes from "./routes/AllRoutes";
import RouteView from "./routes/RouteView";
import AllTrips from "./trips/AllTrips";
import AllCities from "./guides/AllCities";
import Cart from "./carts/Cart";





class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  };

  checkLoginStatus() {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true }).then(response => {
      console.log("logged in?", response);
      if(response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    }).catch(error => {
      console.log("check login error", error);
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }


  handleLogin(data) {
    console.log(data)
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleLogout(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }

  render() {
    return(
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/routes">Tickets & Trips</Link>
                </li>
                <li>
                  <Link to="/day-trips">Day Trips</Link>
                </li>
                <li>
                  <Link to="/guide-to-Australia">Guide to Australia</Link>
                </li>
                <li>
                  <Link to="/how-it-works">How it works?</Link>
                </li>
                <li>
                  <Link to="/my-cart">My Cart</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route
              exact
              path={"/routes"}
              render={props => (
                <AllRoutes
                  {...props}
                  handleLogout={this.handleLogout}
                  {...this.state}
                  loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            <Route
              exact
              path={"/route/:routeId"}
              render={props => (
                <RouteView
                  {...props}
                  handleLogout={this.handleLogout}
                  {...this.state}
                  loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            <Route
              exact
              path={"/day-trips"}
              render={props => (
                <AllTrips
                  {...props}
                  handleLogout={this.handleLogout}
                  {...this.state}
                  loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            <Route
              exact
              path={"/guide-to-Australia"}
              render={props => (
                <AllCities
                  {...props}
                  handleLogout={this.handleLogout}
                  {...this.state}
                  loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            <Route
              exact
              path={"/my-cart"}
              render={props => (
                <Cart
                  {...props}
                  handleLogout={this.handleLogout}
                  {...this.state}
                  loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  handleLogin={ this.handleLogin }
                  handleLogout={ this.handleLogout }
                  loggedInStatus={ this.state.loggedInStatus } />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}




export default App;
