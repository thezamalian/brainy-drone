import React from 'react';
import { Button, TextField, Box, Typography, } from '@mui/material';

import useAuth from '../../../hooks/useAuth';


const AddReview = () => {
    const { user } = useAuth();
    const { displayName } = user;

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        const review = {
            name: data.get('name'),
            role: data.get('role'),
            img: data.get('img'),
            rating: data.get('rating'),
            comment: data.get('comment'),
        }

        const uri = "https://serene-wildwood-59933.herokuapp.com/reviews";
        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Your review has been added Successfully.");
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
                Make a Review
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    sx={{ mb: 1 }}
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    // autoComplete="name"
                    defaultValue={displayName}

                />
                <TextField
                    sx={{ mb: 1 }}
                    required
                    fullWidth
                    id="role"
                    label="Your Job"
                    name="role"
                    autoComplete="role"
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
                    id="rating"
                    label="Give a rating in 0 to 5"
                    name="rating"
                    autoComplete="rating"

                />
                <TextField
                    required
                    fullWidth
                    id="comment"
                    label="Make a comment About our Product"
                    name="comment"
                    autoComplete="comment"

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

export default AddReview;