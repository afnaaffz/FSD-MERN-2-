import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h6">My_app</Typography>&nbsp;&nbsp;
                <Link to='/login'>
                    <Button variant='contained' color='secondary'>lOGIN</Button>
                </Link>&nbsp;
                <Link to='/login'>
                    <Button variant='contained' color='success'>SIGNUP</Button>
                </Link>&nbsp;
                <Link to='/s'>
                    <Button variant='contained' color='error'>STATE</Button>
                </Link>&nbsp;
                <Link to='/a'>
                    <Button variant='contained' color='warning'>COUNTER</Button>
                </Link>&nbsp;
                <Link to='/n'>
                    <Button variant='contained' color='dark'>NAME</Button>
                </Link>
                <Link to='/api'>
                    <Button variant='contained' color='info'>API</Button>
                </Link>
                <Link to='/pokemon'>
                    <Button variant='contained' color='info'>POKEMON</Button>
                </Link>


            </Toolbar>
        </AppBar>
        <br/><br/>
    </div>
  )
}


export default Navbar