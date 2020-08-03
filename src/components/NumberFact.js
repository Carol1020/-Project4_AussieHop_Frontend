import React, { useState, useEffect } from 'react';
import axios from 'axios';


const NumberFact = () => {
  const [fact, setFact] = useState();

  // useEffect hook is for asynchronous process
  useEffect( () => {
    axios.get('http://numbersapi.com/random/trivia?json').then((result) => {
      setFact(result.data.text);
    });
  }, []); // put empty [] here so it doesn't rerun the function every time.


  return (
    <div>
      <h2>Number Trivia</h2>
      <p>
        { fact }
      </p>
    </div>
  )
}


export default NumberFact;
