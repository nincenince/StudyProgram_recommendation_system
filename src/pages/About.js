import React from 'react';
import {Link } from "react-router-dom";
import './About.css';
import bgimg from '../images/bg2.jpg';
import { Col,Row, Container , Image, Jumbotron, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
     
<div>
  
<Jumbotron style={{ backgroundImage: `url(${bgimg})`, width:'100vw', height:'76vh'}} fluid>
    <Container>
        
          <p className="centered-text" style={{ fontSize:'2vw'}}>Discover your study program and future career,
            Let’s start analyse them with your 
            education information and Personality.</p>
      
      
    <Col lg={{ span: 12, offset: 9 }} >
        <p>
        <Link to="/RecProgram">
          <Button 
          className="nextpage-button" style={{ fontSize:'1vw'}}
          // className="mx-auto"
          >
        Recommend Program
        </Button>
        </Link>
        </p>
     </Col>
     </Container>
  </Jumbotron>


    <Container fluid>
      <Row>
        <Col></Col>
          <Col md={2} ><h1 style={{color: "red", textAlign:"center"}}>55</h1>
          <p style={{textAlign:"center"}} >recommendation program</p>
          </Col>
 
          <Col md={1.5} >
          <p className="vertical-line"></p>
          </Col>
  
          <Col md={2} > <h1 style={{color: "red",textAlign:"center"}}>Big5</h1>
          <p style={{textAlign:"center"}}>Personality Test based</p>
          </Col>
          <Col></Col>
      </Row>
   
<Row><br></br></Row>
      <Row>
        <Col className="Step-header" style={{fontWeight:'900'}}>
                STEPS
        </Col>
      </Row>
      <Row><br></br><br></br></Row>

      <Row>
        <Col></Col>
          <Col md={2} >
          <Image style={{widht:'4vw', height:'7vh', paddingLeft:'35%'}} src={require("../images/signin.png")}/>

          <p style={{textAlign:'center', paddingTop:'3%'}}
          >Sign In to our website </p>
          {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        
          </Col>


          <Col md={2}>
          <Image style={{widht:'4vw', height:'7vh', paddingLeft:'35%'}} src={require("../images/signup.png")}/>

          <p style={{textAlign:'center', paddingTop:'3%'}}
          // class="Step2"
          >Fill in your Educational Information</p>
        {/* <div>Icons made by <a href="" title="catkuro">catkuro</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

          </Col>
       
     
  
          <Col md={2}>
          <Image style={{widht:'4vw', height:'7vh', paddingLeft:'35%'}} src={require("../images/perstest.png")}/>

          {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
          <p style={{textAlign:'center', paddingTop:'3%'}}
          // class="Step3"
          >Take Personality Test</p></Col>

          <Col md={2}>
          <Image style={{widht:'4vw', height:'7vh', paddingLeft:'35%'}} src={require("../images/results.png")}/>

          {/* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
          <p style={{textAlign:'center', paddingTop:'3%'}}
          // class="Step4"
          >Recommend Programs Result</p></Col>
       <Col></Col>

      </Row>


  </Container>


        {/* <div>
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

        </div> */}
        {/* </Container> */}
      </div>
   

    )
  }



export default About;
