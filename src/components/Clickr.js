import React, { useState } from 'react';

const Clickr = function () {
  const [clicks, setClicks] = useState(0);

  return (
    <button onClick={ () => setClicks(clicks + 1) }>
      { clicks } clicks so far
    </button>
  );
};

export default Clickr;
