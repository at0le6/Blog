import React,{lazy,Suspense} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className='navbar-brand h1 fs-2' to={'/'}>Devs Blog</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarText">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className='nav-link active me-5' to={'/About'}>About</Link>
        </li>
      </ul>
    </div>
    <Link className='navbar-brand' to={'/login'}>Log In</Link>
    <FontAwesomeIcon icon={faUser} />
  </div>
</nav>);
}

export default header;
