import React, { useEffect, useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Box, Grid, Typography, } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router';

const theme = createTheme();

const Purchase = () => {
    const { id } = useParams();
    // console.log(id);
    const { user } = useAuth();
    const { displayName, email } = user;

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const uri = `http://localhost:5000/products/${id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                console.log(product);
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
        // console.log(user);
        const order = { ...product };
        order.isPending = true;
        order.user = { ...user };
        console.log(order);

        const uri = "http://localhost:5000/orders";
        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("This Product is Booked Successfully.");
                }
            })
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
                        backgroundImage: `url(${product.img})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box style={{ marginTop: '70vh' }}>
                        <Typography variant="h3">{product.name}</Typography>
                        <Typography variant="h5">Price: {product.price}</Typography>
                        <Typography variant="h6" color="text.secondary" >{product.details}</Typography>
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