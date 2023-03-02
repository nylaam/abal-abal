import "./HeroImgStyles.css";

import React from "react"

import IntroImg from "../assets/bg-dev.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
  <div className="hero">
    <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <p>HELLO, INI PORTNELIO</p>
        <h1>Junior Web Developer.</h1>
        <div>
            <Link to="/project" className="btn">
                Karya
                </Link>
            <Link to="/contact" className="btn btn-light">
                Kontak
                </Link>
        </div>
    </div>
  </div>
  );
};


export default HeroImg;