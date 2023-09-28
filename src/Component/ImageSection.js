import React from 'react'
import "./Navbar.css";
import pr1 from "../MyImage/img.jpg"
export default (props) => {
    return(
        <div className="img-section" style={{height:'60vh'}}>
        <div className="mask"style={{height:'60vh'}} >
        <img className="into-img" src={pr1} alt="" style={{height:'60vh'}} />
        </div> 
        <div className="con text-white" style={{top:'30%'}}>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
          
        </div>
        </div>
    )
}