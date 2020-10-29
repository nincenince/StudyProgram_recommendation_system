import React from 'react';
import {Link } from "react-router-dom";
import './About.css';
// import bg from './images/crop.jpg';
import logo from './bg2.jpg'; 


function About() {
    return (
        // <div className="about-bg" >
<div>
      <div styles={{
  
         backgroundImage:`url(${logo})` }}>
       
        <img src={logo} alt="Logo" widht="1440" className = "about-bg" />
        <div className="centered-text">
          <p>Discover your study program and future career, </p>
            Let’s start analyse them with your 
            education information and Personality.</div>
   

        <Link to="/Test">
          <button className="nextpage-button">
          Take the test
        </button>
        </Link>

    </div>
        <div>
          <div className="centered-text2">
            What will you get?
          </div>
          
        <div class="bottom-left">           
          <i class="fas fa-smile-beam"></i>
          Bottom Left
        </div>
          
        <div class="bottom-center">
          <i class="fas fa-user-graduate"></i>
          Bottom center</div>

        <div class="bottom-right">
          <i class="fas fa-briefcase"></i>
          Bottom right</div>


            
        </div>


  </div>
    )
  }



export default About;
