import React from 'react'
import "./style.css";
import "./Navbar.css";
import my from "../MyImage/myimage.png"

function AbHome() {
  return (
    
      <div className="container-fluid ">
      <div className="row px-3 d-flex justify-content-center">
        <div className="d-flex align-items-center flex-column " ><h1 className='text-info my-0   '>About Me</h1><p>My introduction</p></div>
        <div className=" Abpic d-flex justify-content-center align-items-center">
          <img  src={my} className='Abimage'  alt=''/>
        </div>
        <div className="col-md-6 text-center text-white p-0 my-3  d-flex  align-items-center">
          <div className='text-about'>
            
            <p>Java Programmer, with extensive knowledge in Java technologies, also a Full Stack Web Developer, and I'm very passionate and dedicated to my work. With a good experience as a Programmer. delivering quality work. </p>
            <div className="container d-flex">
              <div className="col d-flex align-items-center flex-column justify-content-center"><h2 className='my-0 text-warning'>03+</h2><p className='my-0'>Years</p><p className="mt-0">experience</p></div>
              <div className="col d-flex align-items-center flex-column justify-content-center"><h2 className='my-0 text-warning'>10+</h2><p className='my-0 '>Projects</p><p className='mt-0 '>completed</p></div>
              <div className="col d-flex align-items-center flex-column justify-content-center"><h2 className='my-0 text-warning'>12+</h2><p className='my-0'>Work</p><p className="mt-0">languages</p></div>
              
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default AbHome