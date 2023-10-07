import React from 'react'
import ImageSection from './ImageSection';
import AboutContent from './AboutContent';
import AbHome from './AbHome';
import about from "../MyImage/contact.jpg"
export default () => {
    return(
        <>
       <ImageSection heading="ABOUT" text=" I am A Full Stack Web Developer" img={about}/>
       <AbHome/>
       <div className="container d-flex justify-content-center mb-3">
           <a href='parmod.pdf' download className="btn btn-warning ">Download CV</a>
           </div>
       <AboutContent/>
        </>
    )
}