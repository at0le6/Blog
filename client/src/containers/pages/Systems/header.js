import React,{lazy,Suspense} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import HeaderRigth from './Sub System/HeaderRigth';

function Header() {
  const blog=useSelector(state=>state.Log);
  console.log(blog);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse justify-content-center" id="navbarText">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='navbar-brand h1 fs-2' to={'/'}>Devs Blog</Link>
        </li>
      </ul>
    </div>
    <Link className='navbar-brand' to={'/sig-in'}>Sig In</Link>
    <FontAwesomeIcon icon={faUser} />
  </div>
</nav>);
}

export default Header;
