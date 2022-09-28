import React from 'react';  
import './Homepage.css';   
import backgroundVideo from '../../Assets/Galaxy.mp4';

function Video() {
    return (
        <video src={backgroundVideo} autoPlay={true} loop muted>
 </video> 
    );
}

export default Video;