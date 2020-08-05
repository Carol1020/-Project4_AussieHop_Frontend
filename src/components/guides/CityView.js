
import React, { useState, useEffect } from 'react';
// import _, { uniq } from 'underscore';
import axios from 'axios';
// import SearchResults from 'react-filter-search';
import { Redirect } from 'react-router-dom';


const CityView = function (props) {
  const [city, setCity] = useState([]);
  const cityId = props.match.params.cityId

  useEffect( () => {
    axios.get(`http://localhost:3001/stops/${ cityId }`)
      .then(response => {
        console.log(response);
        setCity(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []) // fetch data only once

  console.log(city)
  if (!city || !city.name) return ""
  const { id, name, description } = city
  return (
    <div key={ id }>
      <h3>{ name }</h3>
      { description }
    </div>
  );
};

export default CityView;
