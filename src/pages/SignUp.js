import React from 'react';
import './SignUp.css'
// import {Link} from 'react-router-dom';
import bg from './IMG_0947.JPG'; 

  
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
        input["name"] = "";
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
  
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
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
      <img src={bg} alt="Logo" widht="1440" className = "signup-bg" />
      <div className="signup-container">
        
        <h1 className="signup-h1">Sign Up</h1>

        <form onSubmit={this.handleSubmit}>
  
        <div class="form-group">
            <label for="name" className="name-label">Name:</label>
            <label for="last name" className="last-name-label">Last Name:</label>
        </div>


          <div>
          <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange = {this.handleChange}
              class="form-control name-button name-input" 
              placeholder="Enter name" 
              id="name" />
              <div className="text-danger name-error">{this.state.errors.name}</div>

              <input 
              type="text" 
              name="last_name" 
              value={this.state.input.name}
              onChange = {this.handleChange}
              class="form-control last-name-input" 
              placeholder="Enter last name" 
              id="last_name" />
              <div className="text-danger last-name-error">{this.state.errors.last_name}</div>
          </div>

 
  
          <div class="form-group ">
            <label for="email" className="email-label">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control email-input" 
              placeholder="Enter email " 
              id="email" />
  
              <div className="text-danger email-error">{this.state.errors.email}</div>
          </div>


          <div class="form-group">
            <label for="password" className="password-label">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control password-input" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger password-error">{this.state.errors.password}</div>
          </div>
  
          <div class="form-group">
            <label for="password" className = "password-confirm-label">Confirm Password:</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control password-confirm-input" 
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div className="text-danger password-confirm-error">{this.state.errors.confirm_password}</div>
          </div>
              
          <input type="submit" value="Submit" class="btn btn-success submit-button" />

          

        </form>
      </div>
      </div>
    );
  }
}
  
export default SignUp;