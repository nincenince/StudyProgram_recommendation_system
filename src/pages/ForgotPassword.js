import React from 'react';
import { Col , Navbar, Button, Form} from "react-bootstrap";
import {Link } from "react-router-dom";
import axios from 'axios';
  
class ForgotPassword extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {'email': ''},
      errors: {},
      response: {},
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
        input["email"] = "";
        this.setState({input:input});
    }
  }
  
  async validate(){
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
      this.setState({
        errors: errors
      });
      if(isValid) {
        let payload = {
          'email': input['email']
        }
        //this.response = await axios.post('http://127.0.0.1:8000/reset_password/', payload);
        this.response = await axios.post('https://spr-system.herokuapp.com/reset_password/', payload);
        if (this.response.data['status'] === true) {
          console.log(this.response.data)
          alert(this.response.data['message'])
          this.props.history.push("/SignIn")
        }
        else {
          alert(this.response.data['message'])
        }
      }
      else {
        return isValid;
      }
      
  }
     
  render() {
    return (

      <div>
           <Navbar collapseOnSelect expand="lg"  >
            <Navbar.Brand href="/"  >
                <i 
                 className = "fas fa-graduation-cap" style={{ fontSize:'4.95vw'}}
                ></i>
                    <p 
                    className= "navbar-p" style={{ fontSize:'1vw'}}
                    >Study Program</p><p 
                    className="navbar-p" style={{ fontSize:'1vw'}}
                    >Recommendation</p>
                    <p 
                    className="navbar-p" style={{ fontSize:'1vw'}}
                    >System
                </p>
                </Navbar.Brand>
            </Navbar>

{/* <Container> */}

        <Col  sm={{ span: 4, offset: 4}}>
          <Form onSubmit={this.handleSubmit}>
            <h1 style={{ fontSize:'2vw', marginTop:'20%'}}>Forgot Your Password?</h1>

            <i className="fa fa-lock" style={{fontSize:'3vw', float:'left', marginRight:'3%'}}></i>
                <p style={{ fontSize:'1vw'}}>Please fill in your email address and we will send you the link to reset your password.</p>


            <Form.Group controlId="forgotpw">
              <Form.Label style={{ fontSize:'1vw', marginTop:'5%'}}>Email address</Form.Label>
              <Form.Control  style={{ fontSize:'1vw', width:'80%'}} type="email" name="email" 
               placeholder="Enter email" value={this.state.input.email} onChange={this.handleChange} />
              <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
              {this.state.errors.email}
              </Form.Text>
            </Form.Group>
     

            <Button 
            style={{marginLeft:'25%',fontSize:"1vw",borderRadius:' 20px', backgroundColor:'coral', border:'coral'}}
            variant="primary" type="submit" value="Submit">
              Reset Password
            </Button>
           
           </Form>
          </Col>


          <Link to="/SignIn">
                    <Button 
                    style={{ fontSize:'1vw',borderRadius:' 20px', backgroundColor:'coral',
                    border:'coral', marginLeft:'15%', marginTop:'8%'}}
                    >
                    Back
                    </Button>
        </Link>

          {/* </Container> */}

      </div>
    );
  }
}
  
export default ForgotPassword;

