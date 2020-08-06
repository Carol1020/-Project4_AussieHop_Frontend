import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Link } from 'react-router-dom';
import { Card, CardColumns, Container } from 'react-bootstrap';



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
    <Container fluid="xl">
      <h1 className="text-center">Bus Routes</h1>
      <CardColumns>
      {
        routes.map(route => {
          const { id, image, start, end, stops, numOfStops, durationInDays, price } = route
          return <div key={ id }>
              <Card className="p-3">
                <Card.Img variant="top" src={ image } rounded />
                <Card.Body>
                  <Card.Title>
                    <Link to={`/routes/${id}`}>{ start }-{ end } { stops[0].stopType }</Link>
                  </Card.Title>
                  <Card.Text>
                    <p>From: { start }</p>
                    <p>To: { end }</p>
                    <p>Number of Stops: { numOfStops }</p>
                    <p>Minimum time: { durationInDays } Days</p>
                    <p>Price: ${ price }</p>
                    <p>Trip Type: { stops[0].stopType }</p>
                    <Link to={`/routes/${id}`} className='btn btn-info'>MORE INFO</Link>{' '}
                    <button className='btn btn-info' type="button" onClick={ handleClick }>BOOK NOW!</button>
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>
        })
      }
      </CardColumns>
    </Container>

  );
};

export default AllRoutes;
