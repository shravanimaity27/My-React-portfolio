import React,{useEffect}  from 'react'; 
import './Work.css'; 
import Header from '../Header/Header'; 
import Video from '../Homepage/Video'; 
import Project1 from '../../Assets/ethinicity.png'; 
import Project2 from '../../Assets/talentminer.png'; 
import ModalImage from "react-modal-image"; 
import { setSelectedOption } from '../Redux/headerSlice';
import { useDispatch } from "react-redux";

function Work() { 

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(setSelectedOption({ selected_option: "work" }));
    }, [dispatch]);    

    return (
        <><Header/>
        <div className='Homepage'> 
        <Video/> 
            <div className='Work'>
              <div className='Work-description'>I am always curious to learn new things, to implement the same. I Had worked 
in different projects which includes vanilla Js,react.js and different tech stacks. Small representation of my work shown below. </div> 
<br/> <br/>
<div className='Work-demo'>  
<ModalImage 
className="project1"
 small={Project1}
 large={Project1}
 alt=""
/>
<ModalImage 
className="project1"
 small={Project2}
 large={Project2}
 alt=""
/>
</div>
            </div>
        </div> 
        </>
    );
}

export default Work;