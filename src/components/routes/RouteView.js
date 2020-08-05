
import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Redirect } from 'react-router-dom';


const RouteView = function (props) {
  const [route, setRoute] = useState([]);
  const routeId = props.match.params.Id

  useEffect( () => {
    axios.get(`http://localhost:3001/route/${ routeId }`)
      .then(response => {
        console.log(response);
        setRoute(response.data[0]); // [0] for id
      })
      .catch(error => {
        console.log(error);
      })
  }, []) // fetch data only once

  return (
    <div key={ route.id }>
      <h3>{ route.start }-{ route.end } { route.stops[0].stopType }</h3>
      <p>From: { route.start }</p>
      <p>To: { route.end }</p>
      <p>Number of Stops: { route.numOfStops }</p>
      <p>Minimum time: { route.durationInDays } Days</p>
      <p>Price: ${ route.price }</p>
      <p>Trip Type: { route.stops[0].stopType }</p>
      <button type="button" onClick={ route.handleClick }>BOOK NOW</button>
    </div>
  );
};

export default RouteView;
