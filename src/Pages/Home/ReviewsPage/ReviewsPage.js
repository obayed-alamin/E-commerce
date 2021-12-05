import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ReviewsPage = () => {
    const [allReviews ,setAllReviews] = useState([])
    useEffect(()=>{
        fetch('https://stormy-oasis-41335.herokuapp.com/allReviews')
        .then(res=>res.json())
        .then(data=>setAllReviews(data))
    },[])
    return (
       <Container>
            <Grid container spacing={2}>
          
           {
               allReviews.map(review=>
                <Grid item xs={12} md={4}>
                <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {review.name}
                </Typography>
                <Typography variant="h5" component="div">
                 {review.review}
                </Typography>
                
              </CardContent>
            
            </Card>
                    </Grid>
                )
           }
          
            </Grid>
       </Container>
    );
};

export default ReviewsPage;