import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Avatar, Grid, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShopIcon from '@mui/icons-material/Shop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const Header = () => {
    const { user, handleLogOut } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const uri = `https://serene-wildwood-59933.herokuapp.com/admins`;
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.forEach(admin => {
                    if (user.email === admin.email) {
                        setIsAdmin(true);
                    }
                }
                )

            })

    }, [user.email])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Grid item xs={4} sm={4} sx={{ display: 'flex', textAlign: 'left', pt: 1 }}>
                        <Avatar alt="Known Sharp" src="https://i.ibb.co/54WvVxt/Cartoon-drone-vector-technology-icon.jpg" sx={{ mx: 1, mt: 2 }} />
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, }}>
                            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> Brainy Drone </Link>
                            <p style={{ fontSize: '12px', marginTop: '-3px' }}> Most Famous Drone Service</p>
                        </Typography>
                    </Grid>

                    <Grid item xs={8} sm={8} sx={{ textAlign: 'right', display: 'inline', alignItems: 'center' }}>
                        <Link to="/products"> <Button color="" sx={{ mx: 1, color: 'white' }}>All Products</Button> </Link>

                        {user.email ?
                            <Box sx={{ display: 'inline' }}>
                                <Typography sx={{ display: 'inline' }}> {user.displayName} </Typography>
                                <Button variant="contained" color="error" onClick={handleLogOut} > Sign Out <LogoutIcon /> </Button>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="end"
                                    sx={{ mr: 2, display: 'inline', ...(open && { display: 'none' }) }}
                                >
                                    {user.email && <Button
                                        variant="inherit" sx={{ pb: 2 }} style={{ paddingRight: "5px" }}
                                    > Dashboard </Button>}
                                    <MenuIcon />

                                </IconButton>
                            </Box>
                            :
                            <span >
                                <Link to="/login"> <Button variant="contained" color="secondary" sx={{ mx: 1, textDecoration: 'none' }}>Login <LoginIcon /> </Button> </Link>
                                <Link to="/signup"> <Button variant="contained" color="warning">Sign Up</Button> </Link>
                            </span>
                        }

                        <Drawer
                            sx={{
                                width: drawerWidth, flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                    width: drawerWidth,
                                    boxSizing: 'border-box',
                                },
                            }}
                            variant="persistent" anchor="right" open={open}
                        >
                            <DrawerHeader>
                                <IconButton onClick={handleDrawerClose}>
                                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : < ChevronRightIcon />}
                                </IconButton>
                            </DrawerHeader>
                            <Divider />
                            {isAdmin ?
                                <List>
                                    <Link to="/manageAllOrders" style={{ textDecoration: 'none', color: 'black' }}>
                                        <ListItem button key="{text}">
                                            <ListItemIcon> <ShoppingCartIcon /> </ListItemIcon>
                                            <ListItemText primary="Manage All Orders" />
                                        </ListItem>
                                    </Link>
                                    <Link to="/addProduct" style={{ textDecoration: 'none', color: 'black' }}>
                                        <ListItem button key="{text}">
                                            <ListItemIcon> <AddShoppingCartIcon /> </ListItemIcon>
                                            <ListItemText primary="Add A Product" />
                                        </ListItem>
                                    </Link>
                                    <Link to="/manageProducts" style={{ textDecoration: 'none', color: 'black' }}>
                                        <ListItem button key="{text}">
                                            <ListItemIcon> <ShopIcon /> </ListItemIcon>
                                            <ListItemText primary="Manage Products" />
                                        </ListItem>
                                    </Link>
                                    <Link to="/makeAdmin" style={{ textDecoration: 'none', color: 'black' }}>
                                        <ListItem button key="{text}">
                                            <ListItemIcon> <SupervisorAccountIcon /> </ListItemIcon>
                                            <ListItemText primary="Make Admin" />
                                        </ListItem>
                                    </Link>
                                    <ListItem button key="{text}" color="error" onClick={handleLogOut} >
                                        <ListItemIcon> <LogoutIcon /> </ListItemIcon>
                                        <ListItemText primary="Sign Out" />
                                    </ListItem>
                                </List>
                                :
                                <List >
                                    <Link to="/myOrders" style={{ textDecoration: 'none', color: 'black' }}>
                                        <ListItem button key="{text}">
                                            <ListItemIcon> <ShoppingCartIcon /> </ListItemIcon>
                                            <ListItemText primary="My Orders" />
                                        </ListItem>
                                    </Link>
                                    <Link to="/payment" style={{ textDecoration: 'none', color: 'black' }}>
                                        <ListItem button key="{text}">
                                            <ListItemIcon> <PaymentIcon /> </ListItemIcon>
                                            <ListItemText primary="Make Payment" />
                                        </ListItem>
                                    </Link>
                                    <Link to="/addReview" style={{ textDecoration: 'none', color: 'black' }}>
                                        <ListItem button key="{text}">
                                            <ListItemIcon> <RateReviewIcon /> </ListItemIcon>
                                            <ListItemText primary="Add Review" />
                                        </ListItem>
                                    </Link>
                                    <ListItem button key="{text}" color="error" onClick={handleLogOut} >
                                        <ListItemIcon> <LogoutIcon /> </ListItemIcon>
                                        <ListItemText primary="Sign Out" />
                                    </ListItem>
                                    {/* <Button variant="contained" color="error" onClick={handleLogOut} > Sign Out </Button> */}
                                </List>
                            }

                        </Drawer>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Header;