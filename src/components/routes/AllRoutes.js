import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Link } from 'react-router-dom';


const AllRoutes = function () {

  const [routes, setRoutes] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick]=useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  }

  useEffect( () => {
    axios.get("http://localhost:3001/routes")
      .then(response => {
        console.log(response);
        setRoutes(response.data); // Update the routes
      })
      .catch(error => {
        console.log(error);
      })
  }, []) // fetch data only once

  return (
    <div>
      <h1>Bus Routes</h1>
      {
        routes.map(route => {
          const { id, image, start, end, stops, numOfStops, durationInDays, price } = route
          return <div key={ id }>
            <h3>{ start }-{ end } { stops[0].stopType }</h3>
            <img src={ image } alt="route" />
            <p>From: { start }</p>
            <p>To: { end }</p>
            <p>Number of Stops: { numOfStops }</p>
            <p>Minimum time: { durationInDays } Days</p>
            <p>Price: ${ price }</p>
            <p>Trip Type: { stops[0].stopType }</p>
            <Link to={`/routes/${id}`}>MORE INFO</Link>
            <button type="button" onClick={ handleClick }>BOOK NOW</button>
          </div>
        })
      }
    </div>
  );
};

export default AllRoutes;
