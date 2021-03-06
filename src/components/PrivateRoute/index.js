
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /auth page
        <Route {...rest} render={props => (
            authed ?
                <Component {...props} />
                : <Redirect to="/auth" />
        )} />
    );
};

export default PrivateRoute;