import React from 'react'
import './About.css'

function About() {
  const aboutcontaint= [
    {
      id:0,
      heading2:"About",
      description:"Hello, I'm Aditya, a passionate Web developer with a keen eye for MERN Stack. With a background in IT, I strive to create impactful and visually stunning Software solutions that leave a lasting impression. ",
    },
    {
      id:1,
      heading:"Education",
      description:"[Bachelor of Computer application] :- [Rashtra Sant Tukdoji Maharaj Nagpur University], [2020-2023] ",
    },
    {
      id:2,
      heading:"Education",
      description:"[Programming Languages] :-  [HTML , CSS , JavaScript , REACTJS , C++ , GIT and GITHUB]  ",
    },
    {
      id:3,
      heading:"Mission Statement",
      description:"My mission is to leverage my skills and creativity to deliver innovative web development  solutions that exceed company expectations. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.",
    }
  ]
  return (
    <div className='about'> 
      {
       aboutcontaint.map(({heading2,id,heading,description}) => (
       
       <div key={id}>
         <h1>{heading2}</h1>
             <h2 className='color'>{heading}</h2>
             <p  className='personal'>{description} </p>
             </div>
            ))}
    </div>
  )
}

export default About