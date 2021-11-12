import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (

        <Box sx={{ mx: 7, my: 3 }} >
            <Typography variant="h4">
                WORDS FROM OUR CLIENT
            </Typography>
            <Grid container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
            >

                {
                    reviews.map(review => <SingleReview
                        key={reviews.indexOf(review)}
                        review={review}
                    />)
                }
            </Grid>
        </Box>

    );
};

export default Reviews;