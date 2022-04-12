import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function AddComponent() {
  return <div className='mb-4'>
      <form >
                <h3>New Post</h3>

                <div className="form-group">
                    <label>Title</label>
                    <input type="text" required={true} className="form-control" placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label>Little Description</label>
                    <input required={true} type="text" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Image url</label>
                    <input required={true} type="text" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Main Content</label>
                    <textarea required={true} type="text" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group mb-3">
                    <label>Category</label>
                    <input required={true} type="text" className="form-control" placeholder="Enter password"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
  </div>
}

export default AddComponent;
