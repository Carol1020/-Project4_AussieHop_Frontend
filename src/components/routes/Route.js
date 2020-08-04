import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Redirect } from 'react-router-dom';


const Route = function () {

  const [route, setRoute] = useState({});
  const [id, setId] = useState(1);

  useEffect( () => {
    axios.get(`http://localhost:3001/routes/${ id }`)
      .then(response => {
        console.log(response);
        setRoute(response.data); // Update the routes
      })
      .catch(error => {
        console.log(error);
      })
  }, []) // fetch data only once

  return (
    <div key={ route.id }>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <h3>Route { route.id }: { route.start }-{ route.end } { route.stops[0].stopType }</h3>
      <p>From: { route.start }</p>
      <p>To: { route.end }</p>
      <p>Number of Stops: { route.numOfStops }</p>
      <p>Minimum time: { route.durationInDays } Days</p>
      <p>Price: ${ route.price }</p>
      <p>Trip Type: { route.stops[0].stopType }</p>
      <button>MORE INFO</button>
    </div>
  );
};

export default Route;
