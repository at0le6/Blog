import React,{useState,useRef,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {login} from '../../../redux/actions/product.actions'
import HeaderComponent from '../../privatePages/subSystemPrivate/HeaderComponent';

function Header() {
  const blog=useSelector(state=>state.Log);
  const dispach=useDispatch()
  const LogOut=()=>
  {
    localStorage.setItem('wasLogIn',false);
    dispach(login());
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className='navbar-brand h1 fs-2 justify-content-center' to={'/'}>Devs Blog</Link>
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className='nav-item'>
          {blog?<HeaderComponent/>:<></>}
        </li>
        <li className="nav-item">
          {blog?<Link className='navbar-brand pe-3' to={'/user/home'}>Profile</Link>:<></>}
        </li>
        <li className="nav-item">
          {blog?<Link className='navbar-brand pe-3' onClick={LogOut} to={'/'}>Log out</Link>:<></>}
        </li>
      </ul>
    </div>
    {!blog?<Link className='navbar-brand' to={'/sig-in'}>Sig In</Link>:<></>}
    {!blog?<FontAwesomeIcon icon={faUser} />:<></> }
  </div>
</nav>);
}

export default Header;
