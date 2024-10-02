import React from 'react'
import './Footer.css'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import telegram from './telegram.png'
import whatsapp from './whatsapp.png'

function Footer() {
  return (
  
    <div className='footer'>
       <hr/>
      <div  className='footer-container'>
      <div className='footer-icon-container'>
        <img className='footer-icon' src={instagram}></img>
        <img className='footer-icon' src={linkedin}></img>
        <img className='footer-icon' src={telegram}></img>
        <img className='footer-icon' src={whatsapp}></img>
      </div>
      <div className='footer-contact'>
        <p footer>Contact Us :- <span>8010825030</span></p>
      </div>
      <div className='rights'>
        <h3>@ 2024 All rights reserved.</h3>
      </div>
      </div>
    </div>
  )
}

export default Footer