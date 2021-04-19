import React from 'react';
// import {Link } from "react-router-dom";
import './AccInfo.css';
import { Row, Col, Container ,Form, Button, Navbar} from "react-bootstrap";

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { update_edu } from '../actions';
// import education_info_Reducer from '../reducers/education_info';


function EduInformation (props) {
  //   constructor() {
  //   super();
  //   this.state = {
  //     input: {},
  //     errors: {}
  //   };
     
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  let comefrom = useSelector(state => state.comefrom);
  let token = useSelector(state => state.token);
  let isLogged = useSelector(state => state.isLogged);
  let dispatch = useDispatch();
  let education = useSelector(state => state.education);
  let errors = {};
  useEffect(() => {
    //token = useSelector(state => state.token);
  }, [token, isLogged, education]);
  

  const [newgpax, setnewgpax] = useState(education.EduInfo[0].ScoreList[0].Score);
  const [newgat, setnewgat] = useState(education.EduInfo[1].ScoreList[0].Score);
  const [newpat1, setnewpat1] = useState(education.EduInfo[2].ScoreList[0].Score);
  const [newpat2, setnewpat2] = useState(education.EduInfo[3].ScoreList[0].Score);
  const [newpat3, setnewpat3] = useState(education.EduInfo[4].ScoreList[0].Score);
  const [newpat4, setnewpat4] = useState(education.EduInfo[5].ScoreList[0].Score);
  const [newpat5, setnewpat5] = useState(education.EduInfo[6].ScoreList[0].Score);
  const [newpat6, setnewpat6] = useState(education.EduInfo[7].ScoreList[0].Score);
  const [newpat7, setnewpat7] = useState(education.EduInfo[8].ScoreList[0].Score);
  const [newsatmath, setnewsatmath] = useState(education.EduInfo[9].ScoreList[0].Score);
  const [newsateng, setnewsateng] = useState(education.EduInfo[10].ScoreList[0].Score);
  const [newielts, setnewielts] = useState(education.EduInfo[11].ScoreList[0].Score);

  const [gpaxerrors, setgpaxerrors] = useState('');
  // const [gaterrors, setgaterrors] = useState('');
  // const [pat1errors, setpat1errors] = useState('');
  // const [pat2errors, setpat2errors] = useState('');
  // const [pat3errors, setpat3errors] = useState('');
  // const [pat4errors, setpat4errors] = useState('');
  // const [pat5errors, setpat5errors] = useState('');
  // const [pat6errors, setpat6errors] = useState('');
  // const [pat7errors, setpat7errors] = useState('');
  const [satmatherrors, setsatmatherrors] = useState('');
  const [satengerrors, setsatengerrors] = useState('');
  const [ieltserrors, setieltserrors] = useState('');

  const [codes, setcodes] = useState(0);

  const redirectback = () => {
    if(comefrom === 'dashboard'){
      props.history.push("/Dashboard");
    }
    else{
      props.history.push("/RecProgram");
    }
  }
  const handlefSubmit = (event) => {
    event.preventDefault();
    if(newgpax === 0){
      setnewgpax(education.EduInfo[0].ScoreList[0].Score)
    }
    if(newsatmath === 0){
      setnewsatmath(education.EduInfo[9].ScoreList[0].Score)
    }
    if(newsateng === 0){
      setnewsateng(education.EduInfo[10].ScoreList[0].Score)
    }
    if(newielts === 0){
      setnewielts(education.EduInfo[11].ScoreList[0].Score)
    }
    validate(token,true,newgpax,false,null,false,null,false,null,false,null,false,null,false,null,false,null,false,null,true,newsatmath,true,newsateng,true,newielts);
  }
  const handlegpSubmit = (event) => {
    event.preventDefault();
    if(newgat === 0){
      setnewgat(education.EduInfo[1].ScoreList[0].Score)
    }
    if(newpat1 === 0){
      setnewpat1(education.EduInfo[2].ScoreList[0].Score)
    }
    if(newpat2 === 0){
      setnewpat2(education.EduInfo[3].ScoreList[0].Score)
    }
    if(newpat3 === 0){
      setnewpat3(education.EduInfo[4].ScoreList[0].Score)
    }
    if(newpat4 === 0){
      setnewpat4(education.EduInfo[5].ScoreList[0].Score)
    }
    if(newpat5 === 0){
      setnewpat5(education.EduInfo[6].ScoreList[0].Score)
    }
    if(newpat6 === 0){
      setnewpat6(education.EduInfo[7].ScoreList[0].Score)
    }
    if(newpat7 === 0){
      setnewpat7(education.EduInfo[8].ScoreList[0].Score)
    }
    console.log(newgat);
    console.log(newpat1);
    console.log(newpat2);
    console.log(newpat3);
    console.log(newpat4);
    console.log(newpat5);
    console.log(newpat6);
    console.log(newpat7);
    validate(token,false,null,true,newgat,true,newpat1,true,newpat2,true,newpat3,true,newpat4,true,newpat5,true,newpat6,true,newpat7,false,null,false,null,false,null);
  }
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
    
  //   if(this.validate()){
  //       console.log(this.state);
  
  //       let input = {};
  //       input["email"] = "";
  //       input["password"] = "";
  //       input["confirm_password"] = "";
  //       this.setState({input:input});
  
  //       alert('Demo Form is submited');
  //   }
  // }
  
  const validate = async (tk,gpc,ngp,gc,ng,p1c,np1,p2c,np2,p3c,np3,p4c,np4,p5c,np5,p6c,np6,p7c,np7,smc,nsm,sec,nse,iec,nie) => {

    let input = {};
    input['gpax'] = parseInt(ngp);
    input['gat'] = parseInt(ng);
    input['pat1'] = parseInt(np1);
    input['pat2'] = parseInt(np2);
    input['pat3'] = parseInt(np3);
    input['pat4'] = parseInt(np4);
    input['pat5'] = parseInt(np5);
    input['pat6'] = parseInt(np6);
    input['pat7'] = parseInt(np7);
    input['satmath'] = parseInt(nsm);
    input['sateng'] = parseInt(nse);
    input['ielts'] = parseInt(nie);

    // console.log(input);
    let isValid = true;
    let response = {};

    if(codes === 1) {
      // alert("enter 1");
      if (!input["gpax"] || input["gpax"] > 4) {
        isValid = false;
        setgpaxerrors("Please enter your GPAX correctly.");
      }
      if (!input["satmath"]) {
        isValid = false;
        setsatmatherrors("Please enter your SAT Math score.");
      }
      if (!input["sateng"]) {
        isValid = false;
        setsatengerrors("Please enter your SAT English score.");
      }
      if (!input["ielts"] || input["ielts"] > 9) {
        isValid = false;
        setieltserrors("Please enter your IELTS scores correctly.");
      }
      nsm = parseInt(nsm);
      nse = parseInt(nse);
    }
    // if(codes === 2) {
    //   if (!input["gat"] ) {
    //     isValid = false;
    //     setgaterrors("Please enter your gat.");
    //   }
    //   if (!input["pat1"] ) {
    //     isValid = false;
    //     setpat1errors("Please enter your pat1.");
    //   }
    //   if (!input["pat2"] ) {
    //     isValid = false;
    //     setpat2errors("Please enter your pat2.");
    //   }
    //   if (!input["pat3"] ) {
    //     isValid = false;
    //     setpat3errors("Please enter your pat3.");
    //   }
    //   if (!input["pat4"] ) {
    //     isValid = false;
    //     setpat4errors("Please enter your pat4.");
    //   }
    //   if (!input["pat5"] ) {
    //     isValid = false;
    //     setpat5errors("Please enter your pat5.");
    //   }
    //   if (!input["pat6"] ) {
    //     isValid = false;
    //     setpat6errors("Please enter your pat6.");
    //   }
    //   if (!input["pat7"] ) {
    //     isValid = false;
    //     setpat7errors("Please enter your pat7.");
    //   }
    //   ng = parseInt(ng);
    //   np1 = parseInt(np1);
    //   np2 = parseInt(np2);
    //   np3 = parseInt(np3);
    //   np4 = parseInt(np4);
    //   np5 = parseInt(np5);
    //   np6 = parseInt(np6);
    //   np7 = parseInt(np7);
    // }
    // alert(isValid);
    if(isValid) {
      let payload = {
        "token": tk,
        "gpax_change": gpc,
        "new_gpax": ngp,
        "gat_change": gc,
        "new_gat": ng,
        "pat1_change": p1c,
        "new_pat1": np1,
        "pat2_change": p2c,
        "new_pat2": np2,
        "pat3_change": p3c,
        "new_pat3": np3,
        "pat4_change": p4c,
        "new_pat4": np4,
        "pat5_change": p5c,
        "new_pat5": np5,
        "pat6_change": p6c,
        "new_pat6": np6,
        "pat7_change": p7c,
        "new_pat7": np7,
        "sat_math_change": smc,
        "new_sat_math": nsm,
        "sat_eng_change": sec,
        "new_sat_eng": nse,
        "ielts_change": iec,
        "new_ielts": nie
      }
      console.log(payload);
      response = await axios.post("https://spr-system.herokuapp.com/edit/education/info/", payload)
      //response = await axios.post("http://127.0.0.1:8000/edit/education/info/", payload)
    }
    else {
      return isValid;
    }
    if( response.data['status'] === true) {
      console.log(response.data)
      //console.log(response.data['message']);
      dispatch(update_edu(response.data['info']));
      alert(response.data['message']);
      response = {};
      if(comefrom === 'dashboard'){
        props.history.push("/Dashboard");
      }
      else{
        props.history.push("/RecProgram")
      }
    }
    else{
      alert("Failed to edit your informations");
    }
    console.log(errors);
    response = {};
    return isValid;
  }
     
    return (
      <div>
          {/* <Navbar collapseOnSelect expand="lg"  >
            <Navbar.Brand href="/"  >
                <i 
                 className = "fas fa-graduation-cap" style={{ fontSize:'4.95vw'}}
                ></i>
                   <h5 style={{color:'coral'}}>website name</h5>
                </Navbar.Brand>
            </Navbar> */}
          
          <Container>
            <Col sm={{ span: 4, offset: 3}}>
                  <h1 style={{marginTop:'20%'}}>Education Information</h1>
            
              <Form onSubmit={handlefSubmit}>
                

                <Form.Label >GPAX</Form.Label>
                <Form.Group  controlId="forgpax">
                  <Form.Control type="number" min="0.00" max="4.00" step="0.05" placeholder={newgpax} value={newgpax} onChange={e => setnewgpax(e.target.value)} />
                  <Form.Text style={{color: "red"}} >
                    {gpaxerrors}
                  </Form.Text>
                </Form.Group>

                <Form.Label >SAT Math</Form.Label>
                <Form.Group  controlId="forsatmath">
                  <Form.Control type="number" min="200" max="800" step="10"  placeholder={newsatmath} value={newsatmath} onChange={e => setnewsatmath(e.target.value)}/>
                  <Form.Text style={{color: "red"}} >
                    {satmatherrors}
                  </Form.Text>
                </Form.Group>

                <Form.Label >SAT English</Form.Label>
                <Form.Group  controlId="forsateng">
                  <Form.Control type="number" min="200" max="800" step="10"  placeholder={newsateng} value={newsateng} onChange={e => setnewsateng(e.target.value)}/>
                  <Form.Text style={{color: "red"}} >
                    {satengerrors}
                  </Form.Text>
                </Form.Group>

                <Form.Label >IELTS</Form.Label>
                <Form.Group  controlId="forielts">
                  <Form.Control type="number" min="0.0" max="9.0" step="0.5"  placeholder={newielts} value={newielts} onChange={e => setnewielts(e.target.value)}/>
                  <Form.Text style={{color: "red"}} >
                    {ieltserrors}
                  </Form.Text>
                </Form.Group>

                {/* <Link> */}
                {/* <Link to="/RecProgram"> */}
                <Button type="Submit" className="acc-done-button" onClick={() => setcodes(1)}>
                    Edit Score
                </Button>
                {/* </Link> */}

              </Form>

              <Row><br/><br/></Row>
              {/* <Form onSubmit={handleSubmit}>

                <h1 style={{ fontSize:'2vw'}}>Account Information</h1>  

                <Form.Group controlId="fornun">
                <Form.Row style={{ fontSize:'2vw'}}>CHANGE USERNAME</Form.Row>
                  <Form.Label style={{ fontSize:'1vw'}}>New Username</Form.Label>
                  <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter New Username"  onChange={handleChange} />
                </Form.Group>

                <Button 
                style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1vw"}}
                className="update-username-button"
                type="submit"
                >
                  Update Username
                </Button>
                <br/>
              </Form> */}
              <h1 >GAT/PAT Section</h1>
              <Form onSubmit={handlegpSubmit}>
                <Form.Label >GAT - General Aptitude Test</Form.Label>
                  <Form.Group  controlId="forgat">
                    <Form.Control type="number" min="0" max="300" step="1" placeholder={newgat} value={newgat} onChange={e => setnewgat(e.target.value)}/>
                    {/* <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                      {gaterrors}
                    </Form.Text> */}
                  </Form.Group>
                  <Form.Label >PAT 1 - Aptitude in Mathematics</Form.Label>
                  <Form.Group  controlId="forpat1">
                    <Form.Control type="number" min="0" max="300" step="1" placeholder={newpat1} value={newpat1} onChange={e => setnewpat1(e.target.value)}/>
                    {/* <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                      {pat1errors}
                    </Form.Text> */}
                  </Form.Group>
                  <Form.Label >PAT 2 - Aptitude in Scientifics</Form.Label>
                  <Form.Group  controlId="forpat2">
                    <Form.Control type="number" min="0" max="300" step="1"  placeholder={newpat2} value={newpat2} onChange={e => setnewpat2(e.target.value)}/>
                    {/* <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                      {pat2errors}
                    </Form.Text> */}
                  </Form.Group>
                  <Form.Label >PAT 3 - Aptitude in Engineering</Form.Label>
                  <Form.Group  controlId="forpat3">
                    <Form.Control type="number" min="0" max="300" step="1"  placeholder={newpat3} value={newpat3} onChange={e => setnewpat3(e.target.value)}/>
                    {/* <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                      {pat3errors}
                    </Form.Text> */}
                  </Form.Group>
                  <Form.Label >PAT 4 - Aptitude in Architectural</Form.Label>
                  <Form.Group  controlId="forpat4">
                    <Form.Control type="number" min="0" max="300" step="1"  placeholder={newpat4} value={newpat4} onChange={e => setnewpat4(e.target.value)}/>
                    {/* <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                      {pat4errors}
                    </Form.Text> */}
                  </Form.Group>
                  <Form.Label >PAT 5 - Aptitude in Teacher professional</Form.Label>
                  <Form.Group  controlId="forpat5">
                    <Form.Control type="number" min="0" max="300" step="1"  placeholder={newpat5} value={newpat5} onChange={e => setnewpat5(e.target.value)}/>
                    {/* <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                      {pat5errors}
                    </Form.Text> */}
                  </Form.Group>
                  <Form.Label >PAT 6 - Aptitude in Arts</Form.Label>
                  <Form.Group  controlId="forpat6">
                    <Form.Control type="number" min="0" max="300" step="1"  placeholder={newpat6} value={newpat6} onChange={e => setnewpat6(e.target.value)}/>
                    {/* <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                      {pat6errors}
                    </Form.Text> */}
                  </Form.Group>
                  <Form.Label >PAT 7 - Aptitude in Foreign language proficiency (French, German, Chinese, Japanese, Arabic, Pali)</Form.Label>
                  <Form.Group  controlId="forpat7">
                    <Form.Control type="number" min="0" max="300" step="1"  placeholder={newpat7} value={newpat7} onChange={e => setnewpat7(e.target.value)}/>
                    {/* <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                      {pat7errors}
                    </Form.Text> */}
                  </Form.Group>
                

                {/* <Link> */}
                {/* <Link to="/RecProgram"> */}
                <Button type="Submit" className="acc-done-button"  onClick={() => setcodes(2)}>
                    Edit GAT/PAT Score
                </Button>
                {/* </Link> */}

                <hr></hr>
                <br></br>
                <Button className="btn btn-danger btn-lg btn-block"  onClick={redirectback}>
                  Back
                </Button>
                <br></br>
              </Form>
           </Col>
           {/* <Col-4></Col-4> */}
          </Container>
      </div>
    );
}
  
export default EduInformation;

