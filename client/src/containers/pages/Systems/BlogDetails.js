import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import {selectedBlogs,removeSelectedBlogs} from '../../../redux/actions/product.actions';

function BlogDetails() {
  const blog=useSelector(state=>state.post);
  const {title,imageUrl,cuerpo,userID,category,createdAt,littleDescription}=blog;
  const {id}=useParams();
  const dispach=useDispatch();
  const fetchData=async()=>
  {
    const response=await axios.get(`/api/v1/posts/${id}`).catch(err=>console.log(err));
    const {post}=response.data;
    dispach(selectedBlogs(post));
  }
  useEffect(()=>{
    if(id && id!=="") fetchData();
    return ()=>
    {
      dispach(removeSelectedBlogs())
    }
  },[id])
  return (
    <div>
        {Object.keys(blog).length===0?<p>Loanding...</p>:(
        <header class="d-flex" style={{background:"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(" + imageUrl + ")",height:"30vh"}}>
          <div class="container position-relative px-4 px-lg-5 align-self-center">
            <div class="row gx-4 gx-lg-5 justify-content-center text-white">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="post-heading">
                        <h2>{title}</h2>
                        <h2 class="fw-light subheading">{littleDescription}</h2>
                        <span class="meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            {createdAt}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
        )}
    </div>
  )
}

export default BlogDetails;
