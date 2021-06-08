import React from 'react';
import './SignIn.css'
import {Link} from 'react-router-dom';

// import bg from '../images/plain.png'; 
// import bg from '../images/IMG_0947.JPG'; 
// import { Container } from 'react-bootstrap';
import { Col , Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { update_token, signin, update_firstname, update_lastname, update_email, update_sex, update_age, update_school, update_role, signin_admin, update_profilepic } from '../actions';


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

      // const handleChange = (event) => {
      //   setinput({input});
      // };
         
      const handleSubmit = (event) => {
        event.preventDefault();
      
        if(validate(email, password)){
          setinput(input);
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
            await axios.post("https://spr-system.herokuapp.com/login/", payload).then(
            //await axios.post("http://127.0.0.1:8000/login/", payload).then(
              res => {
                response = res;
              }
            )
            //response = await axios.post("http://127.0.0.1:8000/login/", payload)
          }
          else{
            return isValid;
          }
          // console.log(isValid)
          // console.log("Now")
          // console.log(response.data)
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
            dispatch(update_school(response.data['info']['school']));
            dispatch(update_role(response.data['info']['role']));
            dispatch(update_profilepic(response.data['info']['profilepic']));
            if(response.data['info']['role'] === "admin"){
              dispatch(signin_admin());
              props.history.push('/');
            }
            else{
              props.history.push("/Loading"); 
            }
            // alert("Your status: "+ {isLogged} +"\nYour token is: " + {token});
            //return <Redirect to="/"/>;
            //get_edu(response.data['token']);
            //get_per(response.data['token']);
            
            // setTimeout(() => {
            //   get_nes(response.data['token']);
            // }, 5000);
            
               
          }
          else {
            alert("Fail to login");
          }
          // console.log(isValid);
          return isValid;
      }
      // const get_nes = async (tk) => {
      //   let payload = {
      //     "token": tk
      //   }
      //   let ok = true;
      //   let i = 0;
      //   while(ok){
      //     let response = {};
      //     //response = await axios.post("http://127.0.0.1:8000/get_nescessary/", payload);
      //     if(i === 300){
      //       i = 0
      //       response = await axios.post("https://spr-system.herokuapp.com/get_nescessary/", payload);
      //       if(response.data['1']['status'] === true) {
      //         ok = false;
      //         dispatch(update_edu(response.data['1']['info']));
      //         dispatch(update_per(response.data['2']));
      //       }
      //       else {
      //         alert("Fail to get data");
      //       }
      //     }
      //     i+=1;
      //   }
      //   return !ok;
      // }

    
        return (
        
    <div>
      {/* <img src={bg}  widht="100vw" height="100vh" className = "signup-bg" > */}
          
      {isLogged ? <h1>You are alredy logged in</h1> :
      <Form onSubmit={handleSubmit}>
      
          <Col md={{ span: 4, offset: 4}} style={{marginTop:'5%'}}>
              <h2 >Sign In</h2>
              <Form.Group controlId="foremail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  type="email" placeholder="Enter email" value={email} onChange={e => setemail(e.target.value)}/>
                <Form.Text style={{color: "red"}} >
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="forpassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setpassword(e.target.value)}/>
                <Form.Text  style={{color: "red"}} >
                </Form.Text>
              </Form.Group>

            

              <Button 
                style={{display:"flex", alignItems:"center", justifyContent:"center"}}
                variant="primary" type="submit" >
                  Submit
              </Button>
              <p >
                Don't have an account? <Link to="/SignUp">Sign Up</Link>
              </p>
          
              <p >
                <Link to="/ForgotPassword">Forgot password?</Link>
              </p>
          </Col>
  
            </Form> }
          </div>
      
        );
      
    }
      
    export default SignIn;





