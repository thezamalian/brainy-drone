import React from 'react';
import { Button, TextField, Box, Typography, } from '@mui/material';

const AddProduct = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        const product = {
            name: data.get('name'),
            price: data.get('price'),
            img: data.get('img'),
            details: data.get('details'),
        }

        const uri = "https://serene-wildwood-59933.herokuapp.com/products";
        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Your product has been added Successfully.");
                }
            })
    };
    return (
        <Box
            sx={{
                mx: 'auto',
                width: '50%',
                my: 8,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
                Add a Drone Product
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    sx={{ mb: 1 }}
                    required
                    fullWidth
                    id="name"
                    label="Product Name"
                    name="name"
                    autoComplete="name"
                // defaultValue={displayName}

                />
                <TextField
                    sx={{ mb: 1 }}
                    required
                    fullWidth
                    id="price"
                    label="Product Price"
                    name="price"
                    autoComplete="price"
                // defaultValue={email}

                />
                <TextField
                    sx={{ mb: 1 }}
                    required
                    fullWidth
                    id="img"
                    label="Your Image URL"
                    name="img"
                    autoComplete="img"
                    autoFocus
                />
                <TextField
                    required
                    fullWidth
                    id="details"
                    label="Details"
                    name="details"
                    autoComplete="details"

                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="success"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Add To My Orders
                </Button>
            </Box>
        </Box>
    );
};

export default AddProduct;