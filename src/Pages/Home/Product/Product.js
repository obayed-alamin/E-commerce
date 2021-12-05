import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Product = (props) => {
    const {_id ,title,price,img} = props.products
    const {admin} = useAuth()
    

    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{border: 1, boxShadow: 1, p:2 ,bgcolor:'black'}}>
            <CardMedia
                component="img"
                style={{ width: '100%', height: 'auto', margin: '0 auto' }}
                image={img}
                alt="green iguana"
            />
            <CardContent style={{textAlign:'left'}} sx={{color:'whitesmoke'}}>
                <Typography variant="h5" component="div" sx={{fontWeight:600}}>
                    {title}
                </Typography>
                <Typography variant="body1" color="text.white" sx={{fontWeight:600}}>
                   Price: {price}
                </Typography>
            </CardContent>
            <CardActions>
            {admin || <NavLink sx={{mx:'auto'}} style={{textDecoration:'none'}} to={`/purchase/${_id}`} ><Button variant="contained" >Buy Now</Button></NavLink>}
         </CardActions>
        </Card>
    </Grid>
    );
};

export default Product;