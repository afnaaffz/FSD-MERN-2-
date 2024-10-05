import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Statebasics = () => {
    var [name, Setname] = useState("");
    const [inputValue, Setinputvalue] = useState("");

    const handleInput = (e) => {
        Setinputvalue(e.target.value);
    };

    const handleButton = () => {
        Setname(inputValue);
    };

    return (
        <div>
            <Typography variant='h5'>Hi {name}</Typography>
            <TextField variant='outlined' onChange={handleInput}/><br/>&nbsp;
            <Button variant='outlined' onClick={handleButton}>Submit  </Button>   
        </div>
    );
};

export default Statebasics;
