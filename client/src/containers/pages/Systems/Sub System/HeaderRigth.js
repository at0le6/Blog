import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function HeaderRigth() {
    const blog=useSelector(state=>state.Log);
    console.log(blog);
	return <>

  </>;
}

export default HeaderRigth;
