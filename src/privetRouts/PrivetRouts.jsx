import React, { useContext } from 'react';
import { AuthContext } from '../authContext/AuthContext';
import { Navigate } from 'react-router';

const PrivetRouts = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <h1>Loading</h1>
    }
    if(user){
        return children
    }
    return <Navigate to={'/sign_in'}/>
};

export default PrivetRouts;