import React from 'react'
import './About.css'
// import Navbar from '../Navbar/Navbar';

function About() {
  const aboutcontaint= [
    {
      id:0,
      heading2:"About me",
      description:"I am a passionate and dedicated Full Stack Developer with a strong foundation in HTML, CSS, JavaScript, React.js, Express.js, and MongoDB. I enjoy building responsive, user-friendly web applications and learning new technologies to improve my skills. I have hands-on project experience in developing a Todo App and an E-commerce Website, and I am eager to apply my knowledge in a real-world environment through an internship opportunity.",
    },
    {
id: 1,
heading: "Education",
description: (
  <>
  {/* <div className='education card'>
  <div className='education'>
    <h1>Secondary School Certificate</h1>
    <h2>Holy Cross English Medium High School, Butibori</h2>
    <p>2017-2018</p>
  </div>
  <div className='education'>
    <h1>Secondary School Certificate</h1>
    <h2>Holy Cross English Medium High School, Butibori</h2>
    <p>2017-2018</p>
  </div>
  <div className='education'>
    <h1>Secondary School Certificate</h1>
    <h2>Holy Cross English Medium High School, Butibori</h2>
    <p>2017-2018</p>
  </div>
  </div> */}
  
    [Secondary School Certificate] :- [Holy Cross English Medium High School, Butibori], [2017-2018] <br />
    [Higher Secondary Certificate] :- [Jijamata Junior College, Butibori], [2018-2020] <br />
    [Bachelor of Computer Application] :- [Rashtra Sant Tukdoji Maharaj Nagpur University], [2020-2023]
  </>
)

    },
    // {
    //   id:2,
    //   heading:"Education",
    //   description:"[Programming Languages] :-  [HTML , CSS , JavaScript , REACTJS , C++ , GIT and GITHUB]  ",
    // },
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