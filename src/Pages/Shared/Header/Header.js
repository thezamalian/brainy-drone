import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            Brainy Drone
                        </Link>
                        <Typography >
                            <small > Most Famous Drone Service</small>
                        </Typography>
                    </Typography>

                    <Link to="/products">
                        <Button color="" sx={{ mx: 1, color: 'white' }}>All Products</Button>
                    </Link>

                    <Link to="/login">
                        <Button variant="contained" color="secondary" sx={{ mx: 1 }}>Login</Button>
                    </Link>
                    <Link to="/signup">
                        <Button variant="contained" color="warning">Sign Up</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;