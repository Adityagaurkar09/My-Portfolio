import ReactDom from 'react-dom/client';
import "./index.css"

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About'
import Contact from './views/Contact/Contact';
import Portfolio from './views/Portfolio/Portfolio';


const root = ReactDom.createRoot(document.getElementById('root'));

const router = createBrowserRouter ([
    {
        path:'/',
        element: <Home/>,
    },
    {
        path:'/about',
        element: <About/>,
    },
    {
        path:'/portfolio',
        element: <Portfolio/>,
    },
    {
      path:'/contact',
      element: <Contact/>,
  }
])

root.render (<RouterProvider router={router}/>)
