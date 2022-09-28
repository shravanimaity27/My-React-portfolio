import React from 'react';  
import './Homepage.css'; 
import Profile from '../../Assets/Profile.png';  
import {ReactComponent as Facebook} from '../../Assets/Svg/facebook.svg'; 
import {ReactComponent as Linkedin} from '../../Assets/Svg/linkedin.svg'; 
import {ReactComponent as Github} from '../../Assets/Svg/github.svg'; 
import Typewriter from 'typewriter-effect'; 


function Body() {
    return (
        <div className='Homepage-body'> 
        <div className='Homepage-profile-img'>
        <img src={Profile} alt=''/> 
        <br/> 
        <p>I'm Shravani <br/><span id=''> <Typewriter 
        autostart 
        loop
        onInit={(typewriter) => {setInterval(() => {
            typewriter.typeString("Developer").deleteAll().start(0)}, 2000);; 
        } 
        }
        />  </span> </p>  
        <br/>
        <div className='Homepage-links'>   
       <a href='https://github.com/shravani0011?tab=repositories' target="_blank" rel="noopener noreferrer"><Github className='svg'/></a>
        <a href='https://www.linkedin.com/in/shravani-maity-127405111/' target="_blank" rel="noopener noreferrer"><Linkedin className='svg'/></a>
        <a href="https://www.facebook.com/profile.php?id=100010376223985" target="_blank" rel="noopener noreferrer"><Facebook className='svg'/></a>
        </div>
        </div>  
        </div>
    );
}

export default Body;