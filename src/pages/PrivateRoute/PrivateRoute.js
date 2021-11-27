import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate} from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useAuth();

    if(isLoading) {
        return <div className='p-5 text-center'>
            <Spinner animation="grow" />
        </div>
    }

    return user.email ? children : <Navigate to='/register'></Navigate>
};

export default PrivateRoute;