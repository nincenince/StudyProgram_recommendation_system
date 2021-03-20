import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './RecResult.css';
import RecommendPrograms from "../RecommendPrograms";
import { Col,Row, Container , Button} from "react-bootstrap";

class RecommendProg extends Component{



  render(){


      return(
          <>
            <div>
             
             <h1 className = "edu-navbar-logo" >
             <i className = "fas fa-graduation-cap edu-cap" style={{ fontSize:'5vw'}}></i>
                 <p className= "edu-navbar-p" style={{ fontSize:'1vw'}}>Study Program</p><p className="edu-navbar-p" style={{ fontSize:'1vw'}}>Recommendation</p><p className="edu-navbar-p" style={{ fontSize:'1vw'}}>System
             </p></h1>
            
             
            
            
           </div>
                
                
<Container >
<Col >
  <h1 className= "recprog-header" style={{ fontSize:'2vw'}}>Recommend Programs Results</h1>
  <Col className="recprog-box">
        <h2 
      style={{ fontSize:'2vw'}}
        >Possible Programs</h2>
            <br></br>
            <ul>

          <div>
                {
                  RecommendPrograms.RecommendProgList.map((RecInfo) => {
                    return (
                      <div>
                        <Row className= "recprog-proglist" style={{ fontSize:'1.2vw'}} >{RecInfo.Programs}</Row>
                          {
                            RecInfo.ProgramList.map((RecDetail) => {
                              return (
                                <p className="recprog-recscore" style={{ fontSize:'1.2vw'}}>
                                    {RecDetail.RecProgScore}
                                </p>
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
                    <Button className="recprog-done-button" style={{ fontSize:'1vw'}}>
                      Done
                    </Button>
                    </Link>
                  </Row>
              </Col>


          </Col>
        </Container>
          </>
      )
  }
}

export default RecommendProg;


