import React from 'react';
import {Link } from "react-router-dom";

import './RecProgram.css'
import axios from 'axios';
import { Col,Row, Button, Image, Form} from "react-bootstrap";

import { useDispatch} from 'react-redux';
import { update_comefrom } from '../actions';
// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { update_rec } from '../actions';


function RecProgram (props){
  let dispatch = useDispatch();
  let isLogged = useSelector(state => state.isLogged);
  let token = useSelector(state => state.token);
  let personal = useSelector(state => state.personal);
  let personality = useSelector(state => state.personality);
  let education = useSelector(state => state.education);

  const changeComefrom = () => {
    dispatch(update_comefrom('recommend'));
  }

  const validate = async() => {
    console.log(personal);
    console.log(personality);
    console.log(education);
    let valid = true;
    let pv_list = ['กรุงเทพมหานคร', 'สมุทรปราการ', 'นนทบุรี', 'ปทุมธานี', 'พระนครศรีอยุธยา', 'อ่างทอง', 'ลพบุรี',
     'สิงห์บุรี', 'ชัยนาท', 'สระบุรี', 'ชลบุรี', 'ระยอง', 'จันทบุรี', 'ตราด', 'ฉะเชิงเทรา', 'ปราจีนบุรี', 'นครนายก',
      'สระแก้ว', 'นครราชสีมา', 'บุรีรัมย์', 'สุรินทร์', 'ศรีสะเกษ', 'อุบลราชธานี', 'ยโสธร', 'ชัยภูมิ', 'อำนาจเจริญ',
       'หนองบัวลำภู', 'ขอนแก่น', 'อุดรธานี', 'เลย', 'หนองคาย', 'มหาสารคาม', 'ร้อยเอ็ด', 'กาฬสินธุ์', 'สกลนคร',
        'นครพนม', 'มุกดาหาร', 'เชียงใหม่', 'ลำพูน', 'ลำปาง', 'อุตรดิตถ์', 'แพร่', 'น่าน', 'พะเยา', 'เชียงราย', 
        'แม่ฮ่องสอน', 'นครสวรรค์', 'อุทัยธานี', 'กำแพงเพชร', 'ตาก', 'สุโขทัย', 'พิษณุโลก', 'พิจิตร', 'เพชรบูรณ์',
         'ราชบุรี', 'กาญจนบุรี', 'สุพรรณบุรี', 'นครปฐม', 'สมุทรสาคร', 'สมุทรสงคราม', 'เพชรบุรี', 'ประจวบคีรีขันธ์',
          'นครศรีธรรมราช', 'กระบี่', 'พังงา', 'ภูเก็ต', 'สุราษฎร์ธานี', 'ระนอง', 'ชุมพร', 'สงขลา', 'สตูล', 'ตรัง',
           'พัทลุง', 'ปัตตานี', 'ยะลา', 'นราธิวาส', 'บึงกาฬ'];
    let random = Math.floor(Math.random() * pv_list.length);
    let rand_pv = pv_list[random];
    console.log(rand_pv);
    console.log(education.EduInfo[0].ScoreList[0].Score);
    console.log(personality.reduce((a, b) => a + b, 0))
    let error = "";
    if(personal['school'] === null){
      valid = false;
      error += "Please enter your school\n";
    }
    console.log(education.EduInfo[0].ScoreList[0].Score);
    if(education.EduInfo[0].ScoreList[0].Score === "0.00") {
      valid = false;
      error += "Please fill in your education information\n";
    }
    if(personality.reduce((a, b) => a + b, 0) === 0 ){
      valid = false;
      error += "Please take personality test before process further\n";
    }
    if(valid){
      let payload = {
        "school": personal['school'], 
        "province": rand_pv, 
        "gpa_high_school": education.EduInfo[0].ScoreList[0].Score
      }
      const header = {"Access-Control-Allow-Origin": "*"};
      console.log(payload);
      let response = await axios.post("https://student-recommend-api.herokuapp.com/predict/", payload);
      let data = response.data;
      console.log(data)
      let response_data = {
        "first": data['1st'],
        "first_p": data['1st_percent'],
        "second": data['2rd'],
        "second_p": data['2st_percent'],
        "third": data['3st'],
        "third_p": data['3st_percent']
      };
      let payload2 = {
        "token": token,
        "info": response_data
      }
      console.log(payload2);
      let response2 = {
        "status": false
      };
      response2 = await axios.post("http://127.0.0.1:8000/get/recommend/", payload2)
      if(response2.data['status'] === true){
        dispatch(update_rec(response2.data['info']));
        props.history.push("/RecResult");
      }

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
          {/* <Row style={{justifyContent:'center', alignItems:'center'}}>
            <h1 style={{ fontSize:'2vw', marginTop:"3%"}}>Please SignUp or SignIn to use our service.</h1>
          </Row>
          <Row style={{justifyContent:'center', alignItems:'center'}}>
            <h3 style={{ fontSize:'2vw', marginTop:"3%"}}>----==============----</h3>
          </Row>
          <Row style={{justifyContent:'center', alignItems:'center'}}>
              <a href='/SignIn'>
                <button style={{backgroundColor: 'red', borderColor: 'red', color: 'white',padding:'5% 2% 5% 2%', width: '20vw',borderRadius: '5px', fontSize:'2vw', marginTop:"3%"}}>Signup/Login</button>
              </a>
          </Row> */}
           <Col  sm={{ span: 5, offset: 4}} >
            <h4 style={{  marginTop:'20%', marginLeft:'20%'}}>Please Sign In </h4>
            <h4>to use our recommendation service.</h4>
            <i className="fas fa-sign-in-alt" style={{ float:'left', marginRight:'3%'}}></i>
                <p >Press the button below to Sign In/ Sign Up.</p>
     
        <Link to="/SignIn">
            <Button 
            style={{marginLeft:'25%',borderRadius:' 20px', backgroundColor:'coral', border:'coral'}}
            >
              SignIn/ SignUp
            </Button>
          </Link>
           
          </Col>


      
        </div>

        }
       {isLogged ?<Row>
          <Col md={{ span: 3, offset: 3 }}>
            <div style={{border:'solid', borderWidth:'thin',marginTop:'15%', padding:'10%', marginLeft:'5%'}}>
              <Image style={{widht:'3vw', height:'7vh', 
              paddingLeft:'35%'
              }} src={require("../images/1.png")}/>
              <p style={{ padding:'5%'}}>Enter your Educational Information</p>
              {/* <p style={{fontSize:'1.4vw'}}>Educational Information</p> */}
              <Link to="/EduInformation">
                <Button onClick={changeComefrom} style={{ borderRadius:' 20px', backgroundColor:'coral',border:'coral', marginLeft:'15%', fontSize:'1vw'}}>
                  Enter Information
                </Button>
              </Link>
            </div>
          </Col>

          <Col  md={{ span: 3 }}>
          <div style={{border:'solid', borderWidth:'thin',marginTop:'15%', padding:'10%', marginLeft:'5%'}}>
          <Image style={{widht:'4vw', height:'7vh' ,paddingLeft:'35%'}} src={require("../images/2.png")}/>
              <p style={{ padding:'5%'}}>Take Big 5 Personality Label test</p>
              {/* <p style={{fontSize:'1.4vw'}}>Personality Label test</p> */}
              <Link to="/PerTest">
                <Button onClick={changeComefrom} style={{ borderRadius:' 20px', backgroundColor:'coral',border:'coral', marginLeft:'30%', fontSize:'1vw'}}>
                  Take test
                </Button>
              </Link>
            </div>
          </Col>

        </Row>: null }

        {isLogged ?<Row>
          <Col  md={{ span: 3, offset: 5}}>
              <Button style={{  marginTop:'10%',borderRadius:' 20px', backgroundColor:'rgb(255, 70, 0)',border:'coral'}} type="Submit">
                <a onClick={validate}> Recommend Program</a>
              </Button>
          </Col>
        </Row>: null }
      </>
  )
}
export default RecProgram;
