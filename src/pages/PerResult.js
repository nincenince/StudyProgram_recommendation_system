import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './PerResult.css';
import { Col,Row, Container , Button} from "react-bootstrap";
import PersonanlityInfo from "../PersonalityInfo";


class RecommendProg extends Component{

  render(){


      return(
          <>
            <div>
             
                <h1 className = "edu-navbar-logo">
                <i className = "fas fa-graduation-cap edu-cap" style={{ fontSize:'5vw'}}></i>
                    <p className= "edu-navbar-p" style={{ fontSize:'1.25vw'}}>Study Program</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>Recommendation</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>System
                </p></h1>
            
             
            </div>
                
                
        <Container >

                           
<Col >
  <h1 
  className= "PerResult-header"
   style={{ fontSize:'2vw'}}>Big 5 Personality Result</h1>
  <Col className="PerResult-box">
        <h2 
      style={{ fontSize:'2vw', margin:'2%'}}
        >Personality Label</h2>
           
            <ul>

          <div>
              <br/>
           
                        
            {
                  PersonanlityInfo.PersonalInfo.map((PerInfo) => {
                    return (
                      <div>
                        <Col
                         className= "PerResult-proglist" 
                         style={{ fontSize:'1vw'}}  >{PerInfo.Personality}</Col>
                          {
                            PerInfo.PersonalityList.map((PerInfoDetail) => {
                              return (
                                <Col
                                className="PerResult-recscore"
                                 style={{ fontSize:'1vw'}}>
                                    {PerInfoDetail.PerScore}
                                </Col>
                              );
                            }) 
                           
                         }
              

                      </div>
                    );
                  })
                } 
            </div>

              </ul>
     </Col>
    
              
            <Col lg={{ span: 12, offset: 11 }}>
                <Row>
                  <Link to="/RecProgram">
                    <Button className="PerResult-done-button" style={{ fontSize:'1vw'}}>
                      Done
                    </Button>
                    </Link>
                  </Row>
              </Col>


          </Col>


            {/* <Link to="/RecProgram">
                <Button className="PerResult-done-button" style={{ fontSize:'1vw'}}>
                    Done
                </Button>
            </Link> */}

        </Container>
          </>
      )
  }
}

export default RecommendProg;


