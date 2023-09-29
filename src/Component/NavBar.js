import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import "./style.css";
import {FaBars, FaTimes} from 'react-icons/fa';

export default function NavBar() {
  
    const [click,setClick]=useState(false);
    function handelClick(){
      setClick(!click);
    }

    const[color,setColor]=useState(false);
    const changeNavColor=()=>{
      if(window.scrollY>=10)
      setColor(true);
    else
    setColor(false);
    };

    window.addEventListener("scroll", changeNavColor);
    return (
      <div className={color?"header header-bg":"header" }>
      <Link to="/portfolio" style={{textDecoration:'none'}}><h2>Portfolio</h2></Link>
       <ul className={click?"nav-item active":"nav-item"}>
        <li><Link to="/portfolio" onClick={handelClick}>Home</Link></li>
        <li><Link to="/about" onClick={handelClick}>About</Link></li>
        <li><Link to="/project" onClick={handelClick}>Project</Link></li>
        <li><Link to="/contact" onClick={handelClick}>Contact</Link></li>
       </ul>
       <div className="sidebar" onClick={handelClick}>
        {click ?(<FaTimes size={20} style={{color: '#fff'}}/>): ( <FaBars size={20} style={{color: '#fff'}}/>)}    
       </div>
      </div>
    )
  
}

