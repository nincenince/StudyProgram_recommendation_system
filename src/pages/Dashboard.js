import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './Dashboard.css';
import { Col, Row, Container , Button, Card, Form, FormControl, Navbar} from "react-bootstrap";
import {Doughnut, Radar} from 'react-chartjs-2';
//import PersonanlityInfo from "../PersonalityInfo.json";
import History from "../History";
import {Faculties} from "../faculties.jsx";
import axios from 'axios';

import { useSelector, useDispatch} from 'react-redux';
import {  useEffect } from 'react';
import { update_comefrom , update_per, update_edu} from '../actions';


function Dashboard (props){
    let token = useSelector(state => state.token)
    let isLogged = useSelector(state => state.isLogged);
    let EducationInfo = useSelector(state => state.education);
    let PersonalityInfo = useSelector(state => state.personality);
    let dispatch = useDispatch();
    let response = {}
    
    // useEffect(() => {
    //     async function get_nes () {
    //         let payload = {
    //             "token" : token
    //         }
    //       const res = await axios.post('https://spr-system.herokuapp.com/get_nescessary/', payload);
    //       //const res = await axios.get('http://127.0.0.1:8000/get_course/');
    //       response = res.data['result'];
    //       dispatch(update_edu(response.data['1']['info']));
    //       dispatch(update_per(response.data['2']));
          
    //     }
    //     get_nes();
    //     // console.log(response);
    //   },[EducationInfo, PersonalityInfo])
    //let Score =  PersonalityInfo.PersonalInfo.map((PerInfo) => PerInfo.PersonalityScore);
    
    let dataa = {
        labels: ['Extroversion', 'Neuroticism', 'Agreeableness', 'Conscientiousness', 'Openness'],
        datasets:
        [{ 
            label: "",
            backgroundColor: "rgba(241, 90, 34, 0.2)",
            data: PersonalityInfo
        }]
    };

    const changeComefrom = () => {
        dispatch(update_comefrom('dashboard'));
        props.history.push("/PerTest");
    }

    useEffect(() => {

    }, [EducationInfo]);  

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
        {/* <Container > */}
                <Row>
                <Col xs={6} style={{ border:'solid', borderWidth:'thin', borderRadius:'9px', backgroundColor:'white', marginLeft:'5%', marginTop:'2%'}}>
                        <div >
                        <p style={{ fontSize:'1.5vw', textDecoration:'bold', paddingTop:'2%'}} >Result History</p>
                        { History.RecommendProgList.map((RecInfo) => {
                            return(
                                <div style={{border:'solid',borderRadius:'0px', borderWidth:'thin', paddingRight:'5%', paddingButtom:'5%', margin:'2%',  paddingLeft:'2%', backgroundImage: 'linear-gradient(to right, white, white)'}} key={ Math.random().toString(36).substr(2, 9) }>
                                <p style={{fontSize:'1vw'}}>Date</p>
                                <div className="row">   
                                <div className= "col-4 history-proglist"  style={{ fontSize:'1vw'}}>{RecInfo.Date}</div>
                                    {
                                    RecInfo.ProgramList.map((RecDetail) => {
                                        return (
                                        <div className="col-8" style={{ fontSize:'1vw'}} key={ Math.random().toString(36).substr(2, 9) }>
                                            <div className="row"> 
                                                <div className="col-8 history-recprogram">
                                                    {RecDetail.Programs1}
                                                </div>
                                                <div className="col-4 history-recscore">
                                                    {RecDetail.RecProgScore1}
                                                </div>                                                
                                            </div>
                                            <hr></hr>
                                            <div className="row"> 
                                                <div className="col-8 history-recprogram">
                                                    {RecDetail.Programs2}
                                                </div>
                                                <div className="col-4 history-recscore">
                                                    {RecDetail.RecProgScore2}
                                                </div>                                                
                                            </div>
                                            <hr></hr>
                                            <div className="row"> 
                                                <div className="col-8 history-recprogram">
                                                    {RecDetail.Programs3}
                                                </div>
                                                <div className="col-4 history-recscore">
                                                    {RecDetail.RecProgScore3}
                                                </div>                                                
                                            </div>
                                            <hr></hr>
                                            <div className="row"> 
                                                <div className="col-8 history-recprogram">
                                                    {RecDetail.Programs4}
                                                </div>
                                                <div className="col-4 history-recscore">
                                                    {RecDetail.RecProgScore4}
                                                </div>                                                
                                            </div>        
                                        </div>
                                        );
                                    })
                                    }
                                </div>
                                </div>
                                    );
                                })
                                }
                        </div>
            </Col>

        <Col xs={4}  style={{ marginTop:'2%'}}>
        
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

    {/* </Container> */}

    {/* <Container> */}
    <Row>

        <Col  xs={5} 
        // style={{border:'solid', borderWidth:'thin',borderRadius:'5px', marginLeft:'10%', marginTop:'4%'}}
         >
        <div style={{border:'solid', borderWidth:'thin',borderRadius:'5px', marginLeft:'10%', marginTop:'4%', padding:'7%'}}>

                <p style={{ fontSize:'1.5vw', textDecoration:'bold'}}>Educational Information</p>
                <div >
                {
                  EducationInfo.EduInfo.map((Info) => {
                    return (
                      <div key={ Math.random().toString(36).substr(2, 9) }>
                        <h4 className= "history-edulist" style={{ fontSize:'1vw'}} >{Info.TestName}</h4>
                        <ul>
                          {
                            Info.ScoreList.map((InfoDetail) => {
                              return (
                                  <p  style={{ fontSize:'1vw'}} key={ Math.random().toString(36).substr(2, 9) }>
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
                <Button  onClick={changeComefrom} style={{ fontSize:'1vw', borderRadius:'50px', backgroundColor:'coral',  float:'right'}}>
                    Edit Information
                </Button>
            </Link>
            </div>
        </Col>
      


                
        <Col xs={4} style={{marginTop:'2%',marginLeft:'4%'}}>
            <div style={{ border:'solid', borderWidth:'thin', backgroundColor:'white', paddingBottom:'15%', borderRadius:'5px'}}>
                <p style={{ fontSize:'1.5vw', textDecoration:'bold', padding:'3%'}}>Big 5 Personality Label</p>
                    <Radar style="responsive:true;" data={dataa} />
                <Link to="/PerTest">
                    <Button  onClick={changeComefrom} style={{ fontSize:'1vw', borderRadius:'50px', backgroundColor:'coral',    border: '1px solid coral', float:'right', margin:'5%'}}>
                        Take personality test
                    </Button>
                </Link>
            </div>
        </Col>
    {/* </Container> */}
    </Row>

    </div>)
}

export default Dashboard;


