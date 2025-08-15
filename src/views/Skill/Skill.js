import React from 'react'
import './Skill.css'
// import Navbar from '../Navbar/Navbar';
import html from './html.png'
import css from './css-3.png'
import nodejs from './nodejs.png'
import react from './physics.png'
import mongodb from './servers.png'
import express from './express.svg'
import javascript from './javascript.svg'
import tailwind from './tailwind-css.svg'

function Skill() {
  return (
    <div>
      <h1>Skill</h1>
      <div className='skill'>
        <div className='skill-item'>
          <img className='img' src={html} alt="HTML" />
          <p className='text'>HTML</p>
        </div>
        <div className='skill-item'>
          <img className='img' src={css} alt="css" />
          <p className='text'>CSS</p>
        </div>
        <div className='skill-item'>
          <img className='img' src={javascript} alt="HTML" />
          <p className='text'>Javascript</p>
        </div>
        <div className='skill-item'>
          <img className='img' src={react} alt="HTML" />
          <p className='text'>React</p>
        </div>

        
      </div>
      <div className='skill'>
        <div className='skill-item'>
          <img className='img' src={mongodb} alt="HTML" />
          <p className='text'>Mongodb</p>
        </div>
        <div className='skill-item'>
          <img className='img' src={express} alt="css" />
          <p className='text'>Express.js</p>
        </div>
        <div className='skill-item'>
          <img className='img' src={nodejs} alt="HTML" />
          <p className='text'>Nodejs</p>
        </div>
        <div className='skill-item'>
          <img className='img' src={tailwind} alt="HTML" />
          <p className='text'>Tailwind</p>
        </div>
      </div>
    </div>
  );
}

export default Skill
