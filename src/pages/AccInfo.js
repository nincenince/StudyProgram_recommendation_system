import React from 'react';
// import {Link } from "react-router-dom";
import './AccInfo.css';
import { Col,Row, Container , Form, Button} from "react-bootstrap";

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { update_firstname, update_lastname, update_email, update_sex, update_school } from '../actions';


function AccInfo (props) {
  //   constructor() {
  //   super();
  //   this.state = {
  //     input: {},
  //     errors: {}
  //   };
     
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  let token = useSelector(state => state.token);
  let isLogged = useSelector(state => state.isLogged);
  let dispatch = useDispatch();
  let personal = useSelector(state => state.personal);
  let errors = {};
  useEffect(() => {
    //token = useSelector(state => state.token);
  }, [token, isLogged, personal]);

  const [newemail, setnewemail] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [confirmnewpassword, setconfirmnewpassword] = useState('');
  const [oldemail, setoldemail] = useState('');
  const [oldpassword, setoldpassword] = useState('');
  const [firstname, setfirstname] = useState(personal.firstname);
  const [lastname, setlastname] = useState(personal.lastname);
  const [gender, setgender] = useState(personal.gender);
  // const [age, setage] = useState(personal.age);
  const [school, setschool] = useState(personal.school);
  const [gendererrors, setgendererrors] = useState('');
  // const [ageerrors, setageerrors] = useState('');
  const [schoolerrors, setschoolerrors] = useState('');
  const [emailerrors, setemailerrors] = useState('');
  const [oldpassworderrors, setoldpassworderrors] = useState('');
  const [newpassworderrors, setnewpassworderrors] = useState('');
  const [confirm_new_passworderrors, setconfirm_new_passworderrors] = useState('');
  const [firstnameerrors, setfirstnameerrors] = useState('');
  const [lastnameerrors, setlastnameerrors] = useState('');
  const [codes, setcodes] = useState(0);

  // const handleChange = (event) => {
  //   setnewemail("");
  // }
     
  const handlePersonalSubmit = (event) => {
    event.preventDefault();
    if(firstname === ''){
      setfirstname(personal.firstname);
    }
    if(lastname === ''){
      setlastname(personal.lastname);
    }
    if(school === null || school === ''){
      setschool(personal.school);
    }
    if(gender === null || gender === ''){
      setgender(personal.sex);
    }
    validate(token,false,null,false,null,null,null,true,firstname,true,lastname,true,school,true,gender);
  }
  const handleEmailSubmit = (event) => {
    event.preventDefault();
    validate(token,true,newemail,false,null,null,null,false,null,false,null,false,null,false,null);
  }
  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    validate(token,false,null,true,newpassword,confirmnewpassword,oldpassword,false,null,false,null,false,null,false,null);
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
  
  const validate = async (tk,ec,ne,pc,np,cnp,op,fc,nf,lc,nl,sc,ns,gc,ng) => {
      let input = {};
      input['email'] = ne;
      input['oldpassword'] = op;
      input['newpassword'] = np;
      input['confirm_new_password'] = cnp;
      input['firstname'] = nf;
      input['lastname'] = nl;
      input['gender'] = ng;
      input['school'] = ns;

      // console.log(input);
      let isValid = true;
      let response = {};
  
      if(codes === 1) {
        // alert("enter 1");
        if (!input["gender"]) {
          isValid = false;
          setgendererrors("Please select your gender.");
        }
        if (!input["school"]) {
          isValid = false;
          setschoolerrors("Please select your school.");
        }
        if (!input["firstname"]) {
          isValid = false;
          setfirstnameerrors("Please enter your firstname.");
        }
        if (!input["lastname"] ) {
          isValid = false;
          setlastnameerrors("Please enter your lastname.");
        }
      }
      if(codes === 2) {
        if (!input["email"]) {
          isValid = false;
          setemailerrors("Please enter your email Address.");
        }
    
        if (typeof input["email"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            setemailerrors("Please enter valid email address.");
          }
        }
      }
      if(codes === 3) {
        if (!input["oldpassword"]) {
          isValid = false;
          setoldpassworderrors("Please enter your old password.");
        }

        if (!input["newpassword"]) {
          isValid = false;
          setnewpassworderrors("Please enter your new password.");
        }

        if (!input["confirm_new_password"]) {
          isValid = false;
          setconfirm_new_passworderrors("Please enter your confirm new password.");
        }
    
        if (typeof input["newpassword"] !== "undefined" && typeof input["confirm_new_password"] !== "undefined") {
            
          if (input["newpassword"] !== input["confirm_new_password"]) {
            isValid = false;
            setconfirm_new_passworderrors("Passwords don't match.");
          }
        } 
      }
      // alert(isValid);
      if(isValid) {
        let payload = {
          "token": tk,
          "email_change": ec,
          "new_email": ne,
          "password_change": pc,
          "new_password": np,
          "old_password": op,
          "firstname_change": fc,
          "new_firstname": nf,
          "lastname_change": lc,
          "new_lastname": nl,
          "school_change": sc,
          "new_school": ns,
          "gender_change": gc,
          "new_gender": ng
        }
        console.log(payload);
        response = await axios.post("https://spr-system.herokuapp.com/edit/personal/info/", payload)
        //response = await axios.post("http://127.0.0.1:8000/edit/personal/info/", payload)
      }
      else {
        return isValid;
      }
      if( response.data['status'] === true) {
        console.log(response.data)
        //console.log(response.data['message']);
        dispatch(update_firstname(response.data['info']['firstname']));
        dispatch(update_lastname(response.data['info']['lastname']));
        dispatch(update_email(response.data['info']['email']));
        dispatch(update_sex(response.data['info']['sex']));
        dispatch(update_school(response.data['info']['school']));
        alert(response.data['message']);
        response = {};
        props.history.push("/AccInfo");
      }
      else{
        alert("Failed to edit your informations");
      }

      
  
      
      
  
      // this.setState({
      //   errors: errors
      // });
      console.log(errors);
      response = {};
      return isValid;
  }
     
    return (
      <div>
          <h1 className = "edu-navbar-logo">
            <i className = "fas fa-graduation-cap edu-cap" style={{ fontSize:'5vw'}}></i>
              <p className= "edu-navbar-p" style={{ fontSize:'1.25vw'}}>Study Program</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>Recommendation</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>
                System
              </p>
          </h1>
          <Container>
            <Col xs={3}></Col>
            <Col xs={5}>
              {/* <Row>  */}
                  <h1 style={{ fontSize:'2vw'}}>User Information</h1>
              {/* </Row> */}
            
              <Form onSubmit={handlePersonalSubmit}>
                
                <Form.Group controlId="forfn">
                  <Form.Label style={{ fontSize:'1vw'}}>Firstname</Form.Label>
                  {/* <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter First Name"  value={firstname} onChange={e => setfirstname(e.target.value)} /> */}
                  <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder={personal.firstname}  value={firstname} onChange={e => setfirstname(e.target.value)} />
                  <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                    {firstnameerrors}
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="forln">
                  <Form.Label style={{ fontSize:'1vw'}}>Lastname</Form.Label>
                  <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder={personal.lastname} value={lastname} onChange={e => setlastname(e.target.value)} />
                  <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                    {lastnameerrors}
                  </Form.Text>
                </Form.Group>


              <Form.Label style={{ fontSize:'1vw'}}>Gender</Form.Label>
                <Form.Group  controlId="forgd">
                  <Form.Control as="select" defaultValue={personal.sex} style={{ fontSize:'1vw'}} placeholder={personal.sex} value={gender} onChange={e => setgender(e.target.value)} >
                    <option style={{ fontSize:'1vw'}}>{null}</option>
                    <option style={{ fontSize:'1vw'}}>Female</option>
                    <option style={{ fontSize:'1vw'}}>Male</option>
                    <option style={{ fontSize:'1vw'}}>Other</option>
                  </Form.Control>
                  <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                    {gendererrors}
                  </Form.Text>
                </Form.Group>

                <Form.Label style={{ fontSize:'1vw'}}>School</Form.Label>
                <Form.Group  controlId="forsc">
                  <Form.Control as="select" style={{ fontSize:'1vw'}} defaultValue={personal.school} placeholder={personal.school} value={school} onChange={e => setschool(e.target.value)}>
                    <option style={{ fontSize:'1vw'}}>{null}</option>
                    <option style={{ fontSize:'1vw'}}>School1</option>
                    <option style={{ fontSize:'1vw'}}>School2</option>
                    <option style={{ fontSize:'1vw'}}>School3</option>
                  </Form.Control>
                  <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                    {schoolerrors}
                  </Form.Text>
                </Form.Group>

                {/* <Link> */}
                {/* <Link to="/RecProgram"> */}
                <Button type="Submit" className="acc-done-button" style={{ fontSize:'1vw'}} onClick={() => setcodes(1)}>
                    Done
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
              <Form onSubmit={handleEmailSubmit}>
                <Form.Group controlId="foroun">
                <Form.Row style={{ fontSize:'2vw'}}>CHANGE EMAIL</Form.Row>
                  <Form.Label style={{ fontSize:'1vw'}}>Current Email</Form.Label>
                  <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter Current Email"  value={oldemail} onChange={e => setoldemail(e.target.value)} />
                  <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                  {emailerrors}
                  </Form.Text>
                  <Form.Label style={{ fontSize:'1vw'}}>New Email</Form.Label>
                  <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter New Email"  value={newemail} onChange={e => setnewemail(e.target.value)} />
                  <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                  {emailerrors}
                  </Form.Text>
                </Form.Group>

                <Button style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1vw"}} type="submit"className="update-email-button" onClick={() => setcodes(2)}>
                  Update Email
                </Button>
                <br/>
              </Form>

              <Form onSubmit={handlePasswordSubmit}>
                <Form.Group controlId="forpw">
                <Form.Row style={{ fontSize:'2vw'}}>CHANGE PASSWORD</Form.Row>
                  <Form.Label style={{ fontSize:'1vw'}}>Current Password</Form.Label>
                  <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter Current Email"  value={oldpassword} onChange={e => setoldpassword(e.target.value)} />
                  <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                  {oldpassworderrors}
                  </Form.Text>
                  <Form.Label style={{ fontSize:'1vw'}}>New Password</Form.Label>
                  <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter New Email"  value={newpassword} onChange={e => setnewpassword(e.target.value)} />
                  <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                  {newpassworderrors}
                  </Form.Text>
                  <Form.Label style={{ fontSize:'1vw'}}>Confirm New Password</Form.Label>
                  <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter New Email"  value={confirmnewpassword} onChange={e => setconfirmnewpassword(e.target.value)} />
                  <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                  {confirm_new_passworderrors}
                  </Form.Text>
                </Form.Group>
                <Button style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1vw"}} className="update-pas-button"type="submit" onClick={() => setcodes(3)}>
                  Update Password
                </Button>
              </Form>

           </Col>
           <Col></Col>
          </Container>
      </div>
    );
}
  
export default AccInfo;

