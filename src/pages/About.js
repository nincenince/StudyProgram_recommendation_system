import React from 'react';
import {Link } from "react-router-dom";
import './About.css';
// import bgimg from './bg2.jpg'; 
import Image from 'react-bootstrap/Image';
import bgimg from '../images/bg2.jpg';

function About() {
    return (
     
<div>
      <div styles={{
  
         backgroundImage:`url(${bgimg})` }}>
       
        <Image src={bgimg}  alt="bgimg" widht="100%" className = "about-bg" />
       
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
      <div className="about-guide">
        <h1 style={{color: "red"}}>55</h1>
        <p>recommendation</p>
        <p>programs</p>
      </div>
        
        <p className="vertical-line"></p>

      <div className="about-guide2">
        <h1 style={{color: "red"}}>Big 5</h1>
        <p>Personality Test</p>
        <p>based</p>
      </div>

    </div>


        <div>
          <div className="centered-text2">
            STEPS
          </div>
          
        <div class="bottom-left">   
        <p>Sign In to </p>        
        <p>our website</p>
        </div>
          
        <div class="bottom-center1">
        <p>Fill in your </p>     
        <p>Educational</p>   
        <p>Information</p>
        </div>

        <div class="bottom-center2">
        <p> Take  </p>        
        <p>Personality Test</p>
        </div>

        <div class="bottom-right">
        <p> Recommend  </p>        
        <p>Programs Results</p>
        </div>

        </div>

  </div>
    )
  }



export default About;
