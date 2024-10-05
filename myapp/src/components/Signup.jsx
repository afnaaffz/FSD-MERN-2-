import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
       <h1>Sign up Page</h1>
      <TextField label="Name" variant="outlined"></TextField>
      <br/>
      <TextField label="Age" variant="outlined"></TextField>
      <br/>
      <TextField label="Address" variant="outlined"></TextField>
      <br/>
      <TextField label="Password" variant="outlined"></TextField>
      <br/>
      <Button variant="outlined">Submit</Button>
    </div>
  )
}

export default Signup