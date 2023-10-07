
import React from "react";
import { TypeAnimation } from 'react-type-animation'
import "./Navbar.css";
import "./style.css";
import pr from "../MyImage/Home.jpg"
import AbHome from "./AbHome";
import {BiLogoFacebook, BiLogoGmail, BiLogoInstagram, BiLogoLinkedin} from 'react-icons/bi';
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <><div>
            
            
            <div className="img-section">
                <div className="mask">
                    <img className="into-img" src={pr} alt="" />
                </div>
                <div className="con text-white " >
               
                    <span style={{ fontSize: '2em' }}>Hi I am </span >
                    <TypeAnimation
                        sequence={[
                            ' Java Developer',
                            1000,
                            ' Freelancer',
                            1000,
                            ' Programmer',
                            1000,
                            ' Coder',
                            1000,

                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block', color: 'cyan' }}
                        repeat={Infinity}
                    />
                    <h2 style={{ fontSize: '2em' }}>PARMOD KUMAR</h2>
                    
                    <div className="my-3">
                    <Link to="https://www.facebook.com/pritam.dangi.127" target="_blank"><BiLogoFacebook className="im m-2" size={40} style={{color:'white'}}/></Link>
                    <Link to="https://www.linkedin.com/in/parmod-panchal/" target="_blank"><BiLogoLinkedin className="im m-2" size={40} style={{color:'white'}}/></Link>
                    <Link to="https://www.instagram.com/dashing_boy_077/" target="_blank" ><BiLogoInstagram className="im m-2" size={40} style={{color:'white'}}/></Link>
                    <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/panchalpritam105%40gmail.com?compose=CllgCJqXxwnzLZFMwbhnvvclGpNbrFhthjwdxmdQDBLFwsMrKSwBLjWWRbdlnXRffzQzRDRSsVq" target="_blank"><BiLogoGmail className="im m-2" size={40} style={{color:'white'}}/></Link>
                    </div>
                    <div className="mt-4">
                    <Link to="/project" className="butn bg-warning text-dark">PROJECT</Link>
                    <Link to="/contact" className="butn">CONTACT</Link>
                    </div>
                </div>
            </div>
        </div>
            <div className="ab">
                <AbHome/>
                <div className="mb-3 d-flex justify-content-evenly">
           <a href='parmod.pdf' download className=" butn  bg-warning text-dark ">Download CV</a>
           <Link to="/about" className=" butn ">Read More</Link>
           </div>
               
            </div>

        </>
    );
}