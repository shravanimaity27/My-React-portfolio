import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Homepage from './Files/Homepage/Homepage';   
import About from './Files/About/About';   
import Skills from "./Files/Skills/Skills";  
import Work from './Files/Work/Work'; 
import Contact from './Files/Contact/Contact';
// import Body from "./Files/Homepage/Body";
import './App.css'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/skills",
    element: <Skills/>,
  },
  {
    path: "/work",
    element: <Work/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

function App() {
  return (  
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    );
 }

export default App; 