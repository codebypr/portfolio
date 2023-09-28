
import React from "react";
import { TypeAnimation } from 'react-type-animation'
import "./Navbar.css";
import "./style.css";
import pr from "../MyImage/Home.jpg"
import AbHome from "./AbHome";

export default function Home() {

    return (
        <><div>
            <div className="img-section">
                <div className="mask">
                    <img className="into-img" src={pr} alt="" />
                </div>
                <div className="con text-white">

                    <span style={{ fontSize: '2em' }}>Hi I am  </span >
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
                    <h1>PARMOD KUMAR</h1>
                    <button className="butn">PROJECT</button>
                    <button className="butn">CONTACT</button>
                </div>
            </div>
        </div>
            <div className="ab">
                <AbHome />
            </div>

        </>
    );
}