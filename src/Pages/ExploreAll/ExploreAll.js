import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import SingleProduct from '../Shared/SingleProduct/SingleProduct';

const ExploreAll = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const uri = "https://serene-wildwood-59933.herokuapp.com/products";
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);
    return (
        <Box sx={{ mx: 7, mt: 5, minHeight: 500 }}>
            <Typography variant="h3">
                All of Our Products
            </Typography>
            <Grid container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >

                {
                    products.map(pd => <SingleProduct
                        key={products.indexOf(pd)}
                        id={products.indexOf(pd)}
                        product={pd}
                    />)
                }
            </Grid>
        </Box>
    );
};

export default ExploreAll;