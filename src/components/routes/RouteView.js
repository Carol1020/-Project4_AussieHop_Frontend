{ /*
import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Redirect } from 'react-router-dom';


const RouteView = function () {

  const [route, setRoute] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick]=useState(1);

  useEffect( () => {
    axios.get(`http://localhost:3001/routes/${ id }`)
      .then(response => {
        console.log(response);
        setRoute(response.data); // Update the routes
      })
      .catch(error => {
        console.log(error);
      })
  }, [id]) // fetch data only once

  return (
    {
      <div key={ id }>
        const { id, start, end, stops, numOfStops, durationInDays, price } = route
        <h3>{ start }-{ end } { stops[0].stopType }</h3>
        <p>From: { start }</p>
        <p>To: { end }</p>
        <p>Number of Stops: { numOfStops }</p>
        <p>Minimum time: { durationInDays } Days</p>
        <p>Price: ${ price }</p>
        <p>Trip Type: { stops[0].stopType }</p>
        <button type="button">MORE INFO</button>
        <button type="button" onClick={ handleClick }>BOOK NOW</button>
      </div>
    }
  );
};

export default RouteView;

*/}
