import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import axios from 'axios';
import SearchResults from 'react-filter-search';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./Home";
import AllRoutes from "./routes/AllRoutes";
import RouteView from "./routes/RouteView";
import TimeTable from "./routes/TimeTable";
import AllTrips from "./trips/AllTrips";
import TripView from "./trips/TripView";
import AllCities from "./guides/AllCities";
import CityView from "./guides/CityView";
import Registration from "./auth/Registration";
import Login from "./auth/Login";



class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  };

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

  handleLogoutClick() {
    axios.delete("http://localhost:3001/logout", { withCredentials: true}).then(response => {
      this.props.handleLogout();
    }).catch(error => {
      console.log("logout error", error);
    })
  }

  render() {

        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">AUSSIE HOP</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/routes">Tickets & Buses</Nav.Link>
                                    <Nav.Link href="/day-trips">Day Trips</Nav.Link>
                                    <NavDropdown title="Guide to Australia" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/guide-to-Australia">Our Destinations</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/https://theculturetrip.com/pacific/australia/darwin/">Darwin</NavDropdown.Item>
                                        <NavDropdown.Item href="https://theculturetrip.com/pacific/australia/cairns/">Cairns</NavDropdown.Item>
                                        <NavDropdown.Item href="https://theculturetrip.com/pacific/australia/airlie-beach/">Airlie Beach</NavDropdown.Item>
                                        <NavDropdown.Item href="https://theculturetrip.com/pacific/australia/sunshine-coast/">Sunshine Coast</NavDropdown.Item>
                                        <NavDropdown.Item href="https://theculturetrip.com/pacific/australia/brisbane/">Brisbane</NavDropdown.Item>
                                        <NavDropdown.Item href="https://theculturetrip.com/pacific/australia/gold-coast/">Gold Coast</NavDropdown.Item>
                                        <NavDropdown.Item href="https://theculturetrip.com/pacific/australia/byron-bay/">Byron Bay</NavDropdown.Item>
                                        <NavDropdown.Item href="https://theculturetrip.com/pacific/australia/sydney/">Sydney</NavDropdown.Item>
                                        <NavDropdown.Item href="https://theculturetrip.com/pacific/australia/melbourne/">Melbourne</NavDropdown.Item>
                                    </NavDropdown>
                                    { this.state.loggedInStatus === "LOGGED_IN"
                                      ? <Nav.Link href="/" onClick={() => this.handleLogoutClick()}>Log Out</Nav.Link>
                                      : (<Nav.Link href="/registration">Registration/Log In</Nav.Link> )
                                    }
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Container fluid="xl">
                              <Switch>
                                <Route
                                  exact
                                  path={"/routes"}
                                  render={props => (
                                    <AllRoutes
                                      {...props}
                                      handleLogout={this.handleLogout}
                                      {...this.state}
                                      loggedInStatus={this.state.isLoggedIn}
                                    />
                                  )}
                                />
                                <Route
                                  path={"/routes/:routeId"}
                                  render={props => (
                                    <RouteView
                                      {...props}
                                      handleLogout={this.handleLogout}
                                      {...this.state}
                                      loggedInStatus={this.state.isLoggedIn}
                                    />
                                  )}
                                />
                                <Route
                                  path={"/timetables/:routeId"}
                                  render={props => (
                                    <TimeTable
                                      {...props}
                                      handleLogout={this.handleLogout}
                                      {...this.state}
                                      loggedInStatus={this.state.isLoggedIn}
                                    />
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
                                      loggedInStatus={this.state.isLoggedIn}
                                    />
                                  )}
                                />
                                <Route
                                  path={"/day-trips/:tripId"}
                                  render={props => (
                                    <TripView
                                      {...props}
                                      handleLogout={this.handleLogout}
                                      {...this.state}
                                      loggedInStatus={this.state.isLoggedIn}
                                    />
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
                                      loggedInStatus={this.state.isLoggedIn}
                                    />
                                  )}
                                />
                                <Route
                                  path={"/guide-to-Australia/:cityId"}
                                  render={props => (
                                    <CityView
                                      {...props}
                                      handleLogout={this.handleLogout}
                                      {...this.state}
                                      loggedInStatus={this.state.isLoggedIn}
                                    />
                                  )}
                                />
                                <Route
                                  exact
                                  path={"/registration"}
                                  render={props => (
                                    <Registration
                                      {...props}
                                      handleLogout={this.handleLogout}
                                      {...this.state}
                                      loggedInStatus={this.state.isLoggedIn}
                                    />
                                  )}
                                />
                                <Route
                                  exact
                                  path={"/log-in"}
                                  render={props => (
                                    <Login
                                      {...props}
                                      handleLogout={this.handleLogout}
                                      {...this.state}
                                      loggedInStatus={this.state.isLoggedIn}
                                    />
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
                                      loggedInStatus={ this.state.loggedInStatus }
                                    />
                                  )}
                                />
                            </Switch>
                          </Container>
                          <div class="container-xl">
                            <footer className="footer-copyright text-center py-3">© 2020 Copyright: CAROLLIU</footer>
                          </div>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }

}




export default App;
