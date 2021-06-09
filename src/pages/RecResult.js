import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './RecResult.css';
import RecommendPrograms from "../RecommendPrograms";
import { Col,Row, Container , Button, Navbar} from "react-bootstrap";
import {  useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';

function RecommendProg (props){

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
  let temp = {
    "RecommendProgList": [
      {
        "Programs": "Program1",
        "programs_eng": "Program1_eng",
        "ProgramList": [
          {
            "RecProgScore": "100%"
          }
        ]
      },
      {
        "Programs": "Program2",
        "programs_eng": "Program2_eng",
        "ProgramList": [
          {
            "RecProgScore": "100%"
          }
        ]
      },
      {
        "Programs": "Program3",
        "programs_eng": "Program3_eng",
        "ProgramList": [
          {
            "RecProgScore": "100%"
          }
        ]
      },
      {
        "Programs": "Program4",
        "programs_eng": "Program4_eng",
        "ProgramList": [
          {
            "RecProgScore": "100%"
          }
        ]
      },
      {
        "Programs": "Program5",
        "programs_eng": "Program5_eng",
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
          "programs_eng": combine_course[latest_data['first']],
          "ProgramList": [
            {
              "RecProgScore": latest_data['first_p'],
              "RecProgStar": s1
            }
          ]
        }
        let b = {
          "Programs": latest_data['second'],
          "programs_eng": combine_course[latest_data['second']],
          "ProgramList": [
            {
              "RecProgScore": latest_data['second_p'],
              "RecProgStar": s2
            }
          ]
        }
        let c = {
          "Programs": latest_data['third'],
          "programs_eng": combine_course[latest_data['third']],
          "ProgramList": [
            {
              "RecProgScore": latest_data['third_p'],
              "RecProgStar": s3
            }
          ]
        }
        let d = {
          "Programs": latest_data['forth'],
          "programs_eng": combine_course[latest_data['forth']],
          "ProgramList": [
            {
              "RecProgScore": latest_data['forth_p'],
              "RecProgStar": s4
            }
          ]
        }
        let e = {
          "Programs": latest_data['fifth'],
          "programs_eng": combine_course[latest_data['fifth']],
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
                          <p>{RecInfo.Programs}</p>
                          <p>{RecInfo.programs_eng}</p>          
                        </Col>
                        
                          {RecInfo.ProgramList.map((RecDetail) => {
                            return (
                              <Col>
                                <p> 
                                  {RecDetail.RecProgStar}
                                </p>
                                <p>
                                  Predicted grade: {RecDetail.RecProgScore}
                                </p>
                              </Col>
                            );
                          })}
                      </Row>
                      <hr></hr>
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


