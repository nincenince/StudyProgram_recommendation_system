import React from 'react';
import './SignUp.css'
import bg from '../images/IMG_0947.JPG'; 
import { Col,Row, Container , Image, Jumbotron, Button, Form} from "react-bootstrap";

  
class SignUp extends React.Component {
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
    // event.preventDefault();
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
        input["username"] = "";
        input["last_name"]= "";
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
  
      if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter your username.";
      }
      if (!input["last_name"]) {
        isValid = false;
        errors["last_name"] = "Please enter your last name.";
      }
  
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
          <Container>
            <Col></Col>
            <Col>
        <form onSubmit={this.handleSubmit}>

          <Form onSubmit={this.handleSubmit}>
            <h1 style={{ fontSize:'2vw'}}>Sign Up</h1>
            <Form.Group >
              <Form.Label style={{ fontSize:'1vw'}}>Username</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="text" name="username"
              placeholder="Enter Username" value={this.state.input.username} onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
              {this.state.errors.username}
              </Form.Text>
            </Form.Group>

            <Form.Group >
              <Form.Label style={{ fontSize:'1vw'}}>Email address</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="email" name="email"
               placeholder="Enter email" value={this.state.input.email} onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
              {this.state.errors.email}
              </Form.Text>
            </Form.Group>


          <Form.Row>   <Form.Label style={{ fontSize:'1vw'}}>Date of Birth</Form.Label></Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="DD" style={{ fontSize:'1vw'}}>
               <option style={{ fontSize:'1vw'}}>DD</option>
               <option style={{ fontSize:'1vw'}}>01</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="MM" style={{ fontSize:'1vw'}}>
               <option style={{ fontSize:'1vw'}}>MM</option>
               <option style={{ fontSize:'1vw'}}>01</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="YY" style={{ fontSize:'1vw'}}>
               <option style={{ fontSize:'1vw'}}>YY</option>
               <option style={{ fontSize:'1vw'}}>01</option>
              </Form.Control>
            </Form.Group>

            </Form.Row> 

            <Form.Group >
              <Form.Label style={{ fontSize:'1vw'}}>Password</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="password" name="password"
               placeholder="Enter password" 
              value={this.state.input.password} onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} className="text-danger">
              {this.state.errors.password}
              </Form.Text>
            </Form.Group>

            <Form.Group >
              <Form.Label style={{ fontSize:'1vw'}}>Confirm Password</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="password" name="confirm_password"
              placeholder="Enter password" 
              value={this.state.input.confirm_password} onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} className="text-danger">
              {this.state.errors.confirm_password}
              </Form.Text>
            </Form.Group>
     

            <Button 
            style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1vw"}}
            variant="primary" type="submit" value="Submit">
              Sign Up
            </Button>
           
           </Form>
           </form>
          </Col>
          <Col></Col>
        </Container>



      </div>
    );
  }
}
  
export default SignUp;

