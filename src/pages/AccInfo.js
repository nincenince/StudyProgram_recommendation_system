import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './AccInfo.css';
import { Col,Row, Container , Image, Form, Button} from "react-bootstrap";


class AccInfo extends React.Component {
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
        console.log(this.state);
  
        let input = {};
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submited');
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
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] !== input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
                <h1 className = "edu-navbar-logo">
                <i className = "fas fa-graduation-cap edu-cap" style={{ fontSize:'5vw'}}></i>
                    <p className= "edu-navbar-p" style={{ fontSize:'1.25vw'}}>Study Program</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>Recommendation</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>System
                </p></h1>
          <Container>
            <Col xs={3}></Col>
            <Col xs={5}>
            {/* <Row>  */}
                <h1 style={{ fontSize:'2vw'}}>User Information</h1>
            {/* </Row> */}
          
          <Form onSubmit={this.handleSubmit}>
            
            <Form.Group >
              <Form.Label style={{ fontSize:'1vw'}}>First Name</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter First Name"  onChange={this.handleChange} />
            </Form.Group>

            <Form.Group >
              <Form.Label style={{ fontSize:'1vw'}}>Last Name</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="email" placeholder="Enter Last Name"  onChange={this.handleChange} />
            </Form.Group>


          <Form.Label style={{ fontSize:'1vw'}}>Gender</Form.Label>
            <Form.Group  >
              <Form.Control as="select" defaultValue="" style={{ fontSize:'1vw'}}>
               <option style={{ fontSize:'1vw'}}>F</option>
               <option style={{ fontSize:'1vw'}}>M</option>
              </Form.Control>
            </Form.Group>

            <Form.Label style={{ fontSize:'1vw'}}>Nationality</Form.Label>
            <Form.Group  >
              <Form.Control as="select" defaultValue="" style={{ fontSize:'1vw'}}>
               <option style={{ fontSize:'1vw'}}>Thai</option>
               <option style={{ fontSize:'1vw'}}></option>
              </Form.Control>
            </Form.Group>


            <Link to="/RecProgram">
            <Button 
            className="acc-done-button" style={{ fontSize:'1vw'}}
            >
                Done
            </Button>
            </Link>



        <Row><br/><br/></Row>


            <h1 style={{ fontSize:'2vw'}}>Account Information</h1>  

            <Form.Group >
            <Form.Row style={{ fontSize:'2vw'}}>CHANGE USERNAME</Form.Row>
              <Form.Label style={{ fontSize:'1vw'}}>New Username</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter New Username"  onChange={this.handleChange} />
            </Form.Group>

            <Button 
            style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1vw"}}
            className="update-username-button"
            type="submit"
            >
              Update Username
            </Button>
            <br/>

            <Form.Group >
            <Form.Row style={{ fontSize:'2vw'}}>CHANGE EMAIL</Form.Row>
              <Form.Label style={{ fontSize:'1vw'}}>Current Email</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter Current Email"  onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
              {this.state.errors.email}
              </Form.Text>
              <Form.Label style={{ fontSize:'1vw'}}>New Email</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter New Email"  onChange={this.handleChange} />
           
            </Form.Group>

            <Button 
            style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1vw"}}
            type="submit"
            className="update-email-button">
              Update Email
            </Button>
            <br/>

            <Form.Group >
            <Form.Row style={{ fontSize:'2vw'}}>CHANGE PASSWORD</Form.Row>
              <Form.Label style={{ fontSize:'1vw'}}>Current Password</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter Current Email"  onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
              {this.state.errors.password}
              </Form.Text>
              <Form.Label style={{ fontSize:'1vw'}}>New Password</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter New Email"  onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
              {this.state.errors.confirm_password}
              </Form.Text>
            </Form.Group>

            <Button 
            style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1vw"}}
         
            className="update-pas-button"
             type="submit">
              Update Password
            </Button>


        

           </Form>

    

           </Col>
           <Col>
         
            </Col>
          </Container>



      </div>
    );
  }
}
  
export default AccInfo;

