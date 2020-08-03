import React, { useState } from 'react';

const Echo = function () {
  const [text, setText] =useState('');
  return (
    <div>
      <h2>{ text }</h2>
      <input onInput={ (e) => setText( e.target.value ) }/>
    </div>
  );
};

export default Echo;
