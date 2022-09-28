import React from 'react';  
import { useNavigate } from 'react-router-dom';
import './Header.css';    
import { useSelector } from "react-redux";

function Header() {    

  const selected_option = useSelector(
    (state) => state.header.selected_option
  ); 

  let navigate = useNavigate(); 

    return (
        <div className='Header'> 
      <nav className='navbar-contains'>
          <p className='portfolio-title' onClick={()=>navigate("/")}>Port<span>Folio</span></p>
          <div className="right-nav">
             <p  className={
                  selected_option === "home"
                    ? "nav-option"
                    : "nav-option-unselected"
                }onClick={()=>navigate("/")}>Home</p>  

            <p className={
                  selected_option === "about"
                  ? "nav-option"
                  : "nav-option-unselected"
                }
                onClick={()=>navigate("/about")}>About</p>  

            <p  className={
                  selected_option === "skills"
                  ? "nav-option"
                  : "nav-option-unselected"
                }onClick={()=>navigate("/skills")}>Skills</p> 

            <p  className={
                  selected_option === "work"
                  ? "nav-option"
                  : "nav-option-unselected"
                }onClick={()=>navigate("/work")}>Work</p> 

            <p className={
                  selected_option === "contact"
                  ? "nav-option"
                  : "nav-option-unselected"
                }onClick={()=>navigate("/contact")}>Contact</p>
          </div>
      </nav>
        </div>
    );
}

export default Header;