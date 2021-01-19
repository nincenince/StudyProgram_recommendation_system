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


const clientId = '304351361611-crq2n9aucmhcee8bf7pnujvmvfg5pe1v.apps.googleusercontent.com'
const responseGoogle = (response) => {
    console.log(response);
    console.log("google")
  }
const responseFacebook=(response)=>{
    console.log(response);
}


class SignIn extends React.Component {
        constructor() {
        super();
        this.state = {
          input: {},
          errors: {}
        };
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
         
      handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }
         
      handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
      
            let input = {};
            input["email"] = "";
            input["password"] = "";
            this.setState({input:input});
      

        }
      }

      
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;
      

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

      
          this.setState({
            errors: errors
          });
      
          return isValid;
      }

 

      onFailure = (res) =>{
        console.log('[login failed] res:' , res);
    }

         
      render() {
    
        return (
    <div>
      {/* <img src={bg}  widht="100vw" height="100vh" className = "signup-bg" > */}
          
    
      <Form onSubmit={this.handleSubmit}>
      
        <Container>
          <Col></Col>
          <Col>
            <Form>
            <h1 style={{ fontSize:'2vw'}}>Sign In</h1>
            <Form.Group >
              <Form.Label style={{ fontSize:'1vw'}}>Email address</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="email" placeholder="Enter email" value={this.state.input.email} onChange={this.handleChange}/>
              <Form.Text style={{color: "red", fontSize: "12px"}} >
              {this.state.errors.email}
              </Form.Text>
            </Form.Group>

            <Form.Group >
              <Form.Label style={{ fontSize:'1vw'}}>Password</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="password" placeholder="Enter password" value={this.state.input.password} onChange={this.handleChange}/>
              <Form.Text  style={{color: "red", fontSize: "12px"}} >
              {this.state.errors.password}
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

    
                      
  

                
            </Form>
           {/* </img> */}
          
          </div>
      
        );
      }
    }
      
    export default SignIn;





