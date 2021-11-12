import React from 'react';
import { Redirect, Route } from 'react-router';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import useFirebase from '../../../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase();
    // console.log(user.email);

    if (isLoading) {
        return <Stack
            sx={{
                color: 'grey.500',
                mx: 'auto',
                display: 'flex',
                justifyContent: 'center',
                height: '200px',
                mt: 7,

            }}
            size={80}
            thickness={14}
            spacing={2}
            value="100"
            height="15"
            direction="row"
        >
            <CircularProgress color="secondary" sx={{ width: '150px' }} />
        </Stack>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user?.email) ?
                    (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        ></Redirect>
                    )
            }
        />
    );
};

export default PrivateRoute;