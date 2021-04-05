import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './RecResult.css';
import RecommendPrograms from "../RecommendPrograms";
import { Col,Row, Container , Button, Navbar} from "react-bootstrap";

class RecommendProg extends Component{



  render(){


      return(
          <>
            <div>
             
            <Navbar collapseOnSelect expand="lg"  >
            <Navbar.Brand href="/"  >
                <i 
                 className = "fas fa-graduation-cap" style={{ fontSize:'4.95vw'}}
                ></i>
                   <h5 style={{color:'coral'}}>website name</h5>
                </Navbar.Brand>
            </Navbar>
            
             
            
            
           </div>
                
                
<Container >
<Col >
  <h3 style={{fontWeight:"900"}}>Recommend Programs Results</h3>
  {/* <Col className="recprog-box"> */}
  <Col sm={{ span: 9, offset: 1}} style={{border:'solid', borderWidth:'thin', marginTop:"5%", borderLeftColor:'coral', borderLeftWidth:"5px"}}>
        <h4 
        >Possible Programs</h4>
            <br></br>
            <ul>

          <div>
                {
                  RecommendPrograms.RecommendProgList.map((RecInfo) => {
                    return (
                      <div>
                        <Row>
                        <Col style={{float:'left', marginRight:'5%', paddingLeft:'5%'}} >
                          {RecInfo.Programs}
                        </Col>
                          {
                            RecInfo.ProgramList.map((RecDetail) => {
                              return (
                                <p > 
                                    {RecDetail.RecProgScore}
                                </p>
                              );
                            }) 
                           
                         }
                        
                        </Row>

                      </div>
                    );
                  })
                } 
            </div>

              </ul>
     </Col>
    
              
            <Col sm={{ span: 12, offset: 11 }}>
                <Row>
                  <Link to="/RecProgram">
                    <Button className="recprog-done-button" style={{marginTop:'25%'}}>
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


