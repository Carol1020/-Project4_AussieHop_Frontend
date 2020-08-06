
import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'


const Timetable = function (props) {
  const [route, setRoute] = useState([]);
  const routeId = props.match.params.routeId;


  useEffect( () => {
    axios.get(`http://localhost:3001/routes/${ routeId }`)
      .then(response => {
        console.log(response);
        setRoute(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  console.log(route)
  const { id, image, start, end, stops, numOfStops, durationInDays, price, direction } = route
  if (!route || !route.stops) return ""
  console.log(route.direction)



  return (
    <div key={ id }>
      <h1>Bus Timetable from { stops[0].name } to { stops[stops.length-1].name }</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>City</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
          </tr>
        </thead>
        <tbody>
        { stops.map(stop => (
          <tr key={ stop.id }>
            <td>{ stop.name }</td>
            <td>
              { direction === "North - South"
                ? `${ stop.departureTimeS }`
                : `Arrive at: ${ stop.departureTimeN }`
              }
            </td>
            <td>
              { direction === "North - South"
                ? `${ stop.arrivalTimeS }`
                : `${ stop.arrivalTimeN }`
              }
            </td>
          </tr>
          )) }
        </tbody>
      </Table>
      <Link to={`/routes/${id}`} className='btn btn-light'>BACK</Link>
    </div>
  );
};

export default Timetable;
