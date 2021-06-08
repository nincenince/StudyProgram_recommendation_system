import React from 'react';
import {Link } from "react-router-dom";

import './RecProgram.css'
import axios from 'axios';
import { Col,Row, Button, Image, Form, ToggleButton, ToggleButtonGroup, Container} from "react-bootstrap";
import { useState } from 'react'

import { useDispatch} from 'react-redux';
import { update_comefrom } from '../actions';
// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { update_rec, update_recpay } from '../actions';

import Course from '../AvaliableCourse';


function SelectProgram (props){
  let dispatch = useDispatch();
  let isLogged = useSelector(state => state.isLogged);
  let token = useSelector(state => state.token);
  let personal = useSelector(state => state.personal);
  let personality = useSelector(state => state.personality);
  let education = useSelector(state => state.education);
  const [formstatus, setformstatus] = useState(false);
  const changeComefrom = () => {
    dispatch(update_comefrom('recommend'));
  }
  const [selected_prog, set_selected_prog] = useState({"course": []});
  const [display_selected_prog, set_display_selected_prog] = useState({"course": []});
  const c_prog = (prog, disprog) => {
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
    }
    else{
      temp.push(prog);
      temp2.push(disprog);
    }

    let temps = {"course": temp};
    let temps2 = {"course": temp2};
    set_selected_prog(temps);
    set_display_selected_prog(temps2);
    // console.log(temps);
    // console.log(temps2); 
  }

  return(
      <>

        <Container>
          <Col xs={12} md={7}>
            <Col style={{border:'solid', borderWidth:'thin', marginTop:"5%", borderLeftColor:'coral', borderLeftWidth:"5px"}}>
              <h3 style={{ margin:'2%'}}>Recommended Program</h3>
              <p style={{ margin:'2%', fontWeight: 'bold'}}>Based on you personality trail</p>
              <hr/>
              <p style={{ margin:'2%'}}>Please select 5 programs that you're interested in from the list below</p>
              <ul>
                <div>
                  <br/> 
                    {Course.Courses.map((ava) => {
                      return (
                        <div style={{ marginLeft:'2%'}}>
                          <input type="checkbox" className="mb-2" id={ava.RECOMMEND_NAME} value={ava.RECOMMEND_NAME} name={ava.KMITL_NAME} onChange={(e) => c_prog(e.target.value,e.target.name)}/>
                          <span><label style={{ marginLeft:'2%'}}>{ava.KMITL_NAME}</label></span>
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
              <p style={{ marginLeft:'2%' ,fontWeight: 'bold'}}>Avaliable at KMITL</p>
              <hr/>
              <ul>
                <div>
                  <br/> 
                    {display_selected_prog.course.map((x) => 
                      <div>
                        <p style={{ marginLeft:'2%'}}> =&gt; {x}</p>
                      </div>
                    )}
                </div>
              </ul>
            </Col>
          </Col>
        </Container>
      </>
  )
}
export default SelectProgram;
