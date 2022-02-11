import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent=()=> {
    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);
    return <div className='pe-4'>
        <div className="dropdown">
    <button className="btn btn-primary dropdown-toggle" type="button" onClick={toggleOpen} aria-expanded="false">
        Actions   
    </button>
    <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="dropdown1">
        <li><Link to={'/user/post/add'} className='dropdown-item' onClick={toggleOpen}>Add Post</Link></li>
        <li><Link to={'/user/post/delete'} className='dropdown-item' onClick={toggleOpen}>Delete Post</Link></li>
        <li><Link to={'/user/post/update'} className='dropdown-item'onClick={toggleOpen}>Update Post</Link></li>
    </ul>
</div>
    </div>;
}

export default HeaderComponent;
