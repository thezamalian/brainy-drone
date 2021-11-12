import React from 'react';
import { Grid, Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography, } from '@mui/material';
import { Link } from 'react-router-dom';

const SingleProduct = ({ id, product }) => {
    const { name, price, img, details } = product;
    return (
        <Grid item xs={2} sm={4} md={4}
        //  key={index}
        >
            <Card
                xs={2} sm={4} md={4}
                sx={{
                    maxWidth: 345,

                }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="Brainy Drone"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" >
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h6" >
                            Price: {price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"
                            sx={{ minHeight: 150 }}
                        >
                            {details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/purchase/${id}`} style={{ width: '100%' }}>
                        <Button variant="contained" sx={{ width: '100%' }} color="primary">
                            Buy Now
                        </Button>
                    </Link>

                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleProduct;