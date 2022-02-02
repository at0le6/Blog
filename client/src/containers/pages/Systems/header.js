import React,{useState,useRef,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Dropdown} from 'bootstrap'
//import HeaderComponent from '../../privatePages/subSystemPrivate/HeaderComponent';

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

function Header() {
  const [mounted, setMounted] = useState(true);
  const blog=useSelector(state=>state.Log);
  console.log(blog);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className='navbar-brand h1 fs-2 justify-content-center' to={'/'}>Devs Blog</Link>
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          {blog?<Link className='navbar-brand' to={'/user/home'}>Profile</Link>:<></>}
        </li>
        <li className="nav-item">
          {blog?<Link className='navbar-brand pe-3' to={'/'}>Log out</Link>:<></>}
        </li>
      </ul>
    </div>
    {!blog?<Link className='navbar-brand' to={'/sig-in'}>Sig In</Link>:<></>}
    {!blog?<FontAwesomeIcon icon={faUser} />:<></> }
    {blog?mounted&&<div className='navbar-nav '><HeaderComponent/></div>:<></>}
  </div>
</nav>);
}

export default Header;
