import React, { useState } from 'react';
import { Box, Grid, Accordion, AccordionDetails, AccordionSummary, Typography, Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SingleReview = ({ review }) => {
    const [expanded, setExpanded] = useState(false);
    const { name, role, rating, img, comment } = review;

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

        <Grid item xs={12} sm={12} md={6}
        //  key={index}
        >
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Box sx={{ width: '60%', flexShrink: 0, display: 'flex' }}>
                        <Avatar alt="Remy Sharp" src={img} sx={{ mx: 1 }} />
                        <Typography sx={{}}>
                            {name}
                            <Typography sx={{ color: 'text.secondary', mx: 2, }}>
                                {role}
                            </Typography>
                        </Typography>
                    </Box>

                    <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                        Rating: {rating}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {comment}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
};

export default SingleReview;