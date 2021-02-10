import React, { Component } from 'react';
import {Link } from "react-router-dom";

import './RecProgram.css'
import EducationInfo from "../EducationInfo"; 
import PersonanlityInfo from "../PersonalityInfo";
import { Col,Row, Container , Button} from "react-bootstrap";

class Test extends Component{



  render(){


      return(
          <>
         
           
              <h1 
              style={{ fontSize:'2vw', marginLeft:"5%", marginTop:"3%"}}
              >Get ready to discover your programs</h1>
            
      <Container>
            <Col >
           
              <div 
              class="rec-education-info"
              >         
               <h2 style={{ fontSize:'2vw'}}
               >Education Information </h2>
          <br></br>

      <ul>
          <div>
                {
                  EducationInfo.EduInfo.map((Info) => {
                    return (
                      <div>
                        <h4 className= "rec-EduName" style={{ fontSize:'1vw'}} >{Info.TestName}</h4>
                        <ul>
                          {
                            Info.ScoreList.map((InfoDetail) => {
                              return (
                                  <p className= "rec-EduInfo" style={{ fontSize:'1vw'}} >
                                    {InfoDetail.Score}
                                  </p>
                              );
                            })
                          }
                        </ul>
                      </div>
                    );
                  })
                } 
            </div>

              </ul>


               <Link to="/EduInformation">
                <Button className="rec-edit-button" style={{ fontSize:'1vw'}}>
                  Edit Information
                </Button>
                </Link>
                </div>  

           </Col>
                

      <Col 
      >
        <div className="rec-personality">
              <h2 className="rec-personalityInformation" style={{ fontSize:'2vw'}}>Big 5 Personality Label</h2>
              <br></br>

              <ul>

          <div>
                {
                  PersonanlityInfo.PersonalInfo.map((PerInfo) => {
                    return (
                      <div>
                        <p className= "rec-PerName" style={{ fontSize:'1vw'}}  >{PerInfo.Personality}</p>

                                <p className="rec-PerScore" style={{ fontSize:'1vw'}}>
                                    {PerInfo.PersonalityScore}
                                </p>
                      </div>
                    );
                  })
                } 
            </div>

              </ul>

              <Link to="/PerTest">
                <Button className="rec-retake-button" style={{ fontSize:'1vw'}}>
                  Retake Test
                </Button>
                </Link>
                </div>
         
    
   
              <Link to="/RecResult">
                <Button
                 className="rec-programs-button"
                 style={{ fontSize:'1vw'}}
                 >
                  Recommend Programs
                </Button>
                </Link>
            
          </Col>

               
                </Container>
          </>
      )
  }
}

export default Test;
