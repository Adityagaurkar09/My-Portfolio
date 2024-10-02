import React from 'react'
import './Navbar.css'
import developerimg from './developer.png'
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
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Portfolio</p>
        </div>
        
    </div>
    </div>
  )
}

export default Navbar