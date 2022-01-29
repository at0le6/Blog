import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function BlogComponent() {
    const blogs=useSelector(state=>state.Allposts.posts)
    let change=true;
    const renderList=blogs.map(blog=>{
        const {title,littleDescription,imageUrl,category,_id}=blog;
        change=!change
        return(
        <div className='d-flex flex-column' style={{height:"auto"}} key={_id}>
            <div className='d-flex flex-row flex-lg-nowrap flex-wrap justify-content-center'>
                <Link className={`w-50 ${change?'order-2':'order-1'}`} to={`/post/${_id}`}>
                <div className="d-flex justify-content-center">
                    <img className='w-100 img-fluid' src={imageUrl} alt={title}/>
                </div>
                </Link>
            <div className={`w-50 align-self-center ${change?'order-1':'order-2'}`}>
                <div className="container text-center">
                <div className="d-flex flex-column my-5">
                    <h5 className='fw-light text-uppercase'>{category[0]}</h5>
                    <h2 className='fw-bold text-uppercase'>{title}</h2>
                    <p className='fs-5 pb-3'>{littleDescription}</p>
                    <Link to={`/post/${_id}`}>
                        <button type="button" className="btn btn-dark">Read More</button>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    })
    return (<>{renderList}</>);
}

export default BlogComponent;
