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
    let combine_course = {
        "บริหารธุรกิจบัณฑิต":"Bachelor of Business Administration",
        "วท.บ. เทคโนโลยีการผลิตพืช":"B.Sc. Plant Production Technology",
        "วท.บ. เศรษฐศาสตร์ธุรกิจและการจัดการ":"B.Sc. Business and Managerial Economics",
        "วท.บ. เทคโนโลยีสารสนเทศ":"B.Sc. Information Technology",
        "วท.บ. วิทยาการคอมพิวเตอร์":"B.Sc. Computer Science",
        "วศ.บ. วิศวกรรมไฟฟ้า":"B.Eng. Electrical Engineering",
        "วท.บ.เคมีอุตสาหกรรม":"B.Sc. Industrial Chemistry",
        "วท.บ. คณิตศาสตร์ประยุกต์":"B.Sc. Applied Mathematics",
        "วท.บ.สถิติประยุกต์":"B.Sc. Applied Statistics",
        "วท.บ. นิเทศศาสตร์เกษตร":"B.Sc. Agricultural Communication",
        "วท.บ. จุลชีววิทยาอุตสาหกรรม":"B.Sc. Industrial Microbiology",
        "วศ.บ. วิศวกรรมโทรคมนาคมและโครงข่าย":"B.Eng. Telecommunications and Network Engineering",
        "วท.บ.ฟิสิกส์อุตสาหกรรม":"B.Sc. Industrial Physics",
        "ศศ.บ. ภาษาอังกฤษ":"B.A. English",
        "ศศ.บ. ภาษาญี่ปุ่น":"B.A. Japanese",
        "วท.บ. เทคโนโลยีการผลิตสัตว์และวิทยาศาสตร์เนื้อสัตว์":"B.Sc. Animal Production Technology and Meat Science",
        "วศ.บ. วิศวกรรมอิเล็กทรอนิกส์":"B.Eng. Electronics Engineering",
        "วศ.บ. วิศวกรรมวัสดุนาโน":"B.Eng. Nanomaterial Engineering",
        "วท.บ.เทคโนโลยีชีวภาพ":"B.Sc. Biotechnology",
        "วศ.บ. วิศวกรรมโยธา":"B.Eng. Civil Engineering",
        "วท.บ.เคมีสิ่งแวดล้อม":"B.Sc. Environmental Chemistry",
        "วท.บ. วิศวกรรมแปรรูปอาหาร":"B.Sc. Food Process Engineering",
        "วท.บ. เทคโนโลยีการหมักในอุตสาหกรรมอาหาร":"B.Sc. Fermentation Technology in Food Industry",
        "วศ.บ. วิศวกรรมคอมพิวเตอร์":"B.Eng. Computer Engineering",
        "วท.บ. วิทยาศาสตร์และเทคโนโลยีการอาหาร":"B.Sc. Food Science and Technology",
        "ค.อ.บ. ครุศาสตร์การออกแบบสภาพแวดล้อมภายใน":"B.S.Ind.Ed. Interior Environmental Design",
        "ค.อ.บ. ครุศาสตร์วิศวกรรม":"B.S.Ind.Ed. Engineering Education",
        "สถ.บ. สถาปัตยกรรมภายใน":"B.Arch. Interior Architecture",
        "สถ.บ. สถาปัตยกรรมหลัก":"B.Arch. Architecture",
        "สถ.บ. ศิลปอุตสาหกรรม":"B.Arch. Industrial Design",
        "วศ.บ. วิศวกรรมเครื่องกล":"B.Eng. Mechanical Engineering",
        "วท.บ. นวัตกรรมการผลิตสัตว์น้ำและการจัดการทรัพยากรประมง":"B.Sc. Innovative Aquatic Animal Production and Fishery Resource Management",
        "ค.อ.บ. ครุศาสตร์เกษตร":"B.S.Ind.Ed. Agricultural Education",
        "วท.บ. พัฒนาการเกษตร":"B.Sc. Agricultural Development",
        "วศ.บ. วิศวกรรมอุตสาหการ":"B.Eng. Industrial Engineering",
        "วศ.บ. วิศวกรรมระบบการผลิต":"B.Eng. Manufacturing System Engineering",
        "ภ.สถ.บ. ภูมิสถาปัตยกรรม":"Bachelor of Landscape Architecture",
        "ศศ.บ. นวัตกรรมการท่องเที่ยวและการบริการ":"B.A. Innovation in Tourism and Hospitality",
        "วท.บ. วิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจ":"B.Sc. Data Science and Business Analytics",
        "วศ.บ. วิศวกรรมเคมี":"B.Eng. Chemical Engineering"
      };
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
                                "Programs1_eng": combine_course[history_list[count]['first']],
                                "RecProgScore1": history_list[count]['first_p'],
                                "Programs2": history_list[count]['second'],
                                "Programs2_eng": combine_course[history_list[count]['second']],
                                "RecProgScore2": history_list[count]['second_p'],
                                "Programs3": history_list[count]['third'],
                                "Programs3_eng": combine_course[history_list[count]['third']],
                                "RecProgScore3": history_list[count]['third_p'],
                                "Programs4": history_list[count]['forth'],
                                "Programs4_eng": combine_course[history_list[count]['forth']],
                                "RecProgScore4": history_list[count]['forth_p'],
                                "Programs5": history_list[count]['fifth'],
                                "Programs5_eng": combine_course[history_list[count]['fifth']],
                                "RecProgScore5": history_list[count]['fifth_p'],
                            }
                        ]    
                    };
                    temp.push(a);
                }
                // console.log("in in in ");
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
                    "Programs1_eng": "",
                    "RecProgScore1": "",
                    "Programs2": "",
                    "Programs2_eng": "",
                    "RecProgScore2": "",
                    "Programs3": "",
                    "Programs3_eng": "",
                    "RecProgScore3": "",
                    "Programs4": "",
                    "Programs4_eng": "",
                    "RecProgScore4": "",
                    "Programs5": "",
                    "Programs5_eng": "",
                    "RecProgScore5": "",
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
                <Col sm={6} style={{ border:'solid', borderWidth:'thin', borderRadius:'9px', backgroundColor:'white', marginLeft:'5%', marginTop:'2%' ,overflow: 'scroll', height: '45rem'}}>
                        <div >
                        <h4 style={{  textDecoration:'bold', paddingTop:'2%'}} >Result History</h4>
                        { History.RecommendProgList.map((RecInfo) => {
                            return(
                                <div style={{border:'solid',borderRadius:'0px', borderWidth:'thin', paddingButtom:'5%', margin:'2%',  paddingLeft:'2%' , backgroundImage: 'linear-gradient(to right, white, white)'}} key={ Math.random().toString(36).substr(2, 9) }>
                                {/* <h6 style={{paddingTop:'2%'}}><span style={{marginRight:'22%'}}>Date </span><span style={{marginRight:'7%'}} >Recommended Program</span> <span >Recommendation score</span> </h6> */}
                                <div className="row">   

                                
                                <div className= "col-3 history-proglist" style={{fontWeight: 'bold',justyfyContent: 'center', textAlign: 'center', alignItem: 'center'}}><p >Date </p>{RecInfo.Date}</div>
                                    {
                                    RecInfo.ProgramList.map((RecDetail) => {
                                        return (
                                        <div className="col-9"  key={ Math.random().toString(36).substr(2, 9) }>
                                            <div className="row"> 
                                                <div className="col-6 history-recprogram" style={{justyfyContent: 'center', textAlign: 'center', alignItem: 'center'}}>
                                                    <p  style={{fontWeight: 'bold',justyfyContent: 'center', textAlign: 'center', alignItem: 'center'}}>Recommended Program</p>
                                                </div>
                                                <div className="col-6 history-recscore">
                                                    <p style={{fontWeight: 'bold',justyfyContent: 'center', textAlign: 'center', alignItem: 'center'}}>Predicted Grade</p>
                                                </div>                                                
                                            </div>
                                            <hr></hr>
                                            <div className="row"> 
                                                <div className="col-6 history-recprogram" style={{justyfyContent: 'center', textAlign: 'center', alignItem: 'center', marginBottom: '-5%', fontSize: '90%'}}>
                                                    <p>{RecDetail.Programs1}</p>
                                                    <p>{RecDetail.Programs1_eng}</p>
                                                </div>
                                                <div className="col-6 history-recscore" style={{justyfyContent: 'center', textAlign: 'center', alignItem: 'center'}}>
                                                    {RecDetail.RecProgScore1}
                                                </div>                                                
                                            </div>
                                            <hr></hr>
                                            <div className="row"> 
                                                <div className="col-6 history-recprogram" style={{justyfyContent: 'center', textAlign: 'center', alignItem: 'center', marginBottom: '-5%', fontSize: '90%'}}>
                                                    <p>{RecDetail.Programs2}</p>
                                                    <p>{RecDetail.Programs2_eng}</p>
                                                </div>
                                                <div className="col-6 history-recscore" style={{justyfyContent: 'center', textAlign: 'center', alignItem: 'center'}}>
                                                    {RecDetail.RecProgScore2}
                                                </div>                                                
                                            </div>
                                            <hr></hr>
                                            <div className="row"> 
                                                <div className="col-6 history-recprogram" style={{justyfyContent: 'center', textAlign: 'center', alignItem: 'center', marginBottom: '-5%', fontSize: '90%'}}>
                                                    <p>{RecDetail.Programs3}</p>
                                                    <p>{RecDetail.Programs3_eng}</p>
                                                </div>
                                                <div className="col-6 history-recscore" style={{justyfyContent: 'center', textAlign: 'center', alignItem: 'center'}}>
                                                    {RecDetail.RecProgScore3}
                                                </div>                                                
                                            </div>
                                            <hr></hr>
                                            <div className="row"> 
                                                <div className="col-6 history-recprogram" style={{justyfyContent: 'center', textAlign: 'center', alignItem: 'center', marginBottom: '-5%', fontSize: '90%'}}>
                                                    <p>{RecDetail.Programs4}</p>
                                                    <p>{RecDetail.Programs4_eng}</p>
                                                </div>
                                                <div className="col-6 history-recscore" style={{justyfyContent: 'center', textAlign: 'center', alignItem: 'center'}}>
                                                    {RecDetail.RecProgScore4}
                                                </div>                                                
                                            </div> 
                                            <hr></hr>
                                            <div className="row" style={{paddingBottom: '5%'}}> 
                                                <div className="col-6 history-recprogram" style={{justyfyContent: 'center', textAlign: 'center', alignItem: 'center', marginBottom: '-5%', fontSize: '90%'}}>
                                                    <p>{RecDetail.Programs5}</p>
                                                    <p>{RecDetail.Programs5_eng}</p>
                                                </div>
                                                <div className="col-6 history-recscore" style={{justyfyContent: 'center', textAlign: 'center', alignItem: 'center'}}>
                                                    {RecDetail.RecProgScore5}
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
        
            <div style={{ border:'solid',borderRadius:'9px', borderWidth:'thin',marginLeft:'5%', padding:'10%', backgroundColor:'rgb(255,255,255)'}}>
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
      


                
        <Col sm={4} style={{marginTop:'1.55%',marginLeft:'4%'}}>
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


