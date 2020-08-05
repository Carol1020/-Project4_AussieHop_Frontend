import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Link } from 'react-router-dom';


const AllCities = function () {

  const [cities, setCities] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:3001/stops")
      .then(response => {
        console.log(response);
        setCities(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []) // fetch data only once

  return (
    <div>
      <h1>Cities in Australia East Coast</h1>
      {
        cities.map(city => {
          const { id, name } = city
          return <div key={ id }>
            {/* cities should be shown once */}
            <Link to={`/guide-to-Australia/${id}`}>{ name }</Link>
          </div>
        })
      }
    </div>
  );
};

export default AllCities;
