import React, { Component } from 'react'
import _ from "lodash";
import { Redirect } from 'react-router-dom';


export class RouteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fullRoute: {},
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.matchRoute();
  }

  matchRoute() {
    let route = _.filter(this.props.routes, { id: this.props.routeSelect })[0];
    this.setState({fullRoute: route});
  }

  handleClick = (route_id) => {
    this.setState({ sendToCart: route_id })
    this.props.updateCart(route_id)
  }


  render() {
    const fullRoute = this.state.fullRoute;
    if (fullRoute) {
      return (

          <div key={fullRoute.id} className='container'>
            const { id, image, start, end, stops, numOfStops, durationInDays, price } = fullRoute
            <img className='fullsize' src={image} alt="route" />
            <p>From: { start }</p>
            <p>To: { end }</p>
            <p>Number of Stops: { numOfStops }</p>
            <p>Minimum time: { durationInDays } Days</p>
            <p>Price: ${ price }</p>
            <p>Trip Type: { stops[0].stopType }</p>
            <button type="button">MORE INFO</button>
            <button type="button" onClick={ handleClick }>BOOK NOW</button>
          </div>
      )
    } return ''
  }
}

export default RouteView1
