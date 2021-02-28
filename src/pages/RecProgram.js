import React from 'react';
import {Link } from "react-router-dom";

import './RecProgram.css'

import { Col,Row, Button, Image} from "react-bootstrap";

import { useDispatch} from 'react-redux';
import { update_comefrom } from '../actions';


function RecProgram (props){
  let dispatch = useDispatch();

  const changeComefrom = () => {
    dispatch(update_comefrom('recommend'));
  }
  return(
      <>
      <h1 style={{ fontSize:'2vw', marginLeft:"5%", marginTop:"3%"}}>Get ready to discover your programs</h1>
        <Row>
          <Col md={{ span: 3, offset: 3 }}>
            <div style={{border:'solid', borderWidth:'thin',marginTop:'15%', padding:'10%'}}>
              <Image style={{widht:'3vw', height:'7vh', paddingLeft:'35%'}} src={require("../images/1.png")}/>
              <p style={{fontSize:'1.4vw', padding:'5%'}}>Enter your Educational Information</p>
              {/* <p style={{fontSize:'1.4vw'}}>Educational Information</p> */}
              <Link to="/EduInformation">
                <Button onClick={changeComefrom} style={{ fontSize:'1vw',borderRadius:' 20px', backgroundColor:'coral',border:'coral', marginLeft:'15%'}}>
                  Enter Information
                </Button>
              </Link>
            </div>
          </Col>

          <Col  md={{ span: 3 }}>
          <div style={{border:'solid', borderWidth:'thin',marginTop:'15%', padding:'10%'}}>
          <Image style={{widht:'4vw', height:'7vh' ,paddingLeft:'35%'}} src={require("../images/2.png")}/>
              <p style={{fontSize:'1.4vw', padding:'5%'}}>Take Big 5 Personality Label test</p>
              {/* <p style={{fontSize:'1.4vw'}}>Personality Label test</p> */}
              <Link to="/PerTest">
                <Button onClick={changeComefrom} style={{ fontSize:'1vw',borderRadius:' 20px', backgroundColor:'coral',border:'coral', marginLeft:'30%'}}>
                  Take test
                </Button>
              </Link>
            </div>
          </Col>

        </Row>

        <Row>
          <Col  md={{ span: 3, offset: 5}}>
            <Link to="/RecResult">
              <Button style={{ fontSize:'1vw', marginTop:'10%',borderRadius:' 20px', backgroundColor:'rgb(255, 70, 0)',border:'coral'}}>
                Recommend Program
              </Button>
            </Link>
          </Col>
        </Row>
      </>
  )
}
export default RecProgram;
