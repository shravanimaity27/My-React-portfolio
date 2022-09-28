import React,{useEffect} from 'react'; 
import './Skills.css'; 
import Header from '../Header/Header'; 
import Video from '../Homepage/Video';  
import Logos from '../../Assets/logo.png'; 
import { setSelectedOption } from '../Redux/headerSlice';
import { useDispatch } from "react-redux";

function Skills() { 

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(setSelectedOption({ selected_option: "skills" }));
    }, [dispatch]);   

    return (
        <> 
        <Header/>
             <div className='Homepage'> 
        <Video/> 
            <div className='Skills'> 
            <div className='Skills-name'> 
            <p>Technical Skills</p> 
            <br/>
            <ul> 
            <li>Figma</li>
                <li>HTML5</li>
                <li>CSS3</li> 
                <li>Bootstrap</li>
                <li>Js/ES6</li>
                <li>React.js</li>
            </ul>
            </div>
            <div className='Skills-image'>
                <img src={Logos} alt=''/>
            </div>
            </div>
        </div> 
        </>
    );
}

export default Skills;