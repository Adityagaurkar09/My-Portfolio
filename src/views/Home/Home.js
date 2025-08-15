import React from 'react'
import './Home.css';
import About from '../About/About'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Coder from './coding.png'
import facebook from './facebook.png'
import linkedin from './linkedin.png'
import github from './github.png'
// import javascript from './js.png'
// import mongodb from './mongodb.png'
// import science from './science.png'
// import pythone from './python.png'
import Skill from '../Skill/Skill'

function Home() {
  return (
    <div className='full'>
      <div>
      <Navbar/>
      </div>
      <div className='maiin'>
    <div name='Home' className='Home'> 
    <div>
      
<p className='size'> Welcome In My Feed</p>
<h1>Hello, I'm a Programmer|</h1>
<p className='personal'>Aspiring web developer with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React . 
 Eager to leverage my skills in front-end and back-end development to create dynamic, user-friendly websites and applications.
  Seeking to contribute to a forward-thinking company where I can grow my technical abilities while delivering innovative digital solutions that enhance user experience and drive business success.</p>
 
  <div>

   <div className='flex'>
     <div>
<p className='size size1' >Available on</p>

<div className='logo'> 
<img src={linkedin} alt='linkedin'/>
<img src={github} alt='github'/>
<img src={facebook} alt='facebook'/>
</div>
</div>
{/* <div>
<p className='size size1' >Currently working on</p>

<div className='logo'> 
<img src={javascript} alt='javascript'/>
<img src={mongodb} alt='mongodb'/>
<img src={science} alt='science'/>
<img src={pythone} alt='pythone'/>
</div>
</div> */}
</div>
</div>
</div>

<div>
<img src={Coder} alt='img' className='codeimg'/>
</div>
</div>
<About/>
<Portfolio/>
<Skill/>
<Contact/>
</div>
<Footer/>
</div>

  );
}

export default Home;
