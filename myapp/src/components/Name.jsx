import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const Name = () => {
  var [name, Setname] = useState('');

  const X = () => {
    Setname("AFNA");
  };

  const Y = () => {
    Setname("AFF");
  };

  const Z = () => {
    Setname("AFFU");
  };


  useEffect(() => {
    X() 
  }, []); 


 
  return (
    <div>
      <h1>{name}</h1>
      <Button variant="contained" color="secondary" onClick={X}>AFNA</Button>&nbsp;
      <Button variant="contained" color="info" onClick={Y}>AFF</Button>&nbsp;
      <Button variant="contained" color="success" onClick={Z}>AFFU</Button>
    </div>
  );
};

export default Name;
