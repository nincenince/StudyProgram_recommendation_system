import React, { Component , useState}  from 'react';
import './EduInformation.css'

import { Col,Row, Container , Button, Form, Navbar} from "react-bootstrap";

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
      if(comefrom == 'dashboard'){
        props.history.push("/Dashboard");
      }
      else if(comefrom == 'recommend') {
        props.history.push("/RecProgram");
      }
    }
  }


    

  return(
      <>
      <div>
          {/* <h1 className = "edu-navbar-logo">
          <i className = "fas fa-graduation-cap edu-cap" Style={{ fontSize:'5vw'}}></i>
              <p className= "edu-navbar-p" Style={{ fontSize:'1.25vw'}}>Study Program</p><p className="edu-navbar-p" Style={{ fontSize:'1.25vw'}}>Recommendation</p><p className="edu-navbar-p" Style={{ fontSize:'1.25vw'}}>System
          </p></h1> */}
      <Navbar collapseOnSelect expand="lg"  >
        <Navbar.Brand href="/"  >
            <i 
              className = "fas fa-graduation-cap" Style={{ fontSize:'4.95vw'}}
            ></i>
                <p 
                className= "navbar-p" Style={{ fontSize:'1vw'}}
                >Study Program</p><p 
                className="navbar-p" Style={{ fontSize:'1vw'}}
                >Recommendation</p>
                <p 
                className="navbar-p" Style={{ fontSize:'1vw'}}
                >System
            </p>
            </Navbar.Brand>
        </Navbar>
      <p Style={{paddingLeft:'15%'}}>Answer all 44 questions to see your Openness, Conscientiousness,
      Extraversion, Agreeableness, and Neuroticism score which labeled based on Big 5 Personality.</p>

      <p Style={{paddingLeft:'10%'}}>Rate each statement according to how it describes you, where 1 = Disagree, 3 = Neutral, and 5 = Agree.</p>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Col>
            <h1 className= "Edu-header" Style={{ fontSize:'2vw'}}>Personality Test</h1>
            <div>
              <ul>
                <Col className= "edu-box">
                  <Col md={{ span: 9, offset: 3 }}>
                    
                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is talkative</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q1} min="1" max="5" step="1" id="q1" onChange={e => setq1(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Tends to find fault with others</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q2} min="1" max="5" step="1" id="q2" onChange={e => setq2(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Does a thorough job</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q3} min="1" max="5" step="1" id="q3" onChange={e => setq3(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is depressed, blue</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q4} min="1" max="5" step="1" id="q1" onChange={e => setq4(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is original, comes up with new ideas</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q5} min="1" max="5" step="1" id="q1" onChange={e => setq5(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is reserved</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q6} min="1" max="5" step="1" id="q1" onChange={e => setq6(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is helpful and unselfish with others</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q7} min="1" max="5" step="1" id="q1" onChange={e => setq7(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Can be somewhat careless</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q8} min="1" max="5" step="1" id="q1" onChange={e => setq8(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is relaxed, handles stress well</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q9} min="1" max="5" step="1" id="q1" onChange={e => setq9(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is curious about many different things</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q10} min="1" max="5" step="1" id="q1" onChange={e => setq10(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is full of energy</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q11} min="1" max="5" step="1" id="q1" onChange={e => setq11(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Starts quarrels with others</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q12} min="1" max="5" step="1" id="q1" onChange={e => setq12(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is a reliable worker</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q13} min="1" max="5" step="1" id="q1" onChange={e => setq13(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Can be tense</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q14} min="1" max="5" step="1" id="q1" onChange={e => setq14(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is ingenious, a deep thinker</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q15} min="1" max="5" step="1" id="q1" onChange={e => setq15(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Generates a lot of enthusiasm</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q16} min="1" max="5" step="1" id="q1" onChange={e => setq16(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Has a forgiving nature</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q17} min="1" max="5" step="1" id="q1" onChange={e => setq17(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Tends to be disorganized</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q18} min="1" max="5" step="1" id="q1" onChange={e => setq18(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Worries a lot</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q19} min="1" max="5" step="1" id="q1" onChange={e => setq19(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Has an active imagination</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q20} min="1" max="5" step="1" id="q1" onChange={e => setq20(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Tends to be quiet</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q21} min="1" max="5" step="1" id="q1" onChange={e => setq21(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is generally trusting</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q22} min="1" max="5" step="1" id="q1" onChange={e => setq22(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Tends to be lazy</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q23} min="1" max="5" step="1" id="q1" onChange={e => setq23(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is emotionally stable, not easily upset</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q24} min="1" max="5" step="1" id="q1" onChange={e => setq24(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is inventive</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q25} min="1" max="5" step="1" id="q1" onChange={e => setq25(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Has an assertive personality</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q26} min="1" max="5" step="1" id="q1" onChange={e => setq26(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>
                    
                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Can be cold and aloof</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q27} min="1" max="5" step="1" id="q1" onChange={e => setq27(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Perseveres until the task is finished</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q28} min="1" max="5" step="1" id="q1" onChange={e => setq28(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Can be moody</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q29} min="1" max="5" step="1" id="q1" onChange={e => setq29(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Values artistic, aesthetic experiences</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q30} min="1" max="5" step="1" id="q1" onChange={e => setq30(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is sometimes shy, inhibited</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q31} min="1" max="5" step="1" id="q1" onChange={e => setq31(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is considerate and kind to almost everyone</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q32} min="1" max="5" step="1" id="q1" onChange={e => setq32(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Does things efficiently</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q33} min="1" max="5" step="1" id="q1" onChange={e => setq33(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Remains calm in tense situations</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q34} min="1" max="5" step="1" id="q1" onChange={e => setq34(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Prefers work that is routine</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q35} min="1" max="5" step="1" id="q1" onChange={e => setq35(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is outgoing, sociable</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q36} min="1" max="5" step="1" id="q1" onChange={e => setq36(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is sometimes rude to others</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q37} min="1" max="5" step="1" id="q1" onChange={e => setq37(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Makes plans and follows through with them</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q38} min="1" max="5" step="1" id="q1" onChange={e => setq38(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Gets nervous easily</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q39} min="1" max="5" step="1" id="q1" onChange={e => setq39(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Likes to reflect, play with ideas</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q40} min="1" max="5" step="1" id="q1" onChange={e => setq40(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Has few artistic interests</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q41} min="1" max="5" step="1" id="q1" onChange={e => setq41(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Likes to cooperate with others</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q42} min="1" max="5" step="1" id="q1" onChange={e => setq42(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is easily distracted</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q43} min="1" max="5" step="1" id="q1" onChange={e => setq43(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                    <Row>
                      <h4 className= "pertest-info-label" Style={{ fontSize:'1.4vw', textAlign:'left'}} >Is sophisticated in art, music, or literature</h4>
                    </Row>
                    <Row>
                      <div className="range" >
                        <input type="range" className="custom-range" value={q44} min="1" max="5" step="1" id="q1" onChange={e => setq44(parseInt(e.target.value))}/>
                        <p Style="text-align:center;">
                        <span Style="float:left;">1</span>
                          <span Style="float:center;">3</span>
                          <span Style="float:right;">5</span>
                        </p>
                      </div>
                    </Row>

                  </Col>
                  {/* <Link to="/RecProgram"> */}
                    <Button className="Edu-done-button" type="submit" value="Submit" Style={{ fontSize:'1vw', float:'right'}}>
                      Done
                    </Button>
                  {/* </Link> */}
                
                </Col>
              </ul>
            </div>
          </Col>
        </Container>
      </Form>     
    </div>
    
  </>
)
}




export default PerTest;
