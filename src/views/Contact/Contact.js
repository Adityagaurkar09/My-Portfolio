import React from 'react'
import './Contact.css'
import toast,{ Toaster } from 'react-hot-toast';

function Contact() {
  return (
    <div className='Contact'>
        <h1>Contact</h1>
       
        <div className='form'>
            <h2>Send Your Message </h2>
            <form>
            <div className='form-container'>
              
            <label className='form-label'>  Enter Your Full Name :- </label>
                <input type='text ' placeholder='Your Full Name' className='form-input' ></input>
               
                <label className='form-label'>
                Enter Your Email ID :- </label>
                <input type='text' placeholder='Your Email ID' className='form-input'></input>
              
                <label className='form-label'> Message :- </label>
                <textarea type='text' placeholder='Your Message' className='form-input  message'></textarea>
              <div>
                <button className='btn' onClick={()=>{
                   toast.success("successfully",{
                    duration:8000
                   })
                  
                }}>Submit</button></div>
                </div>
                </form>
        </div>
        <Toaster position='top-center'/>
    </div>
  )
}

export default Contact