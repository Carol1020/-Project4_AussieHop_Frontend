import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Link } from 'react-router-dom';
import { Accordion, Card, useAccordionToggle } from 'react-bootstrap'
import CityView from "./CityView"



const AllCities = function () {

  const [cities, setCities] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:3001/stops")
      .then(response => {
        console.log(response.data);
        setCities(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []) // fetch data only once


  return (
    <div>
      <h1>Our Destinations</h1>
      {
        cities.map(city => {
          const { id, name, description } = city
          return <div key={ id }>
            <Accordion defaultActiveKey="1">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-info text-white">
                  { name.toUpperCase()  }
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    { description }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        })
      }
    </div>
  );
};

export default AllCities;
