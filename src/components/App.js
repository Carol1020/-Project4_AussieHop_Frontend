import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";



class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
  };

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render() {
    return(
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <Home {...props} loggedInStatus={ this.state.loggedInStatus } />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}




export default App;
