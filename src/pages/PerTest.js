import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './EduInformation.css'
import EduInfoLabel from "../EduInfoLabel"; 
import PersonalityTest from "../PersonalityTest.json"
import { Col,Row, Container , Button, Form} from "react-bootstrap";

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
             <h1 className= "Edu-header" style={{ fontSize:'2vw'}}>Personality Test</h1>
             <div>

      
   
   <ul>
 
    <Col className= "edu-box">
                {
                  PersonalityTest.PersonalityTestList.map((Info) => {
                    return (
                      <Col md={{ span: 5, offset: 3 }}
                      // className= "edu-input-box" 
                      >
                        <Row>
                        <h4 className= "edu-info-label" style={{ fontSize:'1.75vw'}} >{Info.Question}</h4>
                        </Row>
                        <Row >
                        <ul>
                          {
                            Info.ScoreList.map((InfoDetail) => {
                              return (
                             
                                <Form>
                                      {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3" >
                                          <fieldset>
                                          <Form.Group>
                                          <Form.Check 
                                          inline label="1" type={type} id={`inline-${type}-1`} value="1" style={{ fontSize:'1.5vw'}}
                                          name="formHorizontalRadios"/>
                                          <Form.Check 
                                          inline label="2" type={type} id={`inline-${type}-2`}  value="2" style={{ fontSize:'1.25vw'}}
                                          name="formHorizontalRadios"/>
                                          <Form.Check                                  
                                          inline label="3" type={type} id={`inline-${type}-3`} value="3" style={{ fontSize:'1.25vw'}}
                                          name="formHorizontalRadios"/>
                                          <Form.Check                                  
                                          inline label="4" type={type} id={`inline-${type}-4`} value="4" style={{ fontSize:'1.25vw'}}
                                          name="formHorizontalRadios"/>
                                          <Form.Check                                  
                                          inline label="5" type={type} id={`inline-${type}-5`} value="5" style={{ fontSize:'1.25vw'}}
                                          name="formHorizontalRadios"/>
                                          </Form.Group>
                                          </fieldset>
                                        </div>
                                      ))}
                                    </Form>
     
                                  
                              );
                            })
                          }
                        </ul>
                        </Row>
                    </Col>
                    );
                  })
                } 

        <Link to="/PerResult">
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
