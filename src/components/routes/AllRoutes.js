import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Redirect } from 'react-router-dom';


const AllRoutes = function () {

  const [routes, setRoutes] = useState([]);

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
      <ul>
        {
          routes.map(route => <li key={ route.id }>{ route.title }</li>)
        }
      </ul>
    </div>
  );
};

export default AllRoutes;
