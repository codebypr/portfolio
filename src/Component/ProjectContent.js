import React from 'react'
import t1 from '../MyImage/t1.PNG'

import CollegeImgCard from './CollegeImgCard'
import {AiOutlineHeart} from 'react-icons/ai';

import col1 from "../MyImage/col1.PNG"
import col2 from "../MyImage/col2.PNG"
import col3 from "../MyImage/col3.PNG"
import col4 from "../MyImage/col4.PNG"
import col5 from "../MyImage/col5.PNG"
import col6 from "../MyImage/col6.PNG"
import b1 from "../MyImage/b1.png"
import b2 from "../MyImage/b2.png"
import b3 from "../MyImage/b3.png"
import b4 from "../MyImage/b4.png"
import b5 from "../MyImage/b5.png"
import b6 from "../MyImage/b6.png"
import calculator from "../MyImage/calculator.jpg"
import imusic from "../MyImage/imusic.jpg"
import { Link } from 'react-router-dom';


function ProjectContent() {
  return (
    <div className='container my-3 '>
        <div className="row d-flex justify-content-center ">
      
        <div className="card col-lg-8 p-3 text-white" style={{borderRadius:'0',border:'0px',backgroundColor:'black'}}>
      {/* Image ............... */}
          <CollegeImgCard id="college" img1={col1} img2={col2} img3={col3} img4={col4} img5={col5} img6={col6}/>
  <div className="card-body " style={{backgroundColor:'#3b3d3b'}}>
    <h3 className="card-title">College Management System</h3>
    <p className="card-text">The College Management System is a Java Swing-based software application that serves as an integrated platform for colleges and educational institutions to efficiently manage their administrative and academic operations. This project leverages the MySQL database for data storage and retrieval, ensuring a robust and secure foundation.</p>
    <p className='m-0'>2 years ago</p>
  </div>
  <div className="card-footer bg-dark">
   
  <div className="d-flex justify-content-between align-items-center">
    <p ><AiOutlineHeart size={30} style={{color: 'red'}}/> 183k </p>
    <Link to="https://github.com/codebypr/College/tree/main/College/src" target="_blank" className="btn btn-outline-warning ">SOURCE</Link>
    </div>
  </div>
</div>

                  {/* 2nd Project */}

                  <div className="card col-lg-8 p-3 text-white" style={{borderRadius:'0',border:'0px',backgroundColor:'black'}}>
      {/* Image ............... */}
      <img src={t1} class="card-img-top" alt="..."/>
  <div className="card-body " style={{backgroundColor:'#3b3d3b'}}>
    <h3 className="card-title">TextUtils App</h3>
    <p className="card-text">I have developed a React application that serves as a text modification tool, allowing users to manipulate and modify text content.This App offers a simple yet powerful tool for users to manipulate and customize text content according to their needs.</p>
    <p className='m-0'>1 years ago</p>
  </div>
  <div className="card-footer bg-dark">
  <div className="d-flex justify-content-between align-items-center">
    <p><AiOutlineHeart size={30} style={{color: 'red'}}/> 471k </p>
    <Link to="https://codebypr.github.io/React/" className="btn btn-warning" target='_blank'>Visit web</Link>
    <Link to="https://github.com/codebypr/React/tree/main/src" target="_blank" className="btn btn-outline-warning ">SOURCE</Link>
    </div>
  </div>
</div>

        {/* 3rd Project.................... */}

        <div className="card col-lg-8 p-3 text-white" style={{borderRadius:'0',border:'0px',backgroundColor:'black'}}>
 <CollegeImgCard id="blog" img1={b2} img2={b3} img3={b4} img4={b5} img5={b6} img6={b1}/>
  <div className="card-body " style={{backgroundColor:'#3b3d3b'}}>
    <h3 className="card-title">Bloging Website</h3>
   
    <p className="card-text">I have developed a Blogging website that combines a Java-based backend with a MySQL database for data management and utilizes frontend technologies like HTML, CSS, JavaScript, Bootstrap, and jQuery to deliver an engaging and user-friendly blogging platform.It provides an interactive and dynamic platform for bloggers to share their thoughts, stories, and expertise with a wider audience. The combination of frontend and backend technologies ensures a seamless and feature-rich experience for both bloggers and readers, making it a valuable resource in the world of online content creation and consumption.</p>
    <p className='m-0'>7 month ago</p>
  </div>
  <div className="card-footer bg-dark">
  <div className="d-flex justify-content-between align-items-center">
    <p><AiOutlineHeart size={30} style={{color: 'red'}}/> 851k </p>
    <Link to="https://github.com/codebypr/tech-blog/tree/main/TechBlog/src/main" className="btn btn-outline-warning">SOURCE</Link>
    </div>
  </div>
</div>
     {/* 4th project................................... */}

     <div className="card col-lg-8 p-3 text-white" style={{borderRadius:'0',border:'0px',backgroundColor:'black'}}>
      {/* Image ............... */}
      <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/11/breaking-1603159815-1606179737.jpg" class="card-img-top" alt="..."/>
  <div className="card-body " style={{backgroundColor:'#3b3d3b'}}>
    <h3 className="card-title">News App</h3>
    <p className="card-text">I have developed a React application that functions as a news aggregator, allowing users to access a wide range of news articles from various sources and categories.It offers a user-friendly interface and a wide array of features .The app may rely on APIs or data feeds from various news outlets to fetch and display news content.</p>
    <p className='m-0'>1.5 years ago</p>
  </div>
  <div className="card-footer bg-dark">
  <div className="d-flex justify-content-between align-items-center">
    <p><AiOutlineHeart size={30} style={{color: 'red'}}/> 272k </p>
    <Link to="https://codebypr.github.io/news/" className="btn btn-warning" target='_blank'>Visit web</Link>
    <Link to="https://github.com/codebypr/news/tree/main/src" target="_blank"   className="btn btn-outline-warning ">SOURCE</Link>
    </div>
  </div>
</div>

        {/* 5th project.......... */}


     <div className="card col-lg-8 p-3 text-white" style={{borderRadius:'0',border:'0px',backgroundColor:'black'}}>
      {/* Image ............... */}
      <img src={imusic} class="card-img-top" alt="..."/>
  <div className="card-body " style={{backgroundColor:'#3b3d3b'}}>
    <h3 className="card-title">iMusic android App</h3>
    <p className="card-text"> I have developed an Android music application called "iMusic" using the Java programming language. The app includes essential audio controls like play, pause, skip, shuffle, and repeat to provide a seamless music playback experience.</p>
    <p className='m-0'>1.5 years ago</p>
  </div>
  <div className="card-footer bg-dark">
  <div className="d-flex justify-content-between align-items-center">
    <p><AiOutlineHeart size={30} style={{color: 'red'}}/> 232k </p>
   
    <a href='imusic.apk' download className="btn btn-warning ">Download</a>
    </div>
  </div>
</div>
              {/* 6th project........... */}

     <div className="card col-lg-8 p-3 text-white" style={{borderRadius:'0',border:'0px',backgroundColor:'black'}}>
      {/* Image ............... */}
      <img src={calculator} class="card-img-top" alt="..."/>
  <div className="card-body " style={{backgroundColor:'#3b3d3b'}}>
    <h3 className="card-title">Calculator android App</h3>
    <p className="card-text">I havecreated an Android calculator application named "Calculator" using the Java programming language. The Calculator app provides users with the ability to perform standard mathematical operations, including addition, subtraction, multiplication, and division.</p>
    <p className='m-0'>2 years ago</p>
  </div>
  <div className="card-footer bg-dark">
  <div className="d-flex justify-content-between align-items-center">
    <p><AiOutlineHeart size={30} style={{color: 'red'}}/> 22k </p>
   
    <a href='app-debug.apk' download className="btn btn-warning ">Download</a>
    </div>
  </div>
</div>

        </div>
    </div>
  )
}

export default ProjectContent