import {useEffect} from 'react';
import axios from 'axios';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    useEffect(()=>{

    },[])
    return blog?<Outlet/>:<Navigate to={'/sig-in'}/>
};

export default ProtectedRoutes;