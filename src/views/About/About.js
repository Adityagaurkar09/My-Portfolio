import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
        <h1>About</h1>
        <p  className='personal'>Hello, I'm Aditya, a passionate Web developer with a keen eye for MERN Stack .
             With a background in IT, I strive to create impactful and visually stunning Software solutions that leave a lasting impression.</p>
             <br/>
           

             <h2 className='color'>Education</h2>
             <p  className='personal'>[Bachelor of Computer application] :- [Rashtra Sant Tukdoji Maharaj Nagpur University], [2020-2023] </p>
          

             <h2 className='color'>Skills & Expertise</h2>
             <p  className='personal'> [Programming Languages] :-  [HTML , CSS , JavaScript , REACTJS , C++ , GIT and GITHUB] </p>
                

                <h2 className='color'>Mission Statement</h2>
                <p className='personal'>My mission is to leverage my skills and creativity to deliver innovative [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. 
                    I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.</p>
    </div>
  )
}

export default About