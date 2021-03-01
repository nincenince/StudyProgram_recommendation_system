import React from 'react';
import axios from 'axios';
import './SignUp.css'
import bg from '../images/IMG_0947.JPG'; 
import { Col,Row, Container , Image, Jumbotron, Button, Form} from "react-bootstrap";


  
class SignUp extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      response: {},
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
        input["username"] = "test_user";
        input["last_name"]= "test_user";
        input["gender"]="Male";
        input["age"]=32;
        input["email"] = " ";
        input["password"] = " ";
        input["confirm_password"] = " ";
        this.setState({input:input});
 
    }
  }
  
  async validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["firstname"]) {
        console.log('1');
        isValid = false;
        errors["username"] = "Please enter your firstname.";
      }
      if (!input["lastname"]) {
        console.log('2');
        isValid = false;
        errors["lastname"] = "Please enter your lastname.";
      }
  
      if (!input["email"]) {
        console.log('3');
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          console.log('4');
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
      
      if (!input["gender"]) {
        console.log('5');
        isValid = false;
        errors["gender"] = "Please select your gender.";
      }
      if (input["age"] == null) {
        console.log('6');
        isValid = false;
        errors["age"] = "Please enter your age.";
      }

      if (!input["password"]) {
        console.log('7');
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        console.log('8');
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] !== input["confirm_password"]) {
          console.log('9');
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors
      });

      if (isValid) {
        let payload = {
          'email' : input['email'],
          'password' : input['password'],
          'age' : input['age'],
          'sex' : input['gender'],
          'firstname' : input['firstname'],
          'lastname' : input['lastname']
        }
        console.log(payload);
        this.response = await axios.post("https://spr-system.herokuapp.com/signup/", payload);
        //this.response = await axios.post("http://127.0.0.1:8000/signup/", payload);
      }
      else {
        return isValid;
      }
      if (this.response.data['status'] === true) {
        console.log(this.response.data)
        alert(this.response.data['message'])
        this.props.history.push("/SignIn")
      }
      else {
        alert(this.response.data['message'])
      }
      return isValid;

  }
     
  render() {
    return (
      <div>
          <Container>
            <Col></Col>
            <Col>

          <Form onSubmit={this.handleSubmit}>
            <h1 style={{ fontSize:'2vw'}}>Sign Up</h1>
            <Form.Group controlId="formfirstname">
              <Form.Label style={{ fontSize:'1vw'}}>Firstname</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="text" name="firstname"
              placeholder="Enter Firstname" value={this.state.input.firstname} onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
              {this.state.errors.firstname}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formlastname">
              <Form.Label style={{ fontSize:'1vw'}}>Lastname</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="text" name="lastname"
              placeholder="Enter Lastname" value={this.state.input.lastname} onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
              {this.state.errors.lastname}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formemail">
              <Form.Label style={{ fontSize:'1vw'}}>Email address</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="email" name="email"
              placeholder="Enter email" value={this.state.input.email} onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
              {this.state.errors.email}
              </Form.Text>
            </Form.Group>


            <Form.Group controlId="formage">
              <Form.Label style={{ fontSize:'1vw'}}>Age</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="number" name="age" value={this.state.input.age} onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
              {this.state.errors.age}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formgender">
              <Form.Label style={{ fontSize:'1vw'}}>Gender</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} as="select" name="gender" value={this.state.input.gender} onChange={this.handleChange} >
                <option style={{ fontSize:'1vw'}}>{null}</option>
                    <option style={{ fontSize:'1vw'}}>Female</option>
                    <option style={{ fontSize:'1vw'}}>Male</option>
                    <option style={{ fontSize:'1vw'}}>Other</option>
              </Form.Control>
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
              {this.state.errors.gender}
              </Form.Text>
            </Form.Group>

            <br></br>
            <Form.Group controlId="formpassword">
              <Form.Label style={{ fontSize:'1vw'}}>Password</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="password" name="password"
              placeholder="Enter password" 
              value={this.state.input.password} onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} className="text-danger">
              {this.state.errors.password}
              </Form.Text>
            </Form.Group>
            <br></br>
            <Form.Group controlId="formconfirmpassword">
              <Form.Label style={{ fontSize:'1vw'}}>Confirm Password</Form.Label>
              <Form.Control style={{ fontSize:'1vw'}} type="password" name="confirm_password"
              placeholder="Enter password" 
              value={this.state.input.confirm_password} onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} className="text-danger">
              {this.state.errors.confirm_password}
              </Form.Text>
            </Form.Group>
            <br></br>

            <Button 
            style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1vw"}}
            variant="primary" type="submit" value="Submit">
              Sign Up
            </Button>
          
          </Form>
          </Col>
          <Col></Col>
        </Container>



      </div>
    );
  }
}
  
export default SignUp;

