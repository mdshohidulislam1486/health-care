import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest} ) => {

    const {user, pageLoading} = useAuth();
    if(pageLoading){
        return <Spinner className='text-center' animation="border" variant="warning"/>
    }

    
    return (
        <Route
        {...rest}
        render ={({location})=>user.email ? 
        children : 
        <Redirect
        to={{
            pathname:'/login',
            state:{from:location}
        }}
        >

        </Redirect>}
        >
            
        </Route>
    );
};

export default PrivateRoute;