import React from 'react';
import axios from 'axios';
import './SignUp.css'
// import bg from '../images/IMG_0947.JPG'; 
import { Col , Button, Form} from "react-bootstrap";
import { useState,  useRef } from 'react';
// import { useSelector, useDispatch} from 'react-redux';
import t_school from '../School_list'

function SignUp (props, {defaultImage}) {
  // var cloudinary = require('cloudinary');
  const cloudinary = require('cloudinary/lib/cloudinary').v2;
  const fileSelect = useRef(null);
  const [image, setImage] = useState(defaultImage);
  const [progress, setProgress] = useState(0);
  const [Publicid, setPublicid]=  useState('');
  const [profilepic, setprofilepic] = useState('default_user_img_nzynlg.png');

  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [gender, setgender] = useState('');
  const [school, setschool] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  
  const [firstnameerrors, setfirstnameerrors] = useState('');
  const [lastnameerrors, setlastnameerrors] = useState('');
  const [gendererrors, setgendererrors] = useState('');
  const [schoolerrors, setschoolerrors] = useState('');
  const [emailerrors, setemailerrors] = useState('');
  const [passworderrors, setpassworderrors] = useState('');
  const [confirmpassworderrors, setconfirmpassworderrors] = useState('');


  //   constructor() {
  //   super();
  //   this.state = {
  //     input: {},
  //     errors: {},
  //     response: {},
  //   };
     
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
    
  // const handleChange = (event) => {
  //   let input = this.state.input;
  //   input[event.target.name] = event.target.value;
  
  //   this.setState({
  //     input
  //   });
  // }
  async function handleImageUpload() {
    if (fileSelect) {
      fileSelect.current.click();
    }
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      // console.log(files[i]);
      uploadFile(files[i]);
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    validate(email, password, confirmpassword, firstname, lastname, gender, school);
    
  }
  
  function uploadFile(file) {
    const url = `https://api.cloudinary.com/v1_1/hdtjuro73/image/upload/`;
    // https://res.cloudinary.com/demo/image/upload/w_70,h_53,c_scale/turtles.jpg
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", (e) => {
      setProgress(Math.round((e.loaded * 100.0) / e.total));
      // console.log(Math.round((e.loaded * 100.0) / e.total));
    });

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);

        let a = response.secure_url.split('/');
        setprofilepic(a[7]);
        setImage(response.secure_url);
        setPublicid(response.public_id);
        // console.log(response);
      }
    };

    fd.append(
      "upload_preset",
      'rkoa3ql1'
    );
    fd.append(
      "options",
      {width: 150, height: 150, gravity: "face", crop: "thumb"}
    )
    // {width: 150, height: 150, gravity: "face", crop: "thumb"}
    // cloudinary.image(file, {secure: true, transformation: [
    //   {width: 150, height: 150, gravity: "face", crop: "thumb"},
    //   {radius: 20},
    //   {effect: "sepia"},
    //   {overlay: "cloudinary_icon_blue", gravity: "south_east", x: 5, y: 5, width: 50, opacity: 60, effect: "brightness:200"},
    //   {angle: 10}
    //   ]})
    // fd.append("tags", "browser_upload");
    fd.append('tags', 'User_profile_pics');
    fd.append("file", file);
    xhr.send(fd);
  }
  const deletepic = async () => {
    cloudinary.config({ 
      cloud_name: 'hdtjuro73', 
      api_key: '946796654646798', 
      api_secret: '-vPJzL6YrTpc4Ef6KO9XNqKXJ5I' 
    });
    
    // console.log(Publicid);

    await cloudinary.uploader.destroy(Publicid,
      function(err, res) {
        console.log(res);
      }
    );
    setImage(defaultImage);
    setprofilepic('default_user_img_nzynlg.png');
    setProgress(0);
  }

  const validate = async (em, pw, cpw, fn, ln, gd, sc) => {
      // let input = this.state.input;
      // let errors = {};
      let response = {};
      let input = {};
      input['email'] = em;
      input['password'] = pw;
      input['confirm_password'] = cpw;
      input['firstname'] = fn;
      input['lastname'] = ln;
      input['gender'] = gd;
      input['school'] = sc;
      let isValid = true;
  
      if (!input["firstname"]) {
        // console.log('1');
        isValid = false;
        // errors["username"] = "Please enter your firstname.";
        setfirstnameerrors("Please enter your firstname.");
      }
      if (!input["lastname"]) {
        // console.log('2');
        isValid = false;
        // errors["lastname"] = "Please enter your lastname.";
        setlastnameerrors("Please enter your lastname.");
      }
  
      if (!input["email"]) {
        // console.log('3');
        isValid = false;
        // errors["email"] = "Please enter your email Address.";
        setemailerrors("Please enter your email Address.");
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          // console.log('4');
          isValid = false;
          // errors["email"] = "Please enter valid email address.";
          setemailerrors("Please enter valid email address.");
        }
      }
      
      if (!input["gender"]) {
        // console.log('5');
        isValid = false;
        // errors["gender"] = "Please select your gender.";
        setgendererrors("Please select your gender.");
      }
      if (!input["school"]) {
        // console.log('6');
        isValid = false;
        // errors["school"] = "Please enter your school.";
        setschoolerrors("Please select your school.");
      }

      if (!input["password"]) {
        // console.log('7');
        isValid = false;
        // errors["password"] = "Please enter your password.";
        setpassworderrors("Please enter your new password.");

      }
  
      if (!input["confirm_password"]) {
        // console.log('8');
        isValid = false;
        // errors["confirm_password"] = "Please enter your confirm password.";
        setconfirmpassworderrors("Please enter your new password.");

      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] !== input["confirm_password"]) {
          // console.log('9');
          isValid = false;
          // errors["password"] = "Passwords don't match.";
          setconfirmpassworderrors("Passwords don't match.");
          setpassworderrors("Passwords don't match.");

        }
      } 

      if (isValid) {
         
        let payload = {
          'email' : input['email'],
          'password' : input['password'],
          'age' : 0,
          'sex' : input['gender'],
          'firstname' : input['firstname'],
          'lastname' : input['lastname'],
          'school' : input['school'],
          'role' : 'user',
          'profilepic': profilepic
        }
        // console.log(payload);
        response = await axios.post("https://spr-system.herokuapp.com/signup/", payload);
        //response = await axios.post("http://127.0.0.1:8000/signup/", payload);
      }
      else {
        return isValid;
      }
      if (response.data['status'] === true) {
        // console.log(response.data)
        alert(response.data['message'])
        props.history.push("/SignIn")
      }
      else {
        alert(response.data['message'])
      }
      return isValid;

  }
    return (
      <>
      <div >
       
            <Col md={{ span: 4, offset: 4}} style={{marginTop:'5%'}}>

          <Form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <Form.Group controlId="formfirstname">
              <Form.Label >Firstname</Form.Label>
              <Form.Control  type="text" name="firstname"
              placeholder="Enter Firstname" value={firstname} onChange={e => setfirstname(e.target.value)} />
              <Form.Text style={{color: "red"}} >
                {firstnameerrors}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formlastname">
              <Form.Label >Lastname</Form.Label>
              <Form.Control type="text" name="lastname"
              placeholder="Enter Lastname" value={lastname} onChange={e => setlastname(e.target.value)} />
              <Form.Text style={{color: "red"}} >
                {lastnameerrors}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formemail">
              <Form.Label>Email address</Form.Label>
              <Form.Control  type="email" name="email"
              placeholder="Enter email" value={email} onChange={e => setemail(e.target.value)} />
              <Form.Text style={{color: "red"}} >
                {emailerrors}
              </Form.Text>
            </Form.Group>

            
            <Form.Group controlId="formschool">
              <Form.Label >School</Form.Label>
              <Form.Control  as="select" name="school" value={school} onChange={e => setschool(e.target.value)} >
                <option >{null}</option>
                {t_school.school.map((ava) => {
                  return (
                    <option>{ava.name}</option>  
                  );})
                }
              </Form.Control>
              <Form.Text style={{color: "red"}} >
                {schoolerrors}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formgender">
              <Form.Label >Gender</Form.Label>
              <Form.Control  as="select" name="gender" value={gender} onChange={e => setgender(e.target.value)} >
                <option >{null}</option>
                    <option >Female</option>
                    <option >Male</option>
                    <option>Other</option>
              </Form.Control>
              <Form.Text style={{color: "red"}} >
                {gendererrors}
              </Form.Text>
            </Form.Group>

            <br></br>
            <Form.Group controlId="formpassword">
              <Form.Label >Password</Form.Label>
              <Form.Control  type="password" name="password"
              placeholder="Enter password" 
              value={password} onChange={e => setpassword(e.target.value)} />
              <Form.Text style={{color: "red"}} className="text-danger">
                {passworderrors}
              </Form.Text>
            </Form.Group>
            <br></br>
            <Form.Group controlId="formconfirmpassword">
              <Form.Label >Confirm Password</Form.Label>
              <Form.Control  type="password" name="confirm_password"
              placeholder="Enter password" 
              value={confirmpassword} onChange={e => setconfirmpassword(e.target.value)} />
              <Form.Text style={{color: "red"}} className="text-danger">
                {confirmpassworderrors}
              </Form.Text>
            </Form.Group>
            <br></br>
            <Form.Group controlId="forprofilepic">
              <Form.Label >Upload your profile picture (OPTIONAL)</Form.Label>
            </Form.Group>
            {image ? (<div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <img className="object-contain rounded-lg" src={image.replace("upload/", "upload/w_150,h_150,c_scale,q_auto,f_auto/")}/>
              <Button style={{backgroundColor:'transparent', border:'transparent',display:"flex", alignItems:"center", justifyContent:"center"}} onClick={() => deletepic()}>
                <i className="fas fa-trash" style={{color:'red'}}></i>
              </Button>
            </div>)
            :<div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <img className="object-contain rounded-lg" src="https://res.cloudinary.com/hdtjuro73/image/upload/w_150,h_150,c_scale,q_auto,f_auto/v1617779170/default_user_img_nzynlg.png"/>
            </div>}
            <hr></hr>
            <div className="bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg" >
              <form className="flex justify-center items-center h-full">
                {progress === 0 ? (<div className="text-center justify-center items-center">
                    <Button
                      style={{display:"flex", alignItems:"center", justifyContent:"center"}}
                      variant="warning"
                      className="bg-blue-600 hover:bg-blue-800 text-white font-bold rounded block m-auto"
                      onClick={handleImageUpload}
                      type="button"
                    >
                      Browse
                    </Button>
                  </div>) : (
                  <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <span className="text-gray-700">Upload status: {progress}%</span>
                  </div>
                )}
                
                <input
                  ref={fileSelect}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleFiles(e.target.files)}
                />
              </form>
            </div>

            <br></br>
            <br></br>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginBottom: '10%'}}>
              <Button 
              style={{display:"flex", alignItems:"center", justifyContent:"center"}}
              variant="primary" type="submit" value="Submit">
                Sign Up
              </Button>
            </div>
          </Form>
          
          
          </Col>
    
        
                  

      </div>
    </>
    );
}
  
export default SignUp;

