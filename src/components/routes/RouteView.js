
import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Redirect } from 'react-router-dom';


const RouteView = function (props) {
  const [route, setRoute] = useState([]);
  const routeId = props.match.params.routeId

  useEffect( () => {
    axios.get(`http://localhost:3001/routes/${ routeId }`)
      .then(response => {
        console.log(response);
        setRoute(response.data); // [0] for id
      })
      .catch(error => {
        console.log(error);
      })
  }, []) // fetch data only once

  console.log(route)
  const { id, image, start, end, stops, numOfStops, durationInDays, price } = route
  if (!route || !route.stops) return ""
  return (
    <div key={ id }>
      <h3>{ start }-{ end } { stops[0].stopType }</h3>
      <img src={ image } alt="route" />
      <p>From: { start }</p>
      <p>To: { end }</p>
      <p>Number of Stops: { numOfStops }</p>
      <p>Minimum time: { durationInDays } Days</p>
      <p>Price: ${ price }</p>
      <p>Trip Type: { stops[0].stopType }</p>
      <button type="button" onClick={ route.handleClick }>BOOK NOW</button>
    </div>
  );
};

export default RouteView;
