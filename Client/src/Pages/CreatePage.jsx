import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router';
import {toast} from 'react-hot-toast';
import {ArrowLeftIcon} from 'lucide-react';
import axios from 'axios';

const CreatePage = () => {

  const[title,setitle]=useState("");
  const[content,setcontent]=useState("");

  const navigate = useNavigate();

  const handlesubmit = async(e) =>{
    e.preventDefault( );

    if(!title.trim() | !content.trim()){
      toast.error("Field Are Required")
      return
    }
    try {
      await axios.post("http://localhost:5000/notes",{
        title,
        content
      })
      toast.success("Note Create Succesfully");
      navigate('/')
    } catch (error) {
      console.log("Error In Creating Note",error);
      toast.error("Error In Creating Note");  
    }
  }
  return(
    <div className='min-h-screen bg-base-200'>
      <div className='contanier mx-auto px-4 py-8'>
        <div className='max-w-screen-2xl mx-auto'>
          <Link to={'/'} className='btn btn-ghost mb-6'>
          <ArrowLeftIcon className='size-5'/>
          Back To Home
          </Link>
          <div className='card bg-base-100'>
          <div className='card-body '>
          <h2 className='card-title text-2xl mb-4'>Create Notes</h2>
          <form onSubmit={handlesubmit}>
            <div className='form-control mb-4'>
              <label className='label'>
                <span className='label-text'>
                  Title
                </span>
              </label>
              <input type='text' placeholder='Note Title' className='input input-bordered' value={title} onChange={(e)=> setitle(e.target.value)}/>
            </div>
             <div className='form-control mb-4'>
              <label className='label'>
                <span className='label-text'>
                  Content
                </span>
              </label>
              <textarea type='text' placeholder='Content...' className='input input-bordered' value={content} onChange={(e)=> setcontent(e.target.value)}/>
            </div>
            <div className="card-action justify-end">
              <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
          </form>
          </div>
          </div>
        </div>
      </div>
    </div>
)};

export default CreatePage