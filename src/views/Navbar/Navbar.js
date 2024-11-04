import React, { useState } from 'react'
import './Navbar.css'
import developerimg from './developer.png'
import { Link } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const [icon, seticon] = useState(false)
  return (
    <div className='body'>
    <div className='Navbar'>
            <div className='nav-left'> 
                <img className='nav-img' src={developerimg} alt="developer"/>
                <h1>Aditya 
                <p className='size'>web developer</p></h1> 
            </div>
            
        <div className='nav-right'>
                <p><Link to='/'>Home </Link></p>
                <p><Link to='/About'>About </Link></p>
                <p><Link to='/Portfolio'>Projects </Link></p>
                <p><Link to='/Contact'>Contact </Link></p>
               
        </div>
       
       {icon && (
        <div>
          <ul className='mobile-navbar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Portfolio'>Project</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
          </ul>
        </div>
      )}
       <div onClick={()=> seticon(!icon)} className='navbar-icon'>{icon?<MdOutlineClose size={20}  />:<FiAlignJustify size={20} />}</div>
    </div>
    </div>
  )
}

export default Navbar