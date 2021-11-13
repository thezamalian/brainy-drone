import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import SingleFeature from '../SingleFeature/SingleFeature';

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        const uri = "http://localhost:5000/features";
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setFeatures(data);
            })
    }, [])

    return (

        <Box sx={{ my: 5, mx: 7 }} >
            <Typography variant="h4" sx={{ mb: '-10px' }}>
                All Great Features of Our Products
            </Typography>
            <Grid container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
                style={{ marginTop: '20px' }}
            >
                {
                    features.map(feature => <SingleFeature
                        key={features.indexOf(feature)}
                        feature={feature}
                    />)
                }
            </Grid>
        </Box>
    );
};

export default Features;