import React from 'react';
import './SignIn.css'
import {Link} from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import ReactFacebookLogin from 'react-facebook-login';
// import bg from '../images/plain.png'; 
import bg from '../images/IMG_0947.JPG'; 
// import { Container } from 'react-bootstrap';
import { Col,Row, Container , Image, Jumbotron, Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { update_token, signin, update_firstname, update_lastname, update_email, update_sex, update_age, update_edu, update_per } from '../actions';

const clientId = '304351361611-crq2n9aucmhcee8bf7pnujvmvfg5pe1v.apps.googleusercontent.com'
const responseGoogle = (response) => {
    console.log(response);
    console.log("google")
  }
const responseFacebook=(response)=>{
    console.log(response);
}


function SignIn(props) {

         
      let token = useSelector(state => state.token);
      let isLogged = useSelector(state => state.isLogged);
      let dispatch = useDispatch();

      useEffect(() => {
        //token = useSelector(state => state.token);
      }, [token, isLogged]);

      const [email, setemail] = useState('');
      const [password, setpassword] = useState('');
      const [input, setinput] = useState({
        email: '',
        password: ''
      });

      const handleChange = (event) => {
        setinput({input});
      };
         
      const handleSubmit = (event) => {
        event.preventDefault();
      
        if(validate(email, password)){
          let input = {};
          input["email"] = "";
          input["password"] = "";
          setinput({input});
        }
      };

      
      const validate = async (em,ps) =>{
          let input = {
            "email": em,
            "password": ps
          };
          let errors = {};
          let isValid = true;
          let response = {};

          if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
          }
      
          if (typeof input["email"] !== "undefined") {
              
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }
      
          if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
          }

          if (isValid) {
            let payload = {
              'email' : input["email"],
              'password' : input["password"]
            }
            //response = await axios.post("https://spr-system.herokuapp.com/login/", payload)
            response = await axios.post("http://127.0.0.1:8000/login/", payload)
          }
          else{
            return isValid;
          }
          // console.log(isValid)
          // console.log("Now")
          console.log(response.data)
          // console.log("Wow")
          if (response.data['status'] === true) {
            console.log("Passed");
            //this.history.push("/");
            dispatch(signin());
            dispatch(update_token(response.data['token']));
            //alert(response.data['info']['firstname']);
            dispatch(update_firstname(response.data['info']['firstname']));
            dispatch(update_lastname(response.data['info']['lastname']));
            dispatch(update_email(response.data['info']['email']));
            dispatch(update_sex(response.data['info']['sex']));
            dispatch(update_age(response.data['info']['age']));
            // alert("Your status: "+ {isLogged} +"\nYour token is: " + {token});
            //return <Redirect to="/"/>;
            get_edu(response.data['token']);
            get_per(response.data['token']);
            props.history.push("/");    
          }
          else {
            alert("Fail to login");
          }
          console.log(isValid);
          return isValid;
      }
      const get_edu = async (tk) => {
        let payload = {
          "token": tk
        }
        let response = {};
        //response = await axios.post("https://spr-system.herokuapp.com/get/education/info/", payload)
        response = await axios.post("http://127.0.0.1:8000/get/education/info/", payload)
        if(response.data['status'] === true) {
          dispatch(update_edu(response.data['info']))
        }
        else {
          alert("Fail to get data");
        }
        
        return payload;
      }
      const get_per = async (tk) => {
        let payload = {
          "token": tk
        }
        let response3 = {};
        //response3 = await axios.post("https://spr-system.herokuapp.com/get/personality/info/", payload)
        response3 = await axios.post("http://127.0.0.1:8000/get/personality/info/", payload)
        if(response3.data['status'] === true) {
          dispatch(update_per(response3.data['info']))
        }
        else {
          alert("Fail to get data");
        }
      }
      

      const onFailure = (res) =>{
        console.log('[login failed] res:' , res);
    };
    
        return (
        
    <div>
      {/* <img src={bg}  widht="100vw" height="100vh" className = "signup-bg" > */}
          
      {isLogged ? <h1>You are alredy logged in</h1> :
      <Form onSubmit={handleSubmit}>
      
        <Container>
          <Col></Col>
          <Col>
            <Form>
            <h1 style={{ fontSize:'2vw'}}>Sign In</h1>
            <Form.Group controlId="foremail">
              <Form.Label style={{ fontSize:'1vw'}}>Email address</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="email" placeholder="Enter email" value={email} onChange={e => setemail(e.target.value)}/>
              <Form.Text style={{color: "red", fontSize: "12px"}} >
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="forpassword">
              <Form.Label style={{ fontSize:'1vw'}}>Password</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="password" placeholder="Enter password" value={password} onChange={e => setpassword(e.target.value)}/>
              <Form.Text  style={{color: "red", fontSize: "12px"}} >
              </Form.Text>
            </Form.Group>

           

            <Button 
            style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1vw"}}
            variant="primary" type="submit" >
              Submit
            </Button>
            <p style={{ fontSize:'1vw'}}>
                Don't have an account? <Link to="/SignUp">Sign Up</Link>
            </p>
        

            <GoogleLogin
                  style={{width:"50vw", fontSize:"0.5vw",height:"30vh"}}
                  clientId ={clientId}
                  buttonText="login with google account"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
              />

            <ReactFacebookLogin
                  style={{width:"50vw", fontSize:"0.5vw",height:"30vh"}}
                  appId="257174585672540"
                  // autoLoad={true}
                  fields="name, email,picture"
                  icon="fa-facebook"
                  //   scope="public_profile, user_friends, user_actions,email,user_birthday"
                  callback={responseFacebook}
            />

                </Form>
          </Col>
          <Col></Col>
      
          </Container>   
            </Form> }
          </div>
      
        );
      
    }
      
    export default SignIn;





