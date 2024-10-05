import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';

const Pokemon = () => {
    var [poki, setpoki ] = useState([])
    axios.get("https://dummyapi.online/api/pokemon")
        .then(response => {
            console.log(response.data)
            setpoki(response.data)
        })
    return (
      <div>
        <Grid container spacing={2}>

         {poki.map((val) => {
            return (
                <Grid item xs={12} sm={6} md={4}>
                
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://cdn.mos.cms.futurecdn.net/6AxBGxrtbSAkmhLmtdvGLX-1200-80.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                  
                  </CardContent>
                
                   </Card>
                </Grid>
            )
          })}      
          </Grid>   
           
        
        
    
    </div>
  )
}

export default Pokemon