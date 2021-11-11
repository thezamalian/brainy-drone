import React from 'react';
import { Typography, CssBaseline, Box, Container, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="/">
                Brainy Drone
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '30vh',
            }}
        >
            <CssBaseline />

            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container >

                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                                Brainy Drone
                            </Link>
                            <Typography >
                                <small > Most Famous Drone Service</small>
                            </Typography>
                        </Typography>

                        {/* <Box sx={{ display: 'flex' }}> */}
                        <Link to="/">
                            <Button color="" sx={{ mx: 0, color: 'blue' }}>Home</Button>
                        </Link>
                        <Link to="/products">
                            <Button color="" sx={{ mx: 0, color: 'blue' }}>All Products</Button>
                        </Link>
                        <Link to="/">
                            <Button color="" sx={{ mx: 0, color: 'blue' }}>Contact Us</Button>
                        </Link>
                        <Link to="/">
                            <Button color="" sx={{ mx: 0, color: 'blue' }}>About Us</Button>
                        </Link>
                        {/* </Box> */}

                    </Toolbar>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;