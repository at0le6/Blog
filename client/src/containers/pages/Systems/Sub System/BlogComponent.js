import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function BlogComponent() {
    const blogs=useSelector(state=>state.Allposts.posts)
    const renderList=blogs.map(blog=>{
        const {title,littleDescription,imageUrl,category,_id}=blog;
        return(
        <div className='d-flex flex-column mb-5' style={{height:"auto"}} key={_id}>
            <div className='d-flex flex-row flex-wrap'>
            <div className='flex-fill d-flex justify-content-center '>
            <img 
                className='img-fluid'
                src={imageUrl}
                alt={title}
            />
            </div>
            <div className='flex-fill'>
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
  return <>{renderList}</>;
}

export default BlogComponent;
