import React,{useRef,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Dropdown} from 'bootstrap'

const HeaderComponent=()=> {
    const ddRef = useRef()
    useEffect(() => {
        var dd = new Dropdown(ddRef.current, {})
    })
    return <div>
        <li className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" ref={ddRef} aria-expanded="false">
    Add <FontAwesomeIcon icon={faPlus} /> 
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdown1">
        <li><Link to={'/user/post/add'} className='dropdown-item'>Add Post</Link></li>
        <li><Link to={'/user/post/delete'} className='dropdown-item'>Delete Post</Link></li>
        <li><Link to={'/user/post/update'} className='dropdown-item'>Update Post</Link></li>
    </ul>
</li>
    </div>;
}

export default HeaderComponent;
