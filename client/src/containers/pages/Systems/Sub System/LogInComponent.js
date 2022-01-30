import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function LogInComponent() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [message, setMessage] = useState("");

    let handleSubmit=async(e)=>
    {
        e.preventDefault();
        const response=await axios.post('/api/v1/user/signIn',{email,password}).catch(e=>console.log(e));
        if(response.status===200)
        {
            setEmail('')
            setPassword('')
            setMessage("User created successfully");
        } else {
        setMessage("Some error occured");
        }
        console.log(response.status);
    }

  return <div className='mb-5'>
      <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
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
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p>
                    Don't have account? <Link to={'/sig-in'}>Sign Up </Link>
                </p>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
  </div>;
}

export default LogInComponent;
