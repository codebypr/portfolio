import React from 'react'
import "./Navbar.css";
import "./style.css";
import java from "../MyImage/java.png"
import js from "../MyImage/js.png"
import rec from "../MyImage/react.png"
import mysql from "../MyImage/mysql.png"
import html from "../MyImage/html.png"
import css from "../MyImage/css.png"
import boots from "../MyImage/boots.png"
import C from "../MyImage/C.png"


function AboutContent() {
  return (
    <> 
   
      {/* Skill section .............. */}

      <div className="skills container text-center" >
        <h1 style={{color:'#ff0082'}}>SKILLS</h1>
        <div className="row">
          <div className="man col-lg-3 col-sm-4 col-6">
            <div className="skill">
              <img src={html}  alt=''/>
              <h2>HTML</h2>
            </div>
            <div className="progress mt-2 ">
              <div className="progress-bar " style={{ width: '97%' ,backgroundColor: '#fc1403'}}>97%</div>
            </div>
          </div>
          <div className="man col-lg-3 col-sm-4 col-6">
            <div className="skill">
              <img src={css} alt=''/>
              <h2>CSS</h2>
            </div>
            <div className="progress mt-2" >
              <div className="progress-bar " style={{ width: '92%' ,backgroundColor: '#03a1fc'}}>92%</div>
            </div>
          </div>
          <div className="man col-lg-3 col-sm-4 col-6">
            <div className="skill">
              <img src={js}  alt=''/>
              <h2>JavaScript</h2>
            </div>
            <div className="progress mt-2" >
              <div className="progress-bar " style={{ width: '83%' ,backgroundColor: '#fceb03',color:'black'}}>83%</div>
            </div>
          </div>
          <div className="man col-lg-3 col-sm-4 col-6">
            <div className="skill">
              <img src={boots} alt='' />
              <h2>Bootstrap</h2>
            </div>
            <div className="progress mt-2" >
              <div className="progress-bar " style={{ width: '90%' ,backgroundColor: '#7703fc'}}>90%</div>
            </div>
          </div>
          <div className="man col-lg-3 col-sm-4 col-6">
            <div className="skill">
              <img id='rec' src={rec}  alt=''/>
              <h2>React</h2>
            </div>
            <div className="progress mt-2" >
              <div className="progress-bar " style={{ width: '80%' ,backgroundColor: '#03b1fc'}}>80%</div>
            </div>
          </div>
          <div className="man col-lg-3 col-sm-4 col-6">
            <div className="skill">
              <img src={java} alt='' />
              <h2>JAVA</h2>
            </div>
            <div className="progress mt-2" >
              <div className="progress-bar " style={{ width: '85%' ,backgroundColor: '#fc2c03'}}>85%</div>
            </div>
          </div>
          <div className="man col-lg-3 col-sm-4 col-6">
            <div className="skill">
              <img src={C} alt='' />
              <h2>C</h2>
            </div>
            <div className="progress mt-2" >
              <div className="progress-bar " style={{ width: '87%' ,backgroundColor: '#037bfc'}}>87%</div>
            </div>
          </div>
          <div className="man col-lg-3 col-sm-4 col-6">
            <div className="skill">
              <img src={mysql} alt='' />
              <h2>MySql</h2>
            </div>
            <div className="progress mt-2" >
              <div className="progress-bar " style={{ width: '75%' ,backgroundColor: '#037bfc'}}>75%</div>
            </div>
          </div>
        </div>
        </div>
      
    

    </>
  )
}

export default AboutContent