import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Link } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';


const AllTrips = function () {

  const [trips, setTrips] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick]=useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  }

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

      <Container fluid="xl">
        <h1>Day Trips</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Trip</th>
                <th>City</th>
                <th>Duration</th>
                <th>Price(AUD)</th>
              </tr>
            </thead>
            <tbody>
              {
                trips.map(trip => {
                  const { id, name, description, durationInHours, price, stops } = trip
                  return <tr key={ id }>
                    <td><Link to={`/day-trips/${id}`}>{ name }</Link></td>
                    <td><Link to={`/guide-to-Australia`}>{ stops[0].name }</Link></td>
                    <td>{ durationInHours }hours</td>
                    <td>${ price } <button className='btn-sm btn-info float-right'>BOOK NOW!</button></td>

                  </tr>

                })
              }
            </tbody>
          </Table>
      </Container>

  );
};

export default AllTrips;
