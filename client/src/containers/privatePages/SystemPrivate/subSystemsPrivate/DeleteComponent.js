import React from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function DeleteComponent() {
    const {posts} = useSelector(state => state.Listing)
    function deletePost (id)
    {
      const req=async (id)=>
      {
        const data=await axios.delete(`/api/v1/posts/${id}`).catch(e=>console.log(e))
        if(data.status===204)
      {
        window.location.reload(false)
      }
      }
      req(id);
    }
    return <>
      <h2 className='pb-4'>My posts</h2>
      {!posts?<p>Loanding</p>:posts.map(e=>(
      <div className='mb-3' key={e._id}>
        <div className="row g-0 bg-light position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
        <img src={e.imageUrl} className="w-100" alt="..."/>
      </div>
    <div className="col-md-6 p-4 ps-md-0">
      <h5 className="mt-0">{e.title}</h5>
      <p>{e.littleDescription}</p>
      <button onClick={(a) =>deletePost(e._id)} className="btn btn-danger">Delete</button>
      </div>
</div>
      </div>
    ))}</> ;
}