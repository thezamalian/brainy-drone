import { Grid, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            < Grid
                item
                xs={12}
                sm={12}
                md={12}
                sx={{
                    color: 'blue',
                    height: '80vh',
                    backgroundImage: 'url(https://i.ibb.co/wp62Cgq/alessio-soggetti-r-SFx-BGpnluw-unsplash.jpg)',
                    backgroundRepeat: 'no-repeat',
                    // backgroundColor: (t) =>
                    //     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Typography variant="h2" style={{ marginTop: '60vh' }}>
                    World's No.1 Drone
                </Typography>
            </Grid >
        </Grid>



        /* <div>
           <div class="mdc-banner" role="banner">
               <div class="mdc-banner__content"
                   role="alertdialog"
                   aria-live="assertive">
                   <div class="mdc-banner__graphic-text-wrapper">
                       <div class="mdc-banner__graphic" role="img" alt=""> <img src="https://image.freepik.com/free-photo/white-drone-hovering-bright-blue-sky_158595-3345.jpg" alt=""></img> </div>
                       <div class="mdc-banner__text">
                           There was a problem processing a transaction on your credit card.
                       </div>
                   </div>
                   <div class="mdc-banner__actions">
                       <button type="button" class="mdc-button mdc-banner__primary-action">
                           <div class="mdc-button__ripple"></div>
                           <div class="mdc-button__label">Fix it</div>
                       </button>
                   </div>
               </div>
           </div>
       </div> */

    );
};

export default Banner;