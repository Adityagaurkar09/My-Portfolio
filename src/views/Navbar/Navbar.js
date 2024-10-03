import React from 'react'
import './Navbar.css'
import developerimg from './developer.png'
import { Link } from 'react-router-dom'
function Navbar() {
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
                <p><Link to='/Portfolio'>Portfolio </Link></p>
                <p><Link to='/Contact'>Contact </Link></p>
        </div>
        
    </div>
    </div>
  )
}

export default Navbar