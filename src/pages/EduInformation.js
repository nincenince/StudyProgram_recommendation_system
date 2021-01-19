import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './EduInformation.css'
import EduInfoLabel from "../EduInfoLabel"; 
import { Col,Row, Container , Image, Jumbotron, Button, Card} from "react-bootstrap";

class EduInformation extends Component{

  render(){


      return(
          <>
          <div>
           
             
             <h1 className = "edu-navbar-logo">
             <i className = "fas fa-graduation-cap edu-cap" style={{ fontSize:'5vw'}}></i>
                 <p className= "edu-navbar-p" style={{ fontSize:'1.25vw'}}>Study Program</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>Recommendation</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>System
             </p></h1>

    <Container>
      <Col>
             <h1 className= "Edu-header" style={{ fontSize:'2vw'}}>Edit Information</h1>
             <div>

      
   
   <ul>
 
    <Col className= "edu-box">
                {
                  EduInfoLabel.EduInfo.map((Info) => {
                    return (
                      <Col md={{ span: 3, offset: 3 }}className= "edu-input-box" >
                        <Row>
                        <h4 className= "edu-info-label" style={{ fontSize:'1.25vw'}} >{Info.TestName}</h4>
                        </Row>
                        <Row>
                        <ul>
                          {
                            Info.ScoreList.map((InfoDetail) => {
                              return (
                             
                                <select className="edu-select" style={{ fontSize:'1vw'}} >
                                    <option hidden value="">select score</option>
                                    <option>-</option>
                                    <option value="300">300</option>
                                    <option value="400">400</option>
                                    <option value="500">500</option>
                                    <option value="600">600</option>
                                </select>
                             
                              );
                            })
                          }
                        </ul>
                        </Row>
                    </Col>
                    );
                  })
                } 

        <Link to="/RecProgram">
                <Button className="Edu-done-button" style={{ fontSize:'1vw'}}>
                  Done
                </Button>
                </Link>
    
          </Col>
            </ul>
        
      
              



             </div>
             </Col>
            </Container>
          </div>
          </>
      )
  }
}

export default EduInformation;
