import React from 'react';
import { Button, TextField, Box, Typography, } from '@mui/material';

const MakeAdmin = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        const admin = {
            email: data.get('email')
        }

        const uri = "https://serene-wildwood-59933.herokuapp.com/admins";
        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("A new admin has been added Successfully.");
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
                Make a new Admin
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    sx={{ mb: 1 }}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                // defaultValue={displayName}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="success"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Make Admin
                </Button>
            </Box>
        </Box>
    );
};

export default MakeAdmin;