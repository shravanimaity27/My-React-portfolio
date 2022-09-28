import React,{useEffect} from 'react'; 
import './Contact.css';  
import Header from '../Header/Header'; 
import Video from '../Homepage/Video';  
import { setSelectedOption } from '../Redux/headerSlice';
import { useDispatch } from "react-redux";

function Contact() { 
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(setSelectedOption({ selected_option: "contact" }));
    }, [dispatch]);  

    return (
        <> 
        <Header/>
             <div className='Homepage'> 
        <Video/> 
   <div className='contact'>
<p>I will be glad,if I hear back from you. Please feel free to reach out for 
    any further details.
</p> 
<br/>  
<form action="https://formspree.io/f/xeqdanev" method="POST"> 
    <div className='form-div'>
<label>First Name :</label>
    <input type="text" name="name" placeholder="Enter your name.." required/>
    </div> 

    <div className='form-div'>
    <label>Email :</label>
    <input type="email" name="email"  placeholder="Enter your email" required/>
    </div> 

    <div className='form-div'>
    <label>Message :</label> 
    <textarea id="message" name="message"  placeholder="Enter your message.." required/>
    </div> 

    <div className='form-div-submit'>
    <input type="submit" id="submut"  value="Submit" />

    </div>
   
</form>
   </div>
        </div> 
        </>
    );
}

export default Contact;