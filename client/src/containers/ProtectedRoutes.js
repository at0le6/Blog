import React from 'react';
import {useSelector} from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import LogInComponent from './pages/Systems/Sub System/LogInComponent';

const ProtectedRoutes = () => {
    const blog=useSelector(state=>state.Log);
    return blog?<Outlet/>:<Navigate to={'/sig-in'}/>;
};

export default ProtectedRoutes;
