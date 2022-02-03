import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function AddComponent() {
    const navigate=useNavigate();
    const [littleDescription,setLittleDescription]=useState('')
    const [title,setTitle]=useState('')
    const [imageUrl,setImageUrl]=useState('')
    const [cuerpo,setCuerpo]=useState('')
    const [category,setCategory]=useState([])
    let handleSubmit=async (e)=>
    {
        e.preventDefault();
        const response=await axios.post('/api/v1/posts',{title,littleDescription,imageUrl,cuerpo,category}).catch(e=>console.log(e));
        if(response.status===201)
        {
            setLittleDescription('')
            setTitle('')
            setImageUrl('')
            setCuerpo('')
            setCategory([])
            navigate('/')
        } 
        if(response.status===403)
        {
            navigate('/sig-in')
        }
    }
  return <div className='mb-4'>
      <form onSubmit={handleSubmit}>
                <h3>New Post</h3>

                <div className="form-group">
                    <label>Title</label>
                    <input type="text" required={true} className="form-control" placeholder="Enter email" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>

                <div className="form-group">
                    <label>Little Description</label>
                    <input required={true} type="text" className="form-control" placeholder="Enter password" onChange={(e)=>setLittleDescription(e.target.value)} value={littleDescription}/>
                </div>
                <div className="form-group">
                    <label>Image url</label>
                    <input required={true} type="text" className="form-control" placeholder="Enter password" onChange={(e)=>setImageUrl(e.target.value)} value={imageUrl}/>
                </div>
                <div className="form-group">
                    <label>Main Content</label>
                    <textarea required={true} type="text" className="form-control" placeholder="Enter password" onChange={(e)=>setCuerpo(e.target.value)} value={cuerpo}/>
                </div>
                <div className="form-group mb-3">
                    <label>Category</label>
                    <input required={true} type="text" className="form-control" placeholder="Enter password" onChange={(e)=>setCategory([e.target.value])} value={category[0]}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
  </div>
}

export default AddComponent;
