import React from 'react'
import './Portfolio.css'
import html from './html.png'
import css from './css.png'
import javascript from './java-script.png'
import react from './react.png'
import github from './github.png'

function Portfolio() {
  const cardItem = [
    {
      id : 1,
      logo : html,
      name : "html",
      description : "HTML (Hypertext Markup Language) is the standard language used to create and design webpages, structuring content with elements like headings, paragraphs, links, images, and more,",
    },
    {
      id : 2,
      logo : css,
      name : "css",
      description :"CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation, layout, and styling of HTML elements on a webpage"
      
    },
    {
      id : 3,
      logo : javascript,
      name : "javascript",
      description : "(JS) is a programming language used to add interactivity, dynamic content, and logic to webpages, enabling client-side behavior like form validation, animations, and API interactions."
    },
    {
      id : 4,
      logo : react,
      name : "react",
      description : "React is a JavaScript library developed by Facebook for building fast, interactive user interfaces using a component-based architecture and a virtual DOM for efficient rendering."
    },
    {
      id : 5,
      logo : github,
      name : "github",
      description : "GitHub is a web-based platform for version control and collaboration, allowing developers to host, manage, and track changes in their code using Git."
    },
  ];
  return (
    <div className='portfolio '>
      <div >
<h1>Portfolio</h1>
      <div className='portfolio-container'>
        {
          cardItem.map(({id,logo,name,description}) =>(
            <div key={id} className='portfolio-card'>
              <img className='portfolio-logo' src={logo} alt=''/>
              <div>
                <h1>{name}</h1>
                <p>{description}</p>
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