import {Box,Typography, Container, Grid, Button } from '@mui/material';
import React from 'react';



const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 , mt:2}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} style={{textAlign:'left'}} sx={{display:'flex',alignItems:'center'}}>
            <Box>
            <Typography variant="h4" sx={{mb:2 , fontWeight:500}}>
              Your New Rides 
            </Typography>
            <Typography variant="body1" sx={{fontSize:'14px',color:'gray' ,fontWeight:300 ,mb:2}}>
              This is the website you all want to purchase your next bike.We provide the best bikes from the world.
            </Typography>
            <Button variant="contained" sx={{bgcolor:'#323B31 '}} style={{fontWeight:500}}>Learn More</Button>
   
            </Box>
            </Grid>
          <Grid item xs={12} md={7}>
            <img src="https://i.ibb.co/1XBdPst/banner.jpg" alt="" style={{width:'100%'}} />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;