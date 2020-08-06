import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Home from "./Home";
  import AllRoutes from "./routes/AllRoutes";
  import RouteView from "./routes/RouteView";
  import TimeTable from "./routes/TimeTable";
  import AllTrips from "./trips/AllTrips";
  import TripView from "./trips/TripView";
  import AllCities from "./guides/AllCities";
  import CityView from "./guides/CityView";



class Navbar1 extends React.Component{

    render(){
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
                                        <NavDropdown.Item href="/guide-to-Australia">All Cities</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.2">Darwin</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Cairns</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Airlie Beach</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.5">Sunshine Coast</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.6">Brisbane</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.7">Gold Coast</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.8">Byron Bay</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.9">Sydney</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.10">Melbourne</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
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
                                path={"/routes/:routeId"}
                                render={props => (
                                  <RouteView
                                    {...props}
                                    handleLogout={this.handleLogout}
                                    {...this.state}
                                    loggedInStatus={this.state.isLoggedIn} />
                                )}
                              />
                              <Route
                                path={"/timetables/:routeId"}
                                render={props => (
                                  <TimeTable
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
                                path={"/day-trips/:tripId"}
                                render={props => (
                                  <TripView
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

                                path={"/guide-to-Australia/:cityId"}
                                render={props => (
                                  <CityView
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
                </div>
            </div>
        )
    }
}

export default Navbar1;
