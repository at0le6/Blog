import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import { Button,Modal } from 'react-bootstrap';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function UpdatedComponent() {
  const navigate=useNavigate()
  const [show, setShow] = useState(false);
  const [id,setId]=useState('')
  const [littleDescription,setLittleDescription]=useState('')
  const [title,setTitle]=useState('')
  const [imageUrl,setImageUrl]=useState('')
  const [cuerpo,setCuerpo]=useState('')
  const [category,setCategory]=useState([])
  const handleClose = async (e) => 
  {
    e.preventDefault();
    const response=await axios.patch(`/api/v1/posts/${id}`,{title,littleDescription,imageUrl,cuerpo,category}).catch(e=>console.log(e));
    if(response.status===200)
    {
        setLittleDescription('')
        setTitle('')
        setImageUrl('')
        setCuerpo('')
        setCategory([])
        window.location.reload(false)
        setShow(false)
    } 
    if(response.status===403)
    {
        navigate('/sig-in')
    }
  };
  const handleShow = (e) => 
  {
    setTitle(e.title)
    setCategory(e.category)
    setImageUrl(e.imageUrl)
    setLittleDescription(e.littleDescription)
    setCuerpo(e.cuerpo)
    setId(e._id)
    setShow(true)
  };
  const hanfleCloseIT=()=>setShow(false)
  const {posts} =useSelector(state=>state.Listing);
  return <>
      <h2 className='pb-4'>My posts</h2>
      {!posts?<p>Loanding</p>:posts.map(e=>(
      <div className='mb-3' key={e._id}>
        <div className="row g-0 bg-light position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
        <img src={e.imageUrl} className="w-100" alt="..."/>
      </div>
    <div className="col-md-6 p-4 ps-md-0">
      <h5 className="mt-0">{e.title}</h5>
      <p>{e.littleDescription}</p>
      <Button variant="primary" onClick={a=>handleShow(e)}>Edit</Button>
      </div>
      </div>
      <Modal show={show} onHide={hanfleCloseIT}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
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
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hanfleCloseIT}>
            Close
          </Button>
          <Button variant="primary" onClick={a=>handleClose(a)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    ))
    }</>;
}
