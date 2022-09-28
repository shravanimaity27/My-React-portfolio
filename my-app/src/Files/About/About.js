import React,{useEffect} from 'react';  
import Header from '../Header/Header';
import Video from '../Homepage/Video'; 
import './About.css'; 
import Resume from '../../Assets/Resume.pdf'; 
import { setSelectedOption } from '../Redux/headerSlice';
import { useDispatch } from "react-redux";

function About() { 
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(setSelectedOption({ selected_option: "about" }));
    }, [dispatch]); 

    return ( 
        <><Header/>
        <div className='Homepage'> 
        <Video/> 
            <div className='About'>
            <p> 
            I’m Shravani Maity, but you can just call me Shravani. 
            <br/> <br/>
            I am Associate Web Developer, loves to develope websites. I am passionate about learning New technologies and implementing them. 
            I have made various small projects by myself and also hold experience in Real time projects, developed website from scratch while working with
            small, agile team. 
            <br/>  <br/>
            I strive to create elegant solutions that surprise and delight users, while keeping complex technical dependencies in mind for implementation, scalability.
            </p>  <br/><br/> 
            <a href={Resume} download><button className='About-button'>Resume</button></a>
            </div>
        </div> 
        </>
    );
}

export default About;