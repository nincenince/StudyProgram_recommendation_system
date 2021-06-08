import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './RecResult.css';
import RecommendPrograms from "../RecommendPrograms";
import { Col,Row, Container , Button, Navbar} from "react-bootstrap";
import {  useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';

function RecommendProg (props){

  let history_list = useSelector(state => state.recommend);
  let temp = {
    "RecommendProgList": [
      {
        "Programs": "Program1",
        "ProgramList": [
          {
            "RecProgScore": "100%"
          }
        ]
      },
      {
        "Programs": "Program2",
        "ProgramList": [
          {
            "RecProgScore": "100%"
          }
        ]
      },
      {
        "Programs": "Program3",
        "ProgramList": [
          {
            "RecProgScore": "100%"
          }
        ]
      },
      {
        "Programs": "Program4",
        "ProgramList": [
          {
            "RecProgScore": "100%"
          }
        ]
      },
      {
        "Programs": "Program5",
        "ProgramList": [
          {
            "RecProgScore": "100%"
          }
        ]
      }          
    ]   
  }
  const [RecommendPrograms, setRecommendPrograms] = useState(temp)
  useEffect(() => {
    function mapdata () {
        var count;
        let temp = [];
        let latest_data = history_list[history_list.length-1];
        let s1 = "";
        let s2 = "";
        let s3 = "";
        let s4 = "";
        let s5 = "";
        for(let i=0;i<parseInt(latest_data['first_s']);i++){s1=s1+"⭐️"};
        for(let i=0;i<parseInt(latest_data['second_s']);i++){s2=s2+"⭐️"};
        for(let i=0;i<parseInt(latest_data['third_s']);i++){s3=s3+"⭐️"};
        for(let i=0;i<parseInt(latest_data['forth_s']);i++){s4=s4+"⭐️"};
        for(let i=0;i<parseInt(latest_data['fifth_s']);i++){s5=s5+"⭐️"};
        let a = {
          "Programs": latest_data['first'],
          "ProgramList": [
            {
              "RecProgScore": latest_data['first_p'],
              "RecProgStar": s1
            }
          ]
        }
        let b = {
          "Programs": latest_data['second'],
          "ProgramList": [
            {
              "RecProgScore": latest_data['second_p'],
              "RecProgStar": s2
            }
          ]
        }
        let c = {
          "Programs": latest_data['third'],
          "ProgramList": [
            {
              "RecProgScore": latest_data['third_p'],
              "RecProgStar": s3
            }
          ]
        }
        let d = {
          "Programs": latest_data['forth'],
          "ProgramList": [
            {
              "RecProgScore": latest_data['forth_p'],
              "RecProgStar": s4
            }
          ]
        }
        let e = {
          "Programs": latest_data['fifth'],
          "ProgramList": [
            {
              "RecProgScore": latest_data['fifth_p'],
              "RecProgStar": s5
            }
          ]
        }
        temp.push(a);
        temp.push(b);
        temp.push(c);
        temp.push(d);
        temp.push(e);
        let x ={
          "RecommendProgList": temp
        };
        setRecommendPrograms(x);
      }
    mapdata();
  }, []);



  return(
    <>
      <div>
       
      </div>
          
                
      {/* <Container > */}
        <Col md={{ span: 8, offset: 2}}>
          <h3 style={{fontWeight:"900", marginTop:'4%'}}>Recommend Programs Results</h3>
          {/* <Col className="recprog-box"> */}
          <Col sm={{ span: 8, offset: 1}} style={{border:'solid', borderWidth:'thin', marginTop:"5%", borderLeftColor:'coral', borderLeftWidth:"5px"}}>
            <h4 style={{ margin:'2%'}}>Possible Programs</h4>
            <br></br>
            <ul>
              <div>
                {RecommendPrograms.RecommendProgList.map((RecInfo) => {
                  return (
                    <div>
                      <Row>
                        <Col style={{float:'left', marginRight:'5%', paddingLeft:'5%'}} >
                          {RecInfo.Programs}
                        </Col>
                          {RecInfo.ProgramList.map((RecDetail) => {
                            return (
                              <div>
                                <p> 
                                  {RecDetail.RecProgStar}
                                </p>
                                <p>
                                  Predicted grade: {RecDetail.RecProgScore}
                                </p>
                              </div>
                            );
                          })}
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
                <Button className="recprog-done-button" style={{marginTop:'25%', marginBottom:'50%'}}>
                  Done
                </Button>
              </Link>
            </Row>
          </Col>
        </Col>
      {/* </Container> */}
    </>
  )
}

export default RecommendProg;


