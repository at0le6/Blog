import React,{useEffect} from 'react'
import { setBlogs } from "../../../redux/actions/product.actions";
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios';
import BlogComponent from './Sub System/BlogComponent';
;


function BlogListing() {
    const posts=useSelector(state=>state);
    const dispach=useDispatch();
    const dataFech = async() => {
        const response = await axios.get('/api/v1/posts').catch(e => console.log(e))
        const {posts}=response.data
        dispach(setBlogs(posts))
    }
    useEffect(()=>{
        dataFech();
    },[])
    return (
    <div>
        <BlogComponent/>
    </div>
    );
}

export default BlogListing;
