import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login Page</h1>
       <TextField label="Name" variant="outlined"></TextField>
       <br/>
       <TextField label="Password" variant="outlined"></TextField>
       <br/>
       <Button variant="outlined">Submit</Button>
    </div>
  )
}

export default Login