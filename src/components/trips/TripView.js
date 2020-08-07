
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';



const TripView = function (props) {
  const [trip, setTrip] = useState([]);
  const tripId = props.match.params.tripId

  useEffect( () => {
    axios.get(`http://localhost:3001/trips/${ tripId }`)
      .then(response => {
        console.log(response);
        setTrip(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []) // fetch data only once

  console.log(trip)
  if (!trip || !trip.name) return ""
  const { id, name, description, durationInHours, price, stops } = trip
  return (
    <div key={ id }>
      <h3>{ name }</h3>
      <p>From: { stops[0].name }</p>
      <p>Duration: { durationInHours }hours</p>
      <p>Price: ${ price }</p>
      <button className='btn btn-info' type="button">BOOK NOW!</button>{' '}
      <Link to={`/day-trips`} className='btn btn-light'>BACK</Link>
    </div>
  );
};

export default TripView;
