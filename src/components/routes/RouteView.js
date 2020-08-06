
import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


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
      <Container key={ id } fluid="xl">
        <h1 className="text-center">{ start }-{ end } { stops[0].stopType }</h1>
        <Row>
          <Col xs={12} md={8}>
            <Image src={ image } alt="route" fluid rounded />
          </Col>
          <Col xs={6} md={4}>
            <p>From: { start }</p>
            <p>To: { end }</p>
            <p>Number of Stops: { numOfStops }</p>
            <p>Minimum time: { durationInDays } Days</p>
            <p>Price: ${ price }</p>
            <p>Trip Type: { stops[0].stopType }</p>
            <Link to={`/timetables/${id}`} className='btn btn-info'>BOOK NOW!</Link>{' '}
            <Link to={`/timetables/${id}`} className='btn btn-light'>BUS TIMETABLE</Link>{' '}
            <Link to={'/routes'} className='btn btn-light'>BACK</Link>
          </Col>
        </Row>
      </Container>

  );
};

export default RouteView;
