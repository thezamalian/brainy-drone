import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import SingleProduct from '../../Shared/SingleProduct/SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const uri = "http://localhost:5000/products";
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0, 6));
            })
    }, []);

    return (
        <Box sx={{ mx: 7 }} style={{ marginTop: '-100px' }}>
            <Typography variant="h3" sx={{ my: 2 }}>
                Our Top Products
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

export default Products;