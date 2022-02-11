import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import {login} from '../../../../redux/actions/product.actions';

function SignUpComponent() {
    const blog=useSelector(state=>state.Log);
    const dispach=useDispatch()
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [message, setMessage] = useState();
    let handleSubmit=async(e)=>
    {
        e.preventDefault();
        const response=await axios.post('/api/v1/user/signUp',{email,username,password}).catch(e=>{
            if(e.response.status ===402)
            {
                setMessage(e.response.data.message);
            }
            localStorage.setItem('wasLogIn',false)
        });
        if(response.status===204)
        {
            setEmail('')
            setPassword('')
            setMessage("User Sig In");
            dispach(login())
            console.log(e)
            localStorage.setItem('wasLogIn',true)
            navigate('/');
        } 
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="Enter User name" onChange={(e)=>setUsername(e.target.value)} value={username}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <div className="message pt-4"><p>{message}</p></div>
            </form>
    </div>
  )
}

export default SignUpComponent