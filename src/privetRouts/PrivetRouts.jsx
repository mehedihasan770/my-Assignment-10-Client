import React, { useContext } from 'react';
import { AuthContext } from '../authContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRouts = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return 
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/sign_in'}/>
};

export default PrivetRouts;