import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './PerResult.css';
import { Col,Row, Container , Button, Navbar} from "react-bootstrap";
// import PersonanlityInfo from "../PersonalityInfo";
import { useState } from 'react';
import { useSelector} from 'react-redux';

function PerResult(props){
  let comefrom = useSelector(state => state.comefrom);
  let perresult = useSelector(state => state.personality);
  const [PersonanlityInfo, setPersonanlityInfo] = useState({
    "PersonalInfo": [
      {
        "Personality": "Extroversion",
        "PersonalityScore": perresult[0]
      },
      {
        "Personality": "Neuroticism",
        "PersonalityScore": perresult[1]
      },
      {
        "Personality": "Agreeableness",
        "PersonalityScore": perresult[2]
      },
      {
        "Personality": "Conscientiousness",
        "PersonalityScore": perresult[3]
      },
      {
        "Personality": "Openness",
        "PersonalityScore": perresult[4]
      }      
    ]   
  })
  const backToOrigin = () => {
    if(comefrom === 'dashboard'){
      props.history.push("/Dashboard");
    }
    else if(comefrom === 'recommend') {
      props.history.push("/RecProgram");
    }
  }
  return(
    <>                         
      <Col md={{ span: 10, offset: 2}} >
        <h4 style={{fontWeight:"900", marginTop:'4%'}}>Big 5 Personality Result</h4>
        <Col sm={{ span: 6, offset: 1}} style={{border:'solid', borderWidth:'thin', marginTop:"5%", borderLeftColor:'coral', borderLeftWidth:"5px"}}>
          <h4 style={{ margin:'2%'}}>Personality Label</h4>
          <ul>
            <div>
              <br/>         
              {PersonanlityInfo.PersonalInfo.map((PerInfo) => {
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
                  </div>);})
              } 
            </div>
          </ul>
        </Col>
      
                
        <Col sm={{ span: 12, offset: 10 }}>
          <Row>
            <Button className="PerResult-done-button" style={{marginTop:'25%', borderRadius:'20px', backgroundColor:'coral', bordercolor:'coral'}} onClick={backToOrigin}>
              Done
            </Button>
          </Row>
        </Col>
      </Col>
    </>
  )
}

export default PerResult;


