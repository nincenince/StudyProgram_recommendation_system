import React, { useState}  from 'react';
import './EduInformation.css'

import { Col,Row , Button, Form} from "react-bootstrap";

import axios from 'axios';
import { useSelector, useDispatch} from 'react-redux';
import { update_per } from '../actions';


function PerTest (props){

  let comefrom = useSelector(state => state.comefrom);
  let token = useSelector(state => state.token);
  let dispatch = useDispatch();

  const [q1, setq1] = useState(3);
  const [q2, setq2] = useState(3);
  const [q3, setq3] = useState(3);
  const [q4, setq4] = useState(3);
  const [q5, setq5] = useState(3);
  const [q6, setq6] = useState(3);
  const [q7, setq7] = useState(3);
  const [q8, setq8] = useState(3);
  const [q9, setq9] = useState(3);
  const [q10, setq10] = useState(3);
  const [q11, setq11] = useState(3);
  const [q12, setq12] = useState(3);
  const [q13, setq13] = useState(3);
  const [q14, setq14] = useState(3);
  const [q15, setq15] = useState(3);
  const [q16, setq16] = useState(3);
  const [q17, setq17] = useState(3);
  const [q18, setq18] = useState(3);
  const [q19, setq19] = useState(3);
  const [q20, setq20] = useState(3);
  const [q21, setq21] = useState(3);
  const [q22, setq22] = useState(3);
  const [q23, setq23] = useState(3);
  const [q24, setq24] = useState(3);
  const [q25, setq25] = useState(3);
  const [q26, setq26] = useState(3);
  const [q27, setq27] = useState(3);
  const [q28, setq28] = useState(3);
  const [q29, setq29] = useState(3);
  const [q30, setq30] = useState(3);
  const [q31, setq31] = useState(3);
  const [q32, setq32] = useState(3);
  const [q33, setq33] = useState(3);
  const [q34, setq34] = useState(3);
  const [q35, setq35] = useState(3);
  const [q36, setq36] = useState(3);
  const [q37, setq37] = useState(3);
  const [q38, setq38] = useState(3);
  const [q39, setq39] = useState(3);
  const [q40, setq40] = useState(3);
  const [q41, setq41] = useState(3);
  const [q42, setq42] = useState(3);
  const [q43, setq43] = useState(3);
  const [q44, setq44] = useState(3);



  const handleSubmit = (event) => {
    event.preventDefault();
    let answer = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44]
    validate(answer)
  };
  const validate = async (ans) => {
    let payload = {
      "token" : token,
      "answer": ans
    }
    let response = {};
    response = await axios.post("https://spr-system.herokuapp.com/personality_result/", payload);
    //response = await axios.post("http://127.0.0.1:8000/personality_result/", payload);
    if (response.data['status'] === true) {
      dispatch(update_per(response.data['info']))
      alert("congratulations you have finished the personality test.")
      if(comefrom === 'dashboard'){
        props.history.push("/Dashboard");
      }
      else if(comefrom === 'recommend') {
        props.history.push("/RecProgram");
      }
    }
  }


    

  return(
      <>
      <div>
          
          
      <h5 style={{marginLeft:'10%'}}>Answer all 44 questions to see your Openness, Conscientiousness,
      Extraversion, Agreeableness, and Neuroticism score which labeled based on Big 5 Personality.</h5>

      <h5 style={{paddingLeft:'10%'}}>Rate each statement according to how it describes you, where 1 = Disagree, 3 = Neutral, and 5 = Agree.</h5>
      <Form onSubmit={handleSubmit}>
        {/* <Container> */}
          <Col>
            <h2 className= "Edu-header" style={{ marginBottom:'3%', marginLeft:'10%', marginTop:'4%'}} >Personality Test</h2>
            <div>
              <ul>
                {/* <Col className= "edu-box"> */}
                  <Col md={{ span: 8, offset: 4 }}>
                    
                    <Row>
                      <h4  style={{textAlign:'center'}} >Is talkative</h4>
                    </Row>
                <Row style={{ marginBottom:'3%'}}>
                    <Form.Check  
                        inline label="1"  type={'radio'} value="1" style={{ marginRight:'5%'}}
                        name="formHorizontalRadios "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{ marginRight:'5%'}}
                        name="formHorizontalRadios "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{  marginRight:'5%'}}
                        name="formHorizontalRadios "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{  marginRight:'5%'}}
                        name="formHorizontalRadios "  />
                        <Form.Check                                
                        inline label="5"  type={'radio'} value="5" style={{  marginRight:'5%'}}
                        name="formHorizontalRadios "   />
                </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{  textAlign:'left'}} >Tends to find fault with others</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                    <Form.Check  
                        inline label="1"  type={'radio'} value="1" style={{ marginRight:'5%'}}
                        name="formHorizontalRadios2 "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{ marginRight:'5%'}}
                        name="formHorizontalRadios2 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{  marginRight:'5%'}}
                        name="formHorizontalRadios2 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios2 "  />
                        <Form.Check                                
                        inline label="5"  type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios2 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{  textAlign:'left'}} >Does a thorough job</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                    <Form.Check  
                        inline label="1"  type={'radio'} value="1" style={{ marginRight:'5%'}}
                        name="formHorizontalRadios3 "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{ marginRight:'5%'}}
                        name="formHorizontalRadios3 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{  marginRight:'5%'}}
                        name="formHorizontalRadios3 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios3 "  />
                        <Form.Check                                
                        inline label="5"  type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios3 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{  textAlign:'left'}} >Is depressed, blue</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios4  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios4 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios4 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios4 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios4 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{  textAlign:'left'}} >Is original, comes up with new ideas</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios5  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios5 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios5 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios5 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios5 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{  textAlign:'left'}} >Is reserved</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios6  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios6 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios6 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios6 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios6 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{  textAlign:'left'}} >Is helpful and unselfish with others</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios7  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios7 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios7 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios7 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios7 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{  textAlign:'left'}} >Can be somewhat careless</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios8  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios8 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios8 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios8 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios8 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{  textAlign:'left'}} >Is relaxed, handles stress well</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios9  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios9 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios9 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios9 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios9 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{  textAlign:'left'}} >Is curious about many different things</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios10  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios10 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios10 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios10 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios10 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{  textAlign:'left'}} >Is full of energy</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios11  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios11 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios11 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios11 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios11 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{  textAlign:'left'}} >Starts quarrels with others</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios12  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios12 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios12 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios12 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios12 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{  textAlign:'left'}} >Is a reliable worker</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios13  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios13 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios13 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios13 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios13 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Can be tense</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios14  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios14 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios14 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios14 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios14 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is ingenious, a deep thinker</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios15  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios15 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios15 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios15 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios15 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Generates a lot of enthusiasm</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios16  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios16 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios16 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios16 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios16 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Has a forgiving nature</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios17  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios17 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios17 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios17 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios17 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Tends to be disorganized</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios18  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios18 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios18 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios18 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios18 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Worries a lot</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios19  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios19 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios19 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios19 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios19 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Has an active imagination</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios20  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios20 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios20 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios20 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios20 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Tends to be quiet</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios21  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios21 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios21 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios21 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios21 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is generally trusting</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios22  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios22 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios22 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios22 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios22 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Tends to be lazy</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios23  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios23 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios23 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios23 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios23 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is emotionally stable, not easily upset</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios24  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios24 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios24 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios24 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios24 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is inventive</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios25  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios25 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios25 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios25 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios25 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Has an assertive personality</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios26  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios26 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios26 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios26 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios26 "   />
                    </Row>

                    
                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Can be cold and aloof</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios27  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios27 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios27 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios27 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios27 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Perseveres until the task is finished</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios28  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios28 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios28 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios28 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios28 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Can be moody</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios29  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios29 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios29 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios29 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios29 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Values artistic, aesthetic experiences</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios30  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios30 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios30 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios30 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios30 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is sometimes shy, inhibited</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios31  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios31 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios31 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios31 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios31 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is considerate and kind to almost everyone</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios32  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios32 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios32 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios32 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios32 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Does things efficiently</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios33  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios33 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios33 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios33 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios33 "   />
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Remains calm in tense situations</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios34  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios34 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios34 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios34 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios34 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Prefers work that is routine</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios35  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios35 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios35 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios35 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios35 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is outgoing, sociable</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios36  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios36 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios36 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios36 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios36 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is sometimes rude to others</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios37  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios37 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios37 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios37 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios37 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Makes plans and follows through with them</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios38  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios38 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios38 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios38 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios38 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Gets nervous easily</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios39  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios39 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios39 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios39 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios39 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Likes to reflect, play with ideas</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios40  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios40 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios40 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios40 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios40 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Has few artistic interests</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios41  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios41 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios41 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios41 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios41 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Likes to cooperate with others</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios42  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios42 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios42 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios42 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios42 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is easily distracted</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios43  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios43 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios43 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios43 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios43 "   />
                    </Row>


                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is sophisticated in art, music, or literature</h4>
                    </Row>
                    <Row style={{ marginBottom:'3%'}}>
                      
                      <Form.Check 
                        inline label="1"  type={'radio'} value="1" style={{   marginRight:'5%'}}
                        name="formHorizontalRadios44  "  />
                        <Form.Check  
                        inline label="2"  type={'radio'} value="2" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios44 "  />
                        <Form.Check                          
                        inline label="3" type={'radio'}  value="3" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios44 "  />
                        <Form.Check                               
                        inline label="4" type={'radio'} value="4" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios44 "  />
                        <Form.Check                                
                        inline label="5" type={'radio'} value="5" style={{    marginRight:'5%'}}
                        name="formHorizontalRadios44 "   />
                    </Row>


                  </Col>
                  {/* <Link to="/RecProgram"> */}
                    <Button className="Edu-done-button" type="submit" value="Submit" Style={{ fontSize:'1vw', float:'right'}}>
                      Done
                    </Button>
                  {/* </Link> */}
                
                {/* </Col> */}
              </ul>
            </div>
          </Col>
        {/* </Container> */}
      </Form>     
    </div>
    
  </>
)
}




export default PerTest;
