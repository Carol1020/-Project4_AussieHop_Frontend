import React, { Component } from 'react';
import Clickr from './Clickr';
import Echo from './Echo';
import NumberFact from './NumberFact';

import Signup from './Signup';

import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import axios from 'axios';
import Cookies from 'js-cookie';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      USER_URL: `${BACK_END_URL}/users`,
      isLoggedIn: false,
      user: {},
      users: []
    }

    render() {
      return(
        <div className="App">
          Hi
        </div>
      )
    }
  }
}




export default App;
