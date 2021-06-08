import React, { useEffect } from 'react';
import {Link } from "react-router-dom";

import './RecProgram.css'
import axios from 'axios';
import { Col, Row, Button, Image, Container, ProgressBar} from "react-bootstrap";

import { useState} from 'react';
import { useDispatch} from 'react-redux';
import { update_comefrom } from '../actions';
// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { update_rec, update_recpay } from '../actions';

// import Course from '../AvaliableCourse';
import Course_O from '../Course_O';
import Course_E from '../Course_E';
import Course_CA from '../Course_CA';
import Course_N from '../Course_N';
function RecProgram (props){
  let dispatch = useDispatch();
  let isLogged = useSelector(state => state.isLogged);
  let token = useSelector(state => state.token);
  let personal = useSelector(state => state.personal);
  let personality = useSelector(state => state.personality);
  let education = useSelector(state => state.education);
  
  const [selected_prog, set_selected_prog] = useState({"course": []});
  const [display_selected_prog, set_display_selected_prog] = useState({"course": []});
  const [Course, setCourse] = useState({"Courses": [], "Courses2": []});
  const [perstatus, setperstatus] = useState(false);
  const [edustatus, setedustatus] = useState(false);
  const [pervariant, setpervariant] = useState('danger'); 
  const [perlabel, setperlabel] = useState('Not Complete'); 
  const [eduvariant, seteduvariant] = useState('danger'); 
  const [edulabel, setedulabel] = useState('Not Complete'); 
  const [sel_prog, setsel_prog] = useState(false);
  const [rec_button_status, set_rec_button_status] = useState(true);
  const [rec_button_color, set_rec_button_color] = useState('rgb(169,169,169)');
  const [progvariant, setprogvariant] = useState('danger');
  const [progstatus, setprogstatus] = useState(0);
  const [proglabel, setproglabel] = useState('0%');
  const [isLoading, setisLoading] = useState(false);
  const converted_course = {
    "บริหารธุรกิจ":"บริหารธุรกิจบัณฑิต",
    "เกษตรศาสตร์":"วท.บ. เทคโนโลยีการผลิตพืช",
    "เศรษฐศาสตร์ธุรกิจและการจัดการ":"วท.บ. เศรษฐศาสตร์ธุรกิจและการจัดการ",
    "เทคโนโลยีสารสนเทศ":"วท.บ. เทคโนโลยีสารสนเทศ",
    "วิทยาการคอมพิวเตอร์":"วท.บ. วิทยาการคอมพิวเตอร์",
    "วิศวกรรมไฟฟ้า":"วศ.บ. วิศวกรรมไฟฟ้า",
    "เคมีอุตสาหกรรม":"วท.บ.เคมีอุตสาหกรรม",
    "คณิตศาสตร์ประยุกต์":"วท.บ. คณิตศาสตร์ประยุกต์",
    "สถิติประยุกต์":"วท.บ.สถิติประยุกต์",
    "นิเทศศาสตร์เกษตร":"วท.บ. นิเทศศาสตร์เกษตร",
    "จุลชีววิทยาอุตสาหกรรม":"วท.บ. จุลชีววิทยาอุตสาหกรรม",
    "วิศวกรรมโทรคมนาคม":"วศ.บ. วิศวกรรมโทรคมนาคมและโครงข่าย",
    "ฟิสิกส์ประยุกต์":"วท.บ.ฟิสิกส์อุตสาหกรรม",
    "ภาษาอังกฤษ":"ศศ.บ. ภาษาอังกฤษ",
    "ภาษาญี่ปุ่น":"ศศ.บ. ภาษาญี่ปุ่น",
    "สัตวศาสตร์":"วท.บ. เทคโนโลยีการผลิตสัตว์และวิทยาศาสตร์เนื้อสัตว์",
    "วิศวกรรมอิเล็กทรอนิกส์":"วศ.บ. วิศวกรรมอิเล็กทรอนิกส์",
    "วิศวกรรมวัสดุนาโน":"วศ.บ. วิศวกรรมวัสดุนาโน",
    "เทคโนโลยีชีวภาพ":"วท.บ.เทคโนโลยีชีวภาพ",
    "วิศวกรรมโยธา":"วศ.บ. วิศวกรรมโยธา",
    "เคมีสิ่งแวดล้อม":"วท.บ.เคมีสิ่งแวดล้อม",
    "วิศวกรรมแปรรูปอาหาร":"วท.บ. วิศวกรรมแปรรูปอาหาร",
    "เทคโนโลยีการหมักในอุตสาหกรรมอาหาร":"วท.บ. เทคโนโลยีการหมักในอุตสาหกรรมอาหาร",
    "วิศวกรรมคอมพิวเตอร์":"วศ.บ. วิศวกรรมคอมพิวเตอร์",
    "วิทยาศาสตร์และเทคโนโลยีการอาหาร":"วท.บ. วิทยาศาสตร์และเทคโนโลยีการอาหาร",
    "การออกแบบสภาพแวดล้อมภายใน (หลักสูตร 5 ปี)":"ค.อ.บ. ครุศาสตร์การออกแบบสภาพแวดล้อมภายใน",
    "ครุศาสตร์วิศวกรรม (หลักสูตร 5 ปี)":"ค.อ.บ. ครุศาสตร์วิศวกรรม",
    "สถาปัตยกรรมภายใน":"สถ.บ. สถาปัตยกรรมภายใน",
    "สถาปัตยกรรมหลัก":"สถ.บ. สถาปัตยกรรมหลัก",
    "ศิลปอุตสาหกรรม (หลักสูตร 4 ปี)":"สถ.บ. ศิลปอุตสาหกรรม",
    "วิศวกรรมเครื่องกล":"วศ.บ. วิศวกรรมเครื่องกล",
    "วิทยาศาสตร์การประมง":"วท.บ. นวัตกรรมการผลิตสัตว์น้ำและการจัดการทรัพยากรประมง",
    "ครุศาสตร์เกษตร (หลักสูตร 5 ปี)":"ค.อ.บ. ครุศาสตร์เกษตร",
    "วิศวกรรมสารสนเทศ":"วท.บ. เทคโนโลยีสารสนเทศ",
    "พัฒนาการเกษตร":"วท.บ. พัฒนาการเกษตร",
    "วิศวกรรมอุตสาหการ":"วศ.บ. วิศวกรรมอุตสาหการ",
    "วิศวกรรมระบบการผลิต":"วศ.บ. วิศวกรรมระบบการผลิต",
    "สถาปัตยกรรม(หลักสูตร 5 ปี)":"ภ.สถ.บ. ภูมิสถาปัตยกรรม",
    "นวัตกรรมการท่องเที่ยวและการบริการ":"ศศ.บ. นวัตกรรมการท่องเที่ยวและการบริการ",
    "วิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจ":"วท.บ. วิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจ",
    "วิศวกรรมเคมี":"วศ.บ. วิศวกรรมเคมี"
 }
  useEffect(() => {
    function filter_data () {
      // console.log(personality);
      if(Object.keys(personality).length !== 0){
        let temp = Math.max.apply(null,personality);
        let temp2 = personality.indexOf(temp);
        // console.log(temp);
        // console.log(temp2);
        if(temp2 === 0){
          //E
          setCourse(Course_E);
        }
        else if(temp2 === 1){
          //N
          setCourse(Course_N);
        }
        else if(temp2 === 2){
          //A
          setCourse(Course_CA);
        }
        else if(temp2 === 3){
          //C
          setCourse(Course_CA);
        }
        else if(temp2 === 4){
          //O
          setCourse(Course_O);
        }
      }
      
    }
    function check_status () {
      if(Object.keys(education).length !== 0){
        let user_score = {
          "GPAX" : education.EduInfo[0].ScoreList[0].Score,
          "GAT" : education.EduInfo[1].ScoreList[0].Score,
          "PAT1" : education.EduInfo[2].ScoreList[0].Score,
          "PAT2" : education.EduInfo[3].ScoreList[0].Score,
          "PAT3" : education.EduInfo[4].ScoreList[0].Score,
          "PAT4" : education.EduInfo[5].ScoreList[0].Score,
          "PAT5" : education.EduInfo[6].ScoreList[0].Score,
          "PAT6" : education.EduInfo[7].ScoreList[0].Score,
          "PAT7" : education.EduInfo[8].ScoreList[0].Score,
          "SAT_MATH" : education.EduInfo[9].ScoreList[0].Score,
          "SAT_ENG" : education.EduInfo[10].ScoreList[0].Score,
          "IELTS" : education.EduInfo[11].ScoreList[0].Score
        }
        if(personality[0] === 0 || personality[1] === 0 || personality[2] === 0 || personality[3] === 0 || personality[4] === 0) {
          setperstatus(false);
        }
        else{
          setperstatus(true);
          setpervariant('success');
          setperlabel('Complete');
        }
        if(user_score['GPAX'] === "0.00") {
          setedustatus(false);
        }
        else{
          setedustatus(true);
          seteduvariant('success');
          setedulabel('Complete');
        }
      }
    }
    function check_complete () {
      if(perstatus === true && edustatus === true){
        setsel_prog(true);
      }
    }
    filter_data();
    check_status();
    check_complete();
    // console.log(Course);
    // console.log(perstatus);
    // console.log(edustatus);
  },[Course,perstatus,edustatus]);
  const c_prog = (prog, disprog, disprog_eng) => {
    let temp = selected_prog['course'];
    let temp2 = display_selected_prog['course'];
    if(temp.length === 5 && temp.includes(prog) === false) {
      document.getElementById(prog).checked = false;
      alert("Please select only 5 programs from the list")
    }
    
    else if(temp.includes(prog))
    {
      const index = temp.indexOf(prog);
      temp.splice(index,1);
      temp2.splice(index,1);
      document.getElementById(prog).checked = false;
      let a = progstatus - 20;
      setprogstatus(a);
      setproglabel(a+"%");
    }
    else{
      let showItem = {
        "c_thai" : disprog,
        "c_eng" : disprog_eng
      }
      temp.push(prog);
      temp2.push(showItem);
      let a = progstatus + 20;
      setprogstatus(a);
      setproglabel(a+"%");
      // console.log(proglabel);
    }
    if(temp.length === 5){
      set_rec_button_status(false);
      set_rec_button_color('rgb(255, 70, 0)');
      setprogvariant('success');
      setproglabel('Complete');
    }
    else{
      set_rec_button_status(true);
      set_rec_button_color('rgb(169,169,169)');
      setprogvariant('danger');
    }

    let temps = {"course": temp};
    let temps2 = {"course": temp2};
    set_selected_prog(temps);
    set_display_selected_prog(temps2);
    // console.log(temps);
    // console.log(temps2); 
  }
  const changeComefrom = () => {
    dispatch(update_comefrom('recommend'));
  }

  const validate = async() => {
    setisLoading(true);
    set_rec_button_status(true);
    // console.log(personal);
    // console.log(personality);
    // console.log(education);
    let valid = true;


    let error = "";
    if(personal['school'] === null){
      valid = false;
      error += "Please enter your school\n";
    }
    // console.log(education.EduInfo[0].ScoreList[0].Score);
    if(education.EduInfo[0].ScoreList[0].Score === "0.00") {
      valid = false;
      error += "Please fill in your education information\n";
    }
    if(personality.reduce((a, b) => a + b, 0) === 0 ){
      valid = false;
      error += "Please take personality test before process further\n";
    }
    if(valid){
      // let user_score = {
      //   "GPAX" : education.EduInfo[0].ScoreList[0].Score,
      //   "GAT" : education.EduInfo[1].ScoreList[0].Score,
      //   "PAT1" : education.EduInfo[2].ScoreList[0].Score,
      //   "PAT2" : education.EduInfo[3].ScoreList[0].Score,
      //   "PAT3" : education.EduInfo[4].ScoreList[0].Score,
      //   "PAT4" : education.EduInfo[5].ScoreList[0].Score,
      //   "PAT5" : education.EduInfo[6].ScoreList[0].Score,
      //   "PAT6" : education.EduInfo[7].ScoreList[0].Score,
      //   "PAT7" : education.EduInfo[8].ScoreList[0].Score,
      //   "SAT_MATH" : education.EduInfo[9].ScoreList[0].Score,
      //   "SAT_ENG" : education.EduInfo[10].ScoreList[0].Score,
      //   "IELTS" : education.EduInfo[11].ScoreList[0].Score
      // }
      let user_score = {
        "GPAX" : education.EduInfo[0].ScoreList[0].Score,
      }
      // let user_personality = {
      //   "type_e": personality[0],
      //   "type_n": personality[1],
      //   "type_a": personality[2],
      //   "type_c": personality[3],
      //   "type_o": personality[4],
      // }
      let user_selected_programs = {
        "prog1": selected_prog.course[0],
        "prog2": selected_prog.course[1],
        "prog3": selected_prog.course[2],
        "prog4": selected_prog.course[3],
        "prog5": selected_prog.course[4]
      }
      let payload = {
        "school": personal['school'],
        "gender": personal['sex'],
        "score": user_score,
        "select_program": user_selected_programs
      }
      // console.log(payload);
      let response = await axios.post("https://student-recommend-api.herokuapp.com/predict/", payload);
      let data = response.data;
      // console.log(data)
      let response_data = {
        "first": converted_course[data['1st']],
        "first_p": (Math.round(data['1st_grade'] * 100) / 100).toString(),
        "first_s": data['1st_star'].toString(),
        "second": converted_course[data['2ed']],
        "second_p": (Math.round(data['2ed_grade'] * 100) / 100).toString(),
        "second_s": data['2ed_star'].toString(),
        "third": converted_course[data['3rd']],
        "third_p": (Math.round(data['3rd_grade'] * 100) / 100).toString(),
        "third_s": data['3rd_star'].toString(),
        "forth": converted_course[data['4th']],
        "forth_p": (Math.round(data['4th_grade'] * 100) / 100).toString(),
        "forth_s": data['4th_star'].toString(),
        "fifth": converted_course[data['5th']],
        "fifth_p": (Math.round(data['5th_grade'] * 100) / 100).toString(),
        "fifth_s": data['5th_star'].toString(),
      };
      let payload2 = {
        "token": token,
        "info": response_data
      }
      setisLoading(false);
      // console.log(payload2);
      dispatch(update_recpay(payload2))
      props.history.push('./LoadingRec');

    }
    else{
      alert(error);
    }
    
  }
  return(
      <>
       {isLogged ? <h2 style={{  marginLeft:"5%", marginTop:"3%"}}>Get ready to discover your programs</h2>
       :
       <div>
          <Col style={{textAlign: 'center', justifyContent: 'center'}}>
            <h4 style={{  marginTop:'10%', textAlign: 'center'}}>Please Sign In </h4>
            <h4 style={{  textAlign: 'center'}}>to use our recommendation service.</h4>
            <p style={{textAlign: 'center'}}>Press the button below to Sign In/ Sign Up.</p>

            <Link to="/SignIn" style={{justifyContent: 'center', alignItem: 'center', marginleft: '50%'}}>
              <Button style={{float: 'center',borderRadius:' 20px', backgroundColor:'coral', border:'coral'}}>
                SignIn/ SignUp
              </Button>
            </Link>
          </Col>
        </div>}

       {isLogged ?<Row>
          <Col xs={12} md={{ span: 3, offset: 3 }}>
            <div style={{border:'solid', borderWidth:'thin',marginTop:'15%', padding:'10%', marginLeft:'5%'}}>
              <div style={{justifyContent: 'center', textAlign: 'center'}}><Image style={{widht:'3vw', height:'7vh', textAlign: 'center'}} src={require("../images/1.png")}/></div>
              <p style={{ textAlign: 'center', padding: '5%'}}>Enter your Educational Information</p>
              <div style={{justifyContent: 'center', textAlign: 'center'}}>
                <Link to="/EduInformation">
                  <Button onClick={changeComefrom} style={{ borderRadius:' 20px', backgroundColor:'coral',border:'coral', fontSize:'1vw'}}>
                  <h6 style={{marginTop:'5%'}}>Enter Information</h6>
                  </Button>
                </Link>
              </div>
              <div style={{paddingTop: '10%'}}>
                <ProgressBar variant={eduvariant} animated now={100} label={edulabel} />
              </div>
            </div>
          </Col>

          <Col xs={12} md={{ span: 3, offset: 0 }}>
            <div style={{border:'solid', borderWidth:'thin',marginTop:'15%', padding:'10%', marginLeft:'5%'}}>
              <div style={{justifyContent: 'center', textAlign: 'center'}}><Image style={{widht:'3vw', height:'7vh', textAlign: 'center'}} src={require("../images/2.png")}/></div>
              <p style={{textAlign: 'center', padding: '5%'}}>Take Big 5 Personality Label test</p>
              <div style={{justifyContent: 'center', textAlign: 'center'}}>
                <Link to="/PerTest">
                  <Button onClick={changeComefrom} style={{ borderRadius:' 20px', backgroundColor:'coral',border:'coral', fontSize:'1vw'}}>
                  <h6 style={{marginTop:'5%'}}>Take test</h6>
                  </Button>
                </Link>
              </div>
              <div style={{paddingTop: '10%'}}>
                <ProgressBar variant={pervariant} animated now={100} label={perlabel} />
              </div>
            </div>
          </Col>

        </Row>: null }

        {sel_prog ?<div style={{padding: '7%', justifyContent: 'center', alignItem: 'center'}}>
          <Row>
            <Col xs={12} md={7}>
              <Col style={{border:'solid', borderWidth:'thin', marginTop:"5%", borderLeftColor:'coral', borderLeftWidth:"5px"}}>
                <h3 style={{ margin:'2%'}}>Avaliable Programs</h3>
                {/* <p style={{ margin:'2%', fontWeight: 'bold'}}>Based on you personality traits</p> */}
                <hr/>
                <p style={{ margin:'2%'}}>Please select 5 programs that you're interested in from the list below</p>
                <hr/><hr/>
                <ul>
                  <div> 
                      <p style={{ margin:'2%', fontWeight: 'bold'}}>Recommended programs based on your personality traits</p>
                      <br/>
                      {Course.Courses.map((ava) => {
                        return (
                          <div style={{ marginLeft:'2%'}}>
                            <input type="checkbox" className="mb-2" id={ava.RECOMMEND_NAME} value={ava.RECOMMEND_NAME} name={ava.KMITL_NAME} name2={ava.KMITL_NAME_ENG} onChange={(e) => c_prog(e.target.value,e.target.name,ava.KMITL_NAME_ENG)}/>
                            <span><label style={{ marginLeft:'2%'}}>{ava.KMITL_NAME}</label></span><br/>
                            <span><label style={{ marginLeft:'5%'}}>{ava.KMITL_NAME_ENG}</label></span>
                            <hr/>
                          </div>
                        );})
                      }
                      <p style={{ margin:'2%', fontWeight: 'bold'}}>Other avaliable programs at KMITL</p>
                      <br/> 
                      {Course.Courses2.map((ava) => {
                        return (
                          <div style={{ marginLeft:'2%'}}>
                            <input type="checkbox" className="mb-2" id={ava.RECOMMEND_NAME} value={ava.RECOMMEND_NAME} name={ava.KMITL_NAME} name2={ava.KMITL_NAME_ENG} onChange={(e) => c_prog(e.target.value,e.target.name,ava.KMITL_NAME_ENG)}/>
                            <span><label style={{ marginLeft:'2%'}}>{ava.KMITL_NAME}</label></span><br/>
                            <span><label style={{ marginLeft:'5%'}}>{ava.KMITL_NAME_ENG}</label></span>
                            <hr/>
                          </div>
                        );})
                      }   
                  </div>
                </ul>
              </Col>
            </Col>
            <Col xs={12} md={5} style={{marginTop: '1%'}}>
              <Col style={{border:'solid', borderWidth:'thin', marginTop:"5%", borderLeftColor:'coral', borderLeftWidth:"5px"}}>
                <h3 style={{ margin:'2%'}}>Selected Programs</h3>
                {/* <p style={{ marginLeft:'2%' ,fontWeight: 'bold'}}>Avaliable at KMITL</p> */}
                <hr/>
                <ul>
                  <div>
                    <br/> 
                      {display_selected_prog.course.map((x) => 
                        <div>
                          <p style={{ marginLeft:'2%'}}> =&gt; {x.c_thai}</p>
                          <p style={{ marginLeft:'11%'}}> {x.c_eng}</p>
                          <hr/>
                        </div>
                      )}
                  </div>
                </ul>
              </Col>
            </Col>
          </Row>
          <Row style={{justifyContent: 'center', textAlign: 'center', alignItem: 'center', width: '100%'}}>
            <div style={{ justifyContent: 'center', textAlign: 'center', alignItem: 'center', width: '80%'}}>
              <ProgressBar variant={progvariant} animated now={progstatus} label={proglabel} style={{marginLeft: '7%', marginTop: '5%', width: '100%'}}/>
            </div>
          </Row>
          <Row style={{justifyContent: 'center', textAlign: 'center', alignItem: 'center', width: '100%'}}>
            <div style={{justifyContent: 'center', textAlign: 'center', alignItem: 'center', width: '80%'}}>
                <Button style={{  margin:'7%',borderRadius:' 20px', backgroundColor:rec_button_color,border:'coral', width: '100%'}}  type="Submit" disabled={rec_button_status} onClick={validate}>
                  {isLoading ? <a>Loading...</a>: <a> Recommend Program</a>}
                </Button>
            </div>
          </Row>
        </div>: null}
        
      </>
  )
}
export default RecProgram;
