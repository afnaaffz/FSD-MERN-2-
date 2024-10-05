import React, { useState } from 'react';
import Button from '@mui/material/Button';


const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount (count - 1);
  };

  return (
    <div>
      <Button variant="outlined" color="info">{count}</Button><br/><br/>
      <div>
        <Button variant="contained"  color="success"  onClick={increment}>Increment</Button>&nbsp;&nbsp;
        <Button variant="contained"  color="error"  onClick={decrement}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
