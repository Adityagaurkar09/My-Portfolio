import React from 'react'
import './Portfolio.css'
import html from './zomata.png'
import css from './game.png'
import javascript from './note app.png'
import react from './react.png'
import github from './github.png'

function Portfolio() {
  const cardItem = [
   
    {
      id : 2,
      logo : css,
      name : "Stone Paper Scissor Game",
      description :"Stone Paper Scissor Game Developed By Using Html , Css And Javascript"
      
    },
    {
      id : 3,
      logo : javascript,
      name : "Quick Note App",
      description : "Quick Note App By Using Reactjs"
    },
  ];
  return (
    <div className='portfolio '>
      <div >
<h1>Projects</h1>
      <div className='portfolio-container'>
        {
          cardItem.map(({id,logo,name,description}) =>(
            <div key={id} className='portfolio-card'>
              <img className='portfolio-logo' src={logo} alt=''/>
              <div>
                <h1>{name}</h1>
                <p>{description}</p>
              </div>
              <div className='btn-container'>
              <button className='btn' onClick={() => window.open("https://github.com/Adityagaurkar09/quick-note", "_blank")}>code</button>
              <button className='btn' onClick={() => window.open("https://quick-note-application.netlify.app", "_blank")}>Demo</button>
              </div>
            </div>
          ))
        }
      </div>
      </div>
    </div>

  )
}

export default Portfolio