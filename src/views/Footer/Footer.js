import React from 'react'
import './Footer.css'
import Instagram from './instagram.png'
import Linkedin from './linkedin.png'
import Telegram from './telegram.png'
import Whatsapp from './whatsapp.png'

function Footer() {
  return (
    <div className='footer'>
       <hr/>
      <div  className='footer-container'>
      <div className='footer-icon-container'>
        <img className='footer-icon' src={Instagram}></img>
        <img className='footer-icon' src={Linkedin}></img>
        <img className='footer-icon' src={Telegram}></img>
        <img className='footer-icon' src={Whatsapp}></img>
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