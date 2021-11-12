import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Avatar, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Grid xs={12} sm={4} sx={{ display: 'flex', textAlign: 'left', pt: 1 }}>
                        <Avatar alt="Remy Sharp" src="https://i.ibb.co/54WvVxt/Cartoon-drone-vector-technology-icon.jpg" sx={{ mx: 1, mt: 2 }} />
                        {/* <img src="" alt=""> </img> */}
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, }}>
                            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                                Brainy Drone
                            </Link>
                            <p style={{ fontSize: '12px', marginTop: '-3px' }}> Most Famous Drone Service</p>
                        </Typography>
                    </Grid>

                    <Grid xs={12} sm={8} sx={{ textAlign: 'right' }}>
                        <Link to="/products">
                            <Button color="" sx={{ mx: 1, color: 'white' }}>All Products</Button>
                        </Link>

                        <Link to="/login">
                            <Button variant="contained" color="secondary" sx={{ mx: 1 }}>Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button variant="contained" color="warning">Sign Up</Button>
                        </Link>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;