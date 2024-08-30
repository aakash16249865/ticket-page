import React from 'react';
import './input.css'; 
import './output.css';
import img from './images/ticket (2).png'

function Tike(){
   return(
   <div className='image-wrapper'>
    <img src={img} alt=""  className='image'/>
    <h1 className='image-text'>hello world</h1>
   </div>


   );

}

export default Tike;