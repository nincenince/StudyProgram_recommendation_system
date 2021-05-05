import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './PerResult.css';
import { Col,Row, Container , Button, Navbar} from "react-bootstrap";
import PersonanlityInfo from "../PersonalityInfo";


class RecommendProg extends Component{

  render(){


      return(
          <>
            
                
                

                           
<Col md={{ span: 10, offset: 2}} >
  <h4 style={{fontWeight:"900", marginTop:'4%'}}
   >Big 5 Personality Result</h4>
  <Col sm={{ span: 6, offset: 1}} style={{border:'solid', borderWidth:'thin', marginTop:"5%", borderLeftColor:'coral', borderLeftWidth:"5px"}}>
        <h4
      style={{ margin:'2%'}}
        >Personality Label</h4>
           
           <ul>

<div>
    <br/>
 
              
  {
        PersonanlityInfo.PersonalInfo.map((PerInfo) => {
          return (
            <div>
              <Row>
              <Col style={{float:'left', paddingLeft:'5%', marginRight:'55%'}}>
                {PerInfo.Personality}
              </Col>
                  {/* <Col style={{float:'right'}}> */}
                        <p style={{float:'right'}}>{PerInfo.PersonalityScore}</p> 
                  {/* </Col> */}
                  
              </Row>

            </div>
          );
        })
      } 
  </div>

    </ul>
     </Col>
    
              
            <Col sm={{ span: 12, offset: 10 }}>
                <Row>
                  <Link to="/RecProgram">
                    <Button className="PerResult-done-button" style={{marginTop:'25%', borderRadius:'20px', backgroundColor:'coral', bordercolor:'coral'}}>
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

          </>
      )
  }
}

export default RecommendProg;


