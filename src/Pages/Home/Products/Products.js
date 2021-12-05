import {Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://stormy-oasis-41335.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            const slicedData = data.slice(0,6)
            setProducts(slicedData)
        })
    },[])

    console.log(products)
    return (
        <Box sx={{flexGrow:1,mt:2}}>
        <Container>
            <Typography sx={{ fontWeight: 700, m: 2, color: '#9F1E1E' }} variant="h4">
                OUR PRODUCTS
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map(pd => <Product
                    key={pd._id}
                    products={pd}
                    ></Product>)
                }
            </Grid>
        </Container>
    </Box>
    );
};

export default Products;