import React,{useEffect} from 'react'; 
import './Homepage.css';     
import Profile from './Body'; 
import Header from '../Header/Header'; 
import Video from './Video'; 
import { setSelectedOption } from '../Redux/headerSlice';
import { useDispatch } from "react-redux";


function Homepage() { 
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(setSelectedOption({ selected_option: "home" }));
    }, [dispatch]);    

    return ( 
        <><Header/>
        <div className='Homepage'>
            <Video/>
        <Profile/>
    </div> 
    </>
    );
}

export default Homepage;