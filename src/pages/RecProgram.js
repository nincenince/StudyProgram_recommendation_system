import React from 'react';
import {Link } from "react-router-dom";

import './RecProgram.css'

import { Col,Row, Button, Image, Form} from "react-bootstrap";

import { useDispatch} from 'react-redux';
import { update_comefrom } from '../actions';
// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


function RecProgram (props){
  let dispatch = useDispatch();
  let isLogged = useSelector(state => state.isLogged);
  const changeComefrom = () => {
    dispatch(update_comefrom('recommend'));
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
            <Link to="/RecResult">
              <Button style={{  marginTop:'10%',borderRadius:' 20px', backgroundColor:'rgb(255, 70, 0)',border:'coral'}}>
                Recommend Program
              </Button>
            </Link>
          </Col>
        </Row>: null }
      </>
  )
}
export default RecProgram;
