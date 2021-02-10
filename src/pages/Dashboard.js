import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './Dashboard.css';
import { Col, Row, Container , Button, Card, Form, FormControl, Navbar} from "react-bootstrap";
import {Doughnut, Radar} from 'react-chartjs-2';
import PersonanlityInfo from "../PersonalityInfo.json";
import History from "../History";
import {Faculties} from "../faculties.jsx";
import EducationInfo from "../EducationInfo"; 

const Score =  PersonanlityInfo.PersonalInfo.map((PerInfo) => 
                    PerInfo.PersonalityScore
                );
    
console.log(Score);

const dataa ={
    labels: ['Extroversion', 'Emotion Stability', 'Agreeableness', 'Conscientiousness', 'Intellect/ Imagination'],
    datasets:
    [{ 
    label: "",
    backgroundColor: "rgba(241, 90, 34, 0.2)",
    data: Score

        }]
    };


class RecommendProg extends Component{
  render(){

      return(
         
         
    <div 
    // style={{backgroundImage: 'linear-gradient(to top,rgb(188,221,250), white)'}}
    >
            {/* <div> */}
                {/* <h1 className = "edu-navbar-logo">
                <i className = "fas fa-graduation-cap edu-cap" style={{ fontSize:'5vw'}}></i>
                    <p className= "edu-navbar-p" style={{ fontSize:'1.25vw'}}>Study Program</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>Recommendation</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>System
                </p>
                </h1> */}
               
            {/* </div> */}


            <Navbar collapseOnSelect expand="lg"  >
            <Navbar.Brand href="/"  >
                <i 
                 className = "fas fa-graduation-cap" style={{ fontSize:'4.95vw'}}
                ></i>
                    <p 
                    className= "navbar-p" style={{ fontSize:'1vw'}}
                    >Study Program</p><p 
                    className="navbar-p" style={{ fontSize:'1vw'}}
                    >Recommendation</p>
                    <p 
                    className="navbar-p" style={{ fontSize:'1vw'}}
                    >System
                </p>
                </Navbar.Brand>
            </Navbar>

        <h2 style={{textAlign:'center'}}>Welcome back!</h2>
        <h3 style={{textAlign:'center'}}>Let's explore your data</h3>
    
        <Container >
                <Row>
                    <Col xs={6} style={{ border:'solid', borderWidth:'thin', borderRadius:'9px', backgroundColor:'white'}}>
                        <div >
                        <p style={{ fontSize:'1.5vw', textDecoration:'bold', paddingTop:'2%'}} >Result History</p>
                        { History.RecommendProgList.map((RecInfo) => {
                            return(
                                <div style={{border:'solid',borderRadius:'0px', borderWidth:'thin', paddingRight:'5%', paddingButtom:'5%', margin:'2%',  paddingLeft:'2%', backgroundImage: 'linear-gradient(to right, white, white)'}}>
                                <p style={{fontSize:'1vw'}}>Date</p>   
                                <Row className= "history-proglist"  style={{ fontSize:'1vw', paddingLeft:'3%'}}>{RecInfo.Date}</Row>
                                    {
                                    RecInfo.ProgramList.map((RecDetail) => {
                                        return (
                                        <div className="box">
                                            <Col style={{ fontSize:'1vw', paddingLeft:'20%'}} className="history-recprogram" ><p>{RecDetail.Programs1}</p>
                                            <p>{RecDetail.Programs2}</p>
                                            <p>{RecDetail.Programs3}</p>
                                            <p>{RecDetail.Programs4}</p>
                                            </Col>
                                          
                
                                            {
                                                RecInfo.ProgramList.map((RecDetail) => {
                                                return (
                                                    <Col className="history-recscore" style={{ fontSize:'1vw', paddingLeft:'20%'}}>
                                                        <p >{RecDetail.RecProgScore1}</p>
                                                        <p >{RecDetail.RecProgScore2}</p>
                                                        <p >{RecDetail.RecProgScore3}</p>
                                                        <p  >{RecDetail.RecProgScore4}</p>
                                                    </Col>
                                                );
                                                }) 
                                            
                                            }
                                            
                                        </div>
                                        );
                                    })
                                    } 
                                </div>
                                    );
                                })
                                }
                        </div>
            </Col>

        <Col >
        
            <div style={{ border:'solid',borderRadius:'20px', borderWidth:'thin',marginLeft:'5%', padding:'10%', backgroundColor:'rgb(255,255,255)'}}>
            <p style={{ fontSize:'1.5vw', textDecoration:'bold'}} >Give us some feedback!</p>
            <Form.Group>
            <FormControl as="select" >
                    {Faculties.faculites.map((e, key) => {
                    return <option key={key} value={e.Key}>{e.Value}</option>
                })}
            </FormControl> 
            <Form.Control style={{ fontSize:'1vw', height:"100px", marginTop:"4%"}} type="text" name="feedback"
                placeholder="Your Feedback..."/>
                
                <Button style={{float:'right', marginTop:'2%',fontSize:'1vw'}}>Submit</Button>
            </Form.Group>

            </div>
            
            </Col>
        </Row>

    </Container>

    <Container>
        <Col  style={{marginTop:'60%', border:'solid', borderWidth:'thin',borderRadius:'5px'
        // , backgroundImage: 'linear-gradient(to right, #C7D6FF, white)'
    }} >
                <p style={{ fontSize:'1.5vw', textDecoration:'bold'}}>Educational Information</p>
                <div >
                {
                  EducationInfo.EduInfo.map((Info) => {
                    return (
                      <div>
                        <h4 className= "history-edulist" style={{ fontSize:'1vw'}} >{Info.TestName}</h4>
                        <ul>
                          {
                            Info.ScoreList.map((InfoDetail) => {
                              return (
                                  <p  style={{ fontSize:'1vw'}} >
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

            <Link to="/EduInformation">
                <Button  style={{ fontSize:'1vw', borderRadius:'50px', backgroundColor:'coral',    border: '1px solid coral', float:'right', marginBottom:'2%'}}>
                    Edit Information
                </Button>
            </Link>
        
        </Col>



        <Col >
            <div style={{ border:'solid', borderWidth:'thin', backgroundColor:'white', paddingBottom:'15%', borderRadius:'5px'}}>
                <p style={{ fontSize:'1.5vw', textDecoration:'bold', padding:'3%'}}>Big 5 Personality Label</p>
                    <Radar style="responsive:true;" data={dataa} />

            <Link to="/EduInformation">
                <Button  style={{ fontSize:'1vw', borderRadius:'50px', backgroundColor:'coral',    border: '1px solid coral', float:'right', margin:'5%'}}>
                    Edit Information
                </Button>
            </Link>

            </div>
        </Col>
    </Container>



        <br/>
        <Link to="/RecProgram">
                <Button className="Dashboard-done-button" style={{ fontSize:'1vw'}}>
                    Done
                </Button>
            </Link>

</div>
        


          
      )
  }
}

export default RecommendProg;


