
import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Link } from 'react-router-dom';


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
      <div className="timetable">
        { stops.map(stop => (
          <div key={ stop.id }>
            <p>{ stop.name }</p>
            { direction === "North - South"
              ? `Arrive at: ${ stop.arrivalTimeS }, Leave at: ${ stop.departureTimeS }`
              : `Arrive at: ${ stop.arrivalTimeN }, Leave at: ${ stop.departureTimeN }`
            }
          </div>
        )) }
      </div>
      <div className="backbtn">
        <Link to={`/routes/${id}`}>Back</Link>
      </div>
    </div>
  );
};

export default Timetable;
