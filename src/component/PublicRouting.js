import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';

export default function PublicRouting({ component: Component, ...rest }) {
        const token =useSelector(state=> state.userToken.token)
    return (
        <div>
            <Route {...rest} 
             render={props => (token ? <Redirect to="/products" /> : <Component {...props} />)}
            />
        </div>
    )
}
