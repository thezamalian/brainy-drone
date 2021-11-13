import React, { useEffect, useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Box, Grid, Typography, Stack, } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useAuth from '../../../hooks/useAuth';

const theme = createTheme();

const Purchase = () => {
    const { user } = useAuth();
    const { displayName, email } = user;

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0, 6));
            })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        const user = {
            name: data.get('name'),
            email: data.get('email'),
            phone: data.get('phone'),
            address: data.get('address'),
        }
        // const { email, password } = user;

        // loginWithEmail(email, password)
        console.log(user);
    };
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main"
            // sx={{ height: '100vh' }}
            >
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        color: 'white',
                        backgroundImage: `url(${products[0]?.img})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box style={{ marginTop: '70vh' }}>
                        <Typography variant="h3">{products[0]?.name}</Typography>
                        <Typography variant="h5">Price: {products[0]?.price}</Typography>
                        <Typography variant="h6" color="text.secondary" >{products[0]?.details}</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <AddShoppingCartIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Place Your Order
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
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                defaultValue={email}

                            />
                            <TextField
                                sx={{ mb: 1 }}
                                required
                                fullWidth
                                id="phone"
                                label="Phone Number"
                                name="phone"
                                autoComplete="phone"
                                autoFocus
                            />
                            <TextField
                                required
                                fullWidth
                                id="address"
                                label="Address Line"
                                name="address"
                                autoComplete="address"

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
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Purchase;