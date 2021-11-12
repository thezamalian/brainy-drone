import { Avatar, Grid, Typography, Box } from '@mui/material';
import React from 'react';


const styles = {
    minHeight: '280px',
    width: "80%",
    background: "yellow",
    ":hover": {
        cursor: "pointer",
        background: "red",
    }

};

const SingleFeature = ({ feature }) => {
    const { name, img, details } = feature;

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Box style={styles} sx={{ py: 2, borderRadius: '20px' }}>
                <Avatar alt="Remy Sharp" src={img} sx={{ mx: 'auto', mb: 2, width: '150px', height: '150px' }} />

                <Typography variant="h5">
                    {name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mx: 2, }}>
                    {details}
                </Typography>
            </Box>
        </Grid>
    );
};

export default SingleFeature;