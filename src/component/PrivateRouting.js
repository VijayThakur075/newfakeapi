import React from 'react';
import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

export default function PrivateRouting({ component: Component, ...rest }) {
    const token =useSelector(state=> state.userToken.token)
    return (
        <div>
            <Route {...rest} 
             render={props => (token ? <Component {...props} /> : <Redirect to="/login" />)}
            />
        </div>
    )
}
