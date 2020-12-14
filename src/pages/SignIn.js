import React from 'react';
import './SignIn.css'
import {Link} from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import ReactFacebookLogin from 'react-facebook-login';
// import bg from '../images/plain.png'; 
import bg from '../images/IMG_0947.JPG'; 


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
      <img src={bg} alt="Logo" widht="1440" className = "signup-bg" />
          <div className="signin-container">
            <h1 className="signin-h1">Sign In</h1>
    
            <form onSubmit={this.handleSubmit}>
     
      
              <div class="form-group ">
                <label for="email" className="signin-email-label">Email Address:</label>
                <input 
                  type="text" 
                  name="email" 
                  value={this.state.input.email}
                  onChange={this.handleChange}
                  class="form-control signin-email-input" 
                  placeholder="Enter email " 
                  id="email" />
      
                  <div className="text-danger signin-email-error">{this.state.errors.email}</div>
              </div>
    
    
              <div class="form-group">
                <label for="password" className="signin-password-label">Password:</label>
                <input 
                  type="password" 
                  name="password" 
                  value={this.state.input.password}
                  onChange={this.handleChange}
                  class="form-control signin-password-input" 
                  placeholder="Enter password" 
                  id="password" />
      
                  <div className="text-danger signin-password-error">{this.state.errors.password}</div>
              </div>
                  
              <input type="submit" value="Sign In" class="btn btn-success signin-submit-button" />

              <span className='signin-to-signup'>
                Don't have an account? <Link to="/SignUp">Sign Up</Link>
          </span>

            </form>
          </div>
            <div className="google-signin">
          <GoogleLogin
          clientId ={clientId}
        //   render={renderProps => (
        //     <button onClick={renderProps.onClick} style={customStyle}>Login with Google account</button>
        //   )}
          
          buttonText="login with google account"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        
          isSignedIn={true}
          />
          </div>

          <div className="facebook-signin">
              <ReactFacebookLogin
              appId="257174585672540"
              // autoLoad={true}
              fields="name, email,picture"
              icon="fa-facebook"
             
            //   scope="public_profile, user_friends, user_actions,email,user_birthday"
              callback={responseFacebook}
              
              />
              
          </div>
          
          </div>
      
        );
      }
    }
      
    export default SignIn;





