import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios';
import {setListBlogs,removeSelectedBlogs} from '../../../redux/actions/product.actions';
import DeletingComponent from './subSystemsPrivate/DeleteComponent';
import UpdatedComponent from './subSystemsPrivate/UpdatedComponent';


export const PreLoadListing = (props) => {
    const {data}=props;
    const posts=useSelector(state=>state.Listing);
    const dispach=useDispatch();
    const dataFech = async() => {
        const response = await axios.get('/api/v1/posts/user').catch(e => console.log(e))
        const {posts}=response.data
        dispach(setListBlogs(posts))
    }
    useEffect(()=>{
        dataFech();
        return ()=>
        {
            removeSelectedBlogs()
        }
    },[])
  return <>{data==='delete'?<DeletingComponent/>:<UpdatedComponent/>}</>;
};
