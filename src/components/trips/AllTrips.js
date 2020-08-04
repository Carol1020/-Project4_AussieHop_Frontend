import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Redirect } from 'react-router-dom';


const AllTrips = function () {

  const [trips, setTrips] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:3001/trips")
      .then(response => {
        console.log(response);
        setTrips(response.data); // Update the trips
      })
      .catch(error => {
        console.log(error);
      })
  }, []) // fetch data only once

  return (
    <div>
      <h1>Day Trips</h1>
      {
        trips.map(trip => {
          const { id, name, description, durationInHours, price, stops } = trip
          return <div key={ id }>
            <h3>{ name }</h3>
            <p>From: { stops[0].name }</p>
            <p>Duration: { durationInHours }hours</p>
            <p>Price: { price }</p>
            <button>MORE INFO</button>
          </div>
        })
      }
    </div>
  );
};

export default AllTrips;
