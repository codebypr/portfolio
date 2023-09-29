import React from 'react'
import "./style.css";
import "./Navbar.css";
import my from "../MyImage/my1.jpg"

function AbHome() {
  return (
    <div>
      <div className="container ">
      <div className="row p-3">
        <div className="tex" ><h1 className='text-info  d-flex justify-content-center'>About Me</h1></div>
        <div className="col-md-6 d-flex justify-content-center align-items-center p-3">
          <img src={my} style={{ height: '40vh' }}  alt=''/>
        </div>
        <div className="col-md-6 text-white p-3  d-flex  align-items-center">
          <div className='text-about'>
            <h1 className='text-info'>About Me</h1>
            <p className='pp' style={{ textAlign: 'center' }}>Java Programmer, with extensive knowledge in Java technologies, also a Full Stack Web Developer, and I'm very passionate and dedicated to my work. With a good experience as a Programmer. delivering quality work. </p>
            {/* <p>I have acquired the skills and knowledge necessary to make your project a success.</p>  */}
            <button className="btn btn-warning">Download CV</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AbHome