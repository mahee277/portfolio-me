import React from 'react';
import  "../styles/navbar.css";
import { Link } from 'react-router-dom';
export default function Navbar(props){
return(
    
    <div>
       <div className={`dex1 ${props.active ? 'bg-dark' : ''}`}>
       
           <div><h1 className='mahee'>MAHEE</h1></div>
        
        <ul className='up'>
            <li><Link className='li' to='/'>HOME</Link></li>
            <li><Link className='li' to='/about'>ABOUT</Link></li>
            <li><Link className='li' to='/projects'>PROJECTS</Link></li>
            <li><Link className='li' to='/ideas'>IDEAS</Link></li>
            
        </ul>
            
       </div>
    </div>
);

}