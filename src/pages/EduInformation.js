import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './EduInformation.css'
import EduInfoLabel from "../EduInfoLabel"; 
import { Col,Row, Container , Card, Button, Form} from "react-bootstrap";

class EduInformation extends Component{
  
  render(){
      return(
          <>
          <div>
           
             
             <h1 className = "edu-navbar-logo">
             <i className = "fas fa-graduation-cap edu-cap" style={{ fontSize:'5vw'}}></i>
                 <p className= "edu-navbar-p" style={{ fontSize:'1.25vw'}}>Study Program</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>Recommendation</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>System
             </p></h1>
  <Form onSubmit={this.handleSubmit}>
    <Container>
   
      <Col>
             <h1 className= "Edu-header" style={{ fontSize:'2vw'}}>Edit Information</h1>
             <div>

      
   
   {/* <ul> */}
 
    <Col className= "edu-box">
                {
                  EduInfoLabel.EduInfo.map((Info) => {
                    return (
                      <Col md={{ span: 3, offset: 3 }}
                        className= "edu-input-box" 
                        >
                        <Row>
                        <h4 className= "edu-info-label" style={{ fontSize:'1.25vw'}} >{Info.TestName}</h4>
                        </Row>
                          {
                            Info.ScoreList.map((InfoDetail) => {
                              return (
                                <Form.Group>
                                <Form.Control 
                                 size="md" 
                                 style={{ fontSize:'1vw'}} 
                                 type="number"
                                 placeholder="Enter your score"
                                 min={200}
                                 max={800}
                                 step={10}
                                />
                              </Form.Group>
                              );
                            })
                          }          
                    </Col>
                    );
                  })
                }

              <Col md={{ span: 3, offset: 3 }}
                    className= "edu-input-box" 
                    >
                    <Row>
                    <h4 className= "edu-info-label" style={{ fontSize:'1.25vw'}} >IELTS</h4>
                    </Row>
                            <Form.Group>
                            <Form.Control 
                             size="md" 
                             style={{ fontSize:'1vw'}} 
                             type="number"
                             placeholder="Enter your score"
                             min={1}
                             max={9}
                             step={0.5}
                            />
                          </Form.Group>
                        
                           
                </Col>

            

              </Col>

 

                         {/* <Row> */}
                                <Link to="/RecProgram">
                                  <Button 
                                  className="Edu-done-button float-left" 
                                  type="submit"
                                  style={{ fontSize:'1vw'}}>
                                    Back
                                  </Button>
                          </Link>
                          {/* </Row> */}

                              <Button
                                className="Edu-done-button float-right" 
                                type="submit"
                                style={{ fontSize:'1vw', alignItems:'right'}}>
                                  Done
                              </Button>
  
              </div>
             </Col>
       
                              
            </Container>
            </Form>
          </div>
          </>
      )
  }
}

export default EduInformation;
