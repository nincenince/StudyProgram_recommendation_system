/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {Link } from "react-router-dom";
import './Dashboard.css';
import { Col, Row, Button, Form, Navbar} from "react-bootstrap";
import { Radar} from 'react-chartjs-2';
//import PersonanlityInfo from "../PersonalityInfo.json";
// import History from "../History";
// import {Faculties} from "../faculties.jsx";
import axios from 'axios';

import { useSelector, useDispatch} from 'react-redux';
import {  useEffect, useState } from 'react';
import { update_comefrom } from '../actions';


function Dashboard (props){
    let token = useSelector(state => state.token)
    // let isLogged = useSelector(state => state.isLogged);
    let EducationInfo = useSelector(state => state.education);
    let PersonalityInfo = useSelector(state => state.personality);
    let history_list = useSelector(state => state.recommend);
    // const [History, setHistory] = useState( {
    //     "Date": "",
    //     "ProgramList": [
    //     {
    //         "Programs1": "",
    //         "RecProgScore1": "",
    //         "Programs2": "",
    //         "RecProgScore2": "",
    //         "Programs3": "",
    //         "RecProgScore3": "",
    //     }
    //     ]
    // });
    useEffect(() => {
        function mapdata () {
            var count;
            let temp = [];
            if(history_list.length > 1) {
                for(count = 1; count < history_list.length; count++){
                    let a = 
                    {
                        "Date": history_list[count]['date'],
                        "ProgramList": [
                            {
                                "Programs1": history_list[count]['first'],
                                "RecProgScore1": history_list[count]['first_p'],
                                "Programs2": history_list[count]['second'],
                                "RecProgScore2": history_list[count]['second_p'],
                                "Programs3": history_list[count]['third'],
                                "RecProgScore3": history_list[count]['third_p'],
                            }
                        ]    
                    };
                    temp.push(a);
                }
                console.log("in in in ");
                let x ={
                    "RecommendProgList": temp
                };
                setHistory(x);
            }
        }
        mapdata();
    }, [EducationInfo]); 
    let template = {
        "RecommendProgList": [
            {
                "Date": "",
                "ProgramList": [
                {
                    "Programs1": "",
                    "RecProgScore1": "",
                    "Programs2": "",
                    "RecProgScore2": "",
                    "Programs3": "",
                    "RecProgScore3": "",
                }
                ]
            }
        ]
    };
    const [History, setHistory] = useState(template);
    
    // let personal = useSelector(state => state.personal);
    let dispatch = useDispatch();
    
    // let response = {}
    // const History = {
    //     "RecommendProgList": [
    //       {
    //         "Date": "January 1, 2020",
    //         "ProgramList": [
    //           {
    //             "Programs1": "Faculty of Engineering, Software Engineering Program ",
    //             "RecProgScore1": "70%",
    //             "Programs2": "Faculty of Engineering, Software Engineering Program ",
    //             "RecProgScore2": "70%",
    //             "Programs3": "",
    //             "RecProgScore3": "",
    //             "Programs4": "",
    //             "RecProgScore4": ""
    //           }
    //         ]
    //       },
    //       {
    //         "Date": "February 1, 2020",
    //         "ProgramList": [
    //           {
    //             "Programs1": "Faculty of Engineering, Software Engineering Program ",
    //             "RecProgScore1": "70%",
    //             "Programs2": "Faculty of Engineering, Software Engineering Program ",
    //             "RecProgScore2": "70%",
    //             "Programs3": "Faculty of Engineering, Software Engineering Program  ",
    //             "RecProgScore3": "70%",
    //             "Programs4": "Faculty of Engineering, Software Engineering Program ",
    //             "RecProgScore4": "70%"
    //           }
    //         ]
    //       }      
    //     ]   
    // }


    const [rating, setrating] = useState(1);
    const [feedback, setfeedback] = useState('');
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

     
    
    const submitfeedback = () => {
        // console.log(rating);
        // console.log(typeof(feedback));
        // console.log(feedback.length);
        // console.log(feedback+"...");
        const regExp = /[a-zA-Z]/g;
        let temp = feedback.replace(/\n/g, " ");
        if(regExp.test(temp)){
        /* do something if letters are found in your string */
            validate(rating,temp);
        } else {
            validate(rating,"");
        /* do something if letters are not found in your string */
        }
    }
    const validate = async (rat, feed) => {
        let payload = {
            "token": token,
            "rating": rat,
            "feedback": feed
        }
        let response = await axios.post('https://spr-system.herokuapp.com/new_feedback/', payload);
        //let response = await axios.post('http://127.0.0.1:8000/new_feedback/', payload);
        if( response.data['status'] === true) {
            alert(response.data['message']);
            window.location.reload(false);
          }
        else{
            alert("Somethings went wrong, please try again later.");
        }
    }

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


            {/* <Navbar collapseOnSelect expand="lg"  >
            <Navbar.Brand href="/"  >
                <i 
                 className = "fas fa-graduation-cap" style={{ fontSize:'4.95vw'}}
                ></i>
                   <h5 style={{color:'coral'}}>website name</h5>
                </Navbar.Brand>
            </Navbar> */}

        <h2 style={{textAlign:'center'}}>Welcome back!</h2>
        <h3 style={{textAlign:'center'}}>Let's explore your data</h3>
        {/* <Container > */}
                <Row>
                <Col sm={6} style={{ border:'solid', borderWidth:'thin', borderRadius:'9px', backgroundColor:'white', marginLeft:'5%', marginTop:'2%'}}>
                        <div >
                        <h4 style={{  textDecoration:'bold', paddingTop:'2%'}} >Result History</h4>
                        { History.RecommendProgList.map((RecInfo) => {
                            return(
                                <div style={{border:'solid',borderRadius:'0px', borderWidth:'thin', paddingRight:'5%', paddingButtom:'5%', margin:'2%',  paddingLeft:'2%', backgroundImage: 'linear-gradient(to right, white, white)'}} key={ Math.random().toString(36).substr(2, 9) }>
                                <p >Date</p>
                                <div className="row">   
                                <div className= "col-4 history-proglist" >{RecInfo.Date}</div>
                                    {
                                    RecInfo.ProgramList.map((RecDetail) => {
                                        return (
                                        <div className="col-8"  key={ Math.random().toString(36).substr(2, 9) }>
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

        <Col sm={4}  style={{ marginTop:'2%'}}>
        
            <div style={{ border:'solid',borderRadius:'20px', borderWidth:'thin',marginLeft:'5%', padding:'10%', backgroundColor:'rgb(255,255,255)'}}>
            <h4 style={{  textDecoration:'bold'}} >Give us some feedback!</h4>
            
            
            <Form.Group controlId="formratingstar">
              <Form.Label >Rate our services</Form.Label>
              <Form.Control  as="select" name="rating" value={rating} onChange={e => setrating(e.target.value)} >
                <option style={{ fontSize:'1vw'}} value={1}>⭐</option>
                <option style={{ fontSize:'1vw'}} value={2}>⭐⭐</option>
                <option style={{ fontSize:'1vw'}} value={3}>⭐⭐⭐</option>
                <option style={{ fontSize:'1vw'}} value={4}>⭐⭐⭐⭐</option>
                <option style={{ fontSize:'1vw'}} value={5}>⭐⭐⭐⭐⭐</option>
              </Form.Control>
              <textarea style={{  height:"100%", marginTop:"4%"}} rows="4" cols="50" name="feedback"
                placeholder="Your Feedback..." value={feedback} onChange={e => setfeedback(e.target.value)}/>
                
                <Button style={{float:'right', marginTop:'2%'}} onClick={() => submitfeedback()}>Submit</Button>
            </Form.Group>
            </div>
            
            
            </Col>
        </Row>

    {/* </Container> */}

    {/* <Container> */}
    <Row>

        <Col  sm={5} 
        // style={{border:'solid', borderWidth:'thin',borderRadius:'5px', marginLeft:'10%', marginTop:'4%'}}
         >
        <div style={{border:'solid', borderWidth:'thin',borderRadius:'5px', marginLeft:'10%', marginTop:'4%', padding:'4%', paddingBottom:'13%', marginBottom:'10%'}}>

                <h4 style={{ textDecoration:'bold', paddingBottom:'2%'}}>Educational Information</h4>
                <div >
                {
                  EducationInfo.EduInfo.map((Info) => {
                    return (
                      <div key={ Math.random().toString(36).substr(2, 9) }>
                        <h8 className= "history-edulist" >{Info.TestName}</h8>
                        <ul>
                          {
                            Info.ScoreList.map((InfoDetail) => {
                              return (
                                  <p   key={ Math.random().toString(36).substr(2, 9) }>
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
                <Button  onClick={changeComefrom} style={{ borderRadius:'50px', backgroundColor:'coral',  float:'right'}}>
                    Edit Information
                </Button>
            </Link>
            </div>
        </Col>
      


                
        <Col sm={4} style={{marginTop:'2%',marginLeft:'4%'}}>
            <div style={{ border:'solid', borderWidth:'thin', backgroundColor:'white', paddingBottom:'18%', borderRadius:'5px'}}>
                <h4 style={{  textDecoration:'bold', padding:'3%'}}>Big 5 Personality Label</h4>
                    <Radar style={{responsive:true}} data={dataa} />
                <Link to="/PerTest">
                    <Button  onClick={changeComefrom} style={{ borderRadius:'50px', backgroundColor:'coral',  border: '1px solid coral', float:'right', marginTop:'5%', marginRight:'5%'}}>
                        Take test
                    </Button>
                </Link>
            </div>
        </Col>
    {/* </Container> */}
    </Row>

    </div>)
}

export default Dashboard;


