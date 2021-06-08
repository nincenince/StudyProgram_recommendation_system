import React from 'react';
// import {Link } from "react-router-dom";
import './AccInfo.css';
import { Col,Row, Form, Button, Navbar} from "react-bootstrap";

import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { update_firstname, update_lastname, update_email, update_sex, update_school, update_profilepic } from '../actions';
import t_school from '../School_list'

function AccInfo (props,defaultImage) {
  //   constructor() {
  //   super();
  //   this.state = {
  //     input: {},
  //     errors: {}
  //   };
     
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }



  let token = useSelector(state => state.token);
  let isLogged = useSelector(state => state.isLogged);
  let dispatch = useDispatch();
  let personal = useSelector(state => state.personal);

  const cloudinary = require('cloudinary/lib/cloudinary').v2;
  const fileSelect = useRef(null);
  const [image, setImage] = useState("https://res.cloudinary.com/hdtjuro73/image/upload/v1617866916/"+personal.profilepic);
  const [initpic, setinitpic] = useState("https://res.cloudinary.com/hdtjuro73/image/upload/v1617866916/"+personal.profilepic);
  const [progress, setProgress] = useState(0);
  const [Publicid, setPublicid]=  useState('');
  const [profilepic, setprofilepic] = useState(personal.profilepic);

  let errors = {};
  useEffect(() => {
    //token = useSelector(state => state.token);
  }, [token, isLogged, personal]);

  const [newemail, setnewemail] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [confirmnewpassword, setconfirmnewpassword] = useState('');
  const [oldemail, setoldemail] = useState('');
  const [oldpassword, setoldpassword] = useState('');
  const [firstname, setfirstname] = useState(personal.firstname);
  const [lastname, setlastname] = useState(personal.lastname);
  const [gender, setgender] = useState(personal.gender);
  // const [age, setage] = useState(personal.age);
  const [school, setschool] = useState(personal.school);
  const [gendererrors, setgendererrors] = useState('');
  // const [ageerrors, setageerrors] = useState('');
  const [schoolerrors, setschoolerrors] = useState('');
  const [emailerrors, setemailerrors] = useState('');
  const [oldpassworderrors, setoldpassworderrors] = useState('');
  const [newpassworderrors, setnewpassworderrors] = useState('');
  const [confirm_new_passworderrors, setconfirm_new_passworderrors] = useState('');
  const [firstnameerrors, setfirstnameerrors] = useState('');
  const [lastnameerrors, setlastnameerrors] = useState('');
  const [codes, setcodes] = useState(0);

  // const handleChange = (event) => {
  //   setnewemail("");
  // }

  const handlePersonalSubmit = (event) => {
    event.preventDefault();
    if(firstname === ''){
      setfirstname(personal.firstname);
    }
    if(lastname === ''){
      setlastname(personal.lastname);
    }
    if(school === null || school === ''){
      setschool(personal.school);
    }
    if(gender === null || gender === ''){
      setgender(personal.sex);
    }
    validate(token,false,null,false,null,null,null,true,firstname,true,lastname,true,school,true,gender,false,null);
  }
  const handleEmailSubmit = (event) => {
    event.preventDefault();
    validate(token,true,newemail,false,null,null,null,false,null,false,null,false,null,false,null,false,null);
  }
  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    validate(token,false,null,true,newpassword,confirmnewpassword,oldpassword,false,null,false,null,false,null,false,null,false,null);
  }
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
    
  //   if(this.validate()){
  //       console.log(this.state);
  
  //       let input = {};
  //       input["email"] = "";
  //       input["password"] = "";
  //       input["confirm_password"] = "";
  //       this.setState({input:input});
  
  //       alert('Demo Form is submited');
  //   }
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
  const handleProfilePicSubmit = () => {
    setcodes(4);

    setPublicid(personal.profilepic);
    // console.log("personal profile pic: "+personal.profilepic);
    // console.log("From submit: "+Publicid)
    deletepic(personal.profilepic);
    
    validate(token,false,null,false,false,null,null,false,null,false,null,false,null,false,null,true,profilepic);
    
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
        setPublicid(response.public_id);
        let a = response.secure_url.split('/');
        setprofilepic(a[7]);
        setImage(response.secure_url);
        
        // console.log("From upload: ");
        // console.log(Publicid);
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
  const deletepic = async (a) => {
    cloudinary.config({ 
      cloud_name: 'hdtjuro73', 
      api_key: '946796654646798', 
      api_secret: '-vPJzL6YrTpc4Ef6KO9XNqKXJ5I' 
    });
    
    // console.log("From delete: "+a);

    await cloudinary.uploader.destroy(a,
      function(err, res) {
        console.log(res);
      }
    );
    setPublicid('');
    setProgress(0);
  }
  const cancelchange = () => {
    if(Publicid === ''){
      setImage(initpic);
    }
    else{
      let a = Publicid;
      deletepic(a);
      setImage(initpic);
    }
    
  }
  const validate = async (tk,ec,ne,pc,np,cnp,op,fc,nf,lc,nl,sc,ns,gc,ng,pfpc,npfp) => {
      let input = {};
      input['email'] = ne;
      input['oldpassword'] = op;
      input['newpassword'] = np;
      input['confirm_new_password'] = cnp;
      input['firstname'] = nf;
      input['lastname'] = nl;
      input['gender'] = ng;
      input['school'] = ns;

      // console.log(input);
      let isValid = true;
      let response = {};
  
      if(codes === 1) {
        // alert("enter 1");
        if (!input["gender"]) {
          isValid = false;
          setgendererrors("Please select your gender.");
        }
        if (!input["school"]) {
          isValid = false;
          setschoolerrors("Please select your school.");
        }
        if (!input["firstname"]) {
          isValid = false;
          setfirstnameerrors("Please enter your firstname.");
        }
        if (!input["lastname"] ) {
          isValid = false;
          setlastnameerrors("Please enter your lastname.");
        }
      }
      if(codes === 2) {
        if (!input["email"]) {
          isValid = false;
          setemailerrors("Please enter your email Address.");
        }
    
        if (typeof input["email"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            setemailerrors("Please enter valid email address.");
          }
        }
      }
      if(codes === 3) {
        if (!input["oldpassword"]) {
          isValid = false;
          setoldpassworderrors("Please enter your old password.");
        }

        if (!input["newpassword"]) {
          isValid = false;
          setnewpassworderrors("Please enter your new password.");
        }

        if (!input["confirm_new_password"]) {
          isValid = false;
          setconfirm_new_passworderrors("Please enter your confirm new password.");
        }
    
        if (typeof input["newpassword"] !== "undefined" && typeof input["confirm_new_password"] !== "undefined") {
            
          if (input["newpassword"] !== input["confirm_new_password"]) {
            isValid = false;
            setconfirm_new_passworderrors("Passwords don't match.");
          }
        } 
      }
 
      // alert(isValid);
      if(isValid) {
        let payload = {
          "token": tk,
          "email_change": ec,
          "new_email": ne,
          "password_change": pc,
          "new_password": np,
          "old_password": op,
          "firstname_change": fc,
          "new_firstname": nf,
          "lastname_change": lc,
          "new_lastname": nl,
          "school_change": sc,
          "new_school": ns,
          "gender_change": gc,
          "new_gender": ng,
          "profilepic_change": pfpc,
          "new_profilepic": npfp
        }
        // console.log(payload);
        response = await axios.post("https://spr-system.herokuapp.com/edit/personal/info/", payload)
        //response = await axios.post("http://127.0.0.1:8000/edit/personal/info/", payload)
      }
      else {
        return isValid;
      }
      if( response.data['status'] === true) {
        // console.log(response.data)
        //console.log(response.data['message']);
        dispatch(update_firstname(response.data['info']['firstname']));
        dispatch(update_lastname(response.data['info']['lastname']));
        dispatch(update_email(response.data['info']['email']));
        dispatch(update_sex(response.data['info']['sex']));
        dispatch(update_school(response.data['info']['school']));
        dispatch(update_profilepic(response.data['info']['profilepic']))
        alert(response.data['message']);
        response = {};
        props.history.push("/AccInfo");
      }
      else{
        alert("Failed to edit your informations");
      }

      
  
      
      
  
      // this.setState({
      //   errors: errors
      // });
      console.log(errors);
      response = {};
      return isValid;
  }
     
    return (
      <div>
          {/* <Navbar collapseOnSelect expand="lg"  >
            <Navbar.Brand href="/"  >
                <i 
                 className = "fas fa-graduation-cap" style={{ fontSize:'4.95vw'}}
                ></i>
                   <h5 style={{color:'coral'}}>website name</h5>
                </Navbar.Brand>
            </Navbar> */}

        
            <Col md={{ span: 4, offset: 4}}>
              
              {/* <Row>  */}
                  <h2 style={{marginTop:'10%'}}>User Information</h2>
              {/* </Row> */}
              <Form onSubmit={handlePersonalSubmit}>
                <Form.Group controlId="forpfp">
                  <Form.Label >Profile image</Form.Label>
                </Form.Group>
              </Form>

              <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img className="object-contain rounded-lg" src={image.replace("upload/", "upload/w_250,c_fill,ar_1:1,g_auto,r_max,q_auto,f_auto/")}/>
              </div>
              <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <span className="text-gray-700">Upload status: {progress}%</span>
              </div>
              
              <div className="bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg" >
                <form className="flex justify-center items-center h-full">
                  <div className="text-center justify-center items-center">
                      <Button
                        style={{display:"flex", alignItems:"center", justifyContent:"center"}}
                        variant="warning"
                        className="bg-blue-600 hover:bg-blue-800 text-white font-bold rounded block m-auto"
                        onClick={handleImageUpload}
                        type="button"
                      >
                        Browse
                      </Button>
                      <hr></hr>
                      
                      <Button  className="acc-done-button" onClick={() => handleProfilePicSubmit()}>
                          Save change
                      </Button>
                      <span>&nbsp;</span>
                      <Button  className="acc-done-button" style={{backgroundColor: 'grey', border: 'black'}} onClick={() => cancelchange()}>
                          Cancel
                      </Button>
                      <br></br>
                    </div>
                    <br></br><br></br>
                
                  
                  <input
                    ref={fileSelect}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => handleFiles(e.target.files)}
                  />
                </form>
              </div>

              <Form onSubmit={handlePersonalSubmit}>
                
                <Form.Group controlId="forfn">
                  <Form.Label >Firstname</Form.Label>
                  {/* <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter First Name"  value={firstname} onChange={e => setfirstname(e.target.value)} /> */}
                  <Form.Control  type="text" placeholder={personal.firstname}  value={firstname} onChange={e => setfirstname(e.target.value)} />
                  <Form.Text style={{color: "red"}} >
                    {firstnameerrors}
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="forln">
                  <Form.Label >Lastname</Form.Label>
                  <Form.Control  type="text" placeholder={personal.lastname} value={lastname} onChange={e => setlastname(e.target.value)} />
                  <Form.Text style={{color: "red"}} >
                    {lastnameerrors}
                  </Form.Text>
                </Form.Group>


              <Form.Label >Gender</Form.Label>
                <Form.Group  controlId="forgd">
                  <Form.Control as="select" defaultValue={personal.sex} value={gender} onChange={e => setgender(e.target.value)} >
                    <option >{null}</option>
                    <option >Female</option>
                    <option >Male</option>
                    <option >Other</option>
                  </Form.Control>
                  <Form.Text style={{color: "red", fontSize: "0.75vw"}} >
                    {gendererrors}
                  </Form.Text>
                </Form.Group>

                <Form.Label >School</Form.Label>
                <Form.Group  controlId="forsc">
                  <Form.Control as="select" defaultValue={personal.school} value={school} onChange={e => setschool(e.target.value)}>
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

                {/* <Link> */}
                {/* <Link to="/RecProgram"> */}
                <Button type="Submit" className="acc-done-button" onClick={() => setcodes(1)}>
                    Save change
                </Button>
                {/* </Link> */}

              </Form>

              <Row><br/><br/></Row>
              {/* <Form onSubmit={handleSubmit}>

                <h1 style={{ fontSize:'2vw'}}>Account Information</h1>  

                <Form.Group controlId="fornun">
                <Form.Row style={{ fontSize:'2vw'}}>CHANGE USERNAME</Form.Row>
                  <Form.Label style={{ fontSize:'1vw'}}>New Username</Form.Label>
                  <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter New Username"  onChange={handleChange} />
                </Form.Group>

                <Button 
                style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1vw"}}
                className="update-username-button"
                type="submit"
                >
                  Update Username
                </Button>
                <br/>
              </Form> */}
              <Form onSubmit={handleEmailSubmit}>
                <Form.Group controlId="foroun">
                <Form.Row >CHANGE EMAIL</Form.Row>
                  <Form.Label >Current Email</Form.Label>
                  <Form.Control  type="text" placeholder="Enter Current Email"  value={oldemail} onChange={e => setoldemail(e.target.value)} />
                  <Form.Text style={{color: "red"}} >
                  {emailerrors}
                  </Form.Text>
                  <Form.Label >New Email</Form.Label>
                  <Form.Control type="text" placeholder="Enter New Email"  value={newemail} onChange={e => setnewemail(e.target.value)} />
                  <Form.Text style={{color: "red"}} >
                  {emailerrors}
                  </Form.Text>
                </Form.Group>

                <Button style={{display:"flex", alignItems:"center", justifyContent:"center"}} type="submit"className="update-email-button" onClick={() => setcodes(2)}>
                  Save change
                </Button>
                <br/>
              </Form>

              <Form onSubmit={handlePasswordSubmit}>
                <Form.Group controlId="forpw">
                <Form.Row >CHANGE PASSWORD</Form.Row>
                  <Form.Label >Current Password</Form.Label>
                  <Form.Control  type="password" placeholder="Enter Current Password"  value={oldpassword} onChange={e => setoldpassword(e.target.value)} />
                  <Form.Text style={{color: "red"}} >
                  {oldpassworderrors}
                  </Form.Text>
                  <Form.Label >New Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter New Password"  value={newpassword} onChange={e => setnewpassword(e.target.value)} />
                  <Form.Text style={{color: "red"}} >
                  {newpassworderrors}
                  </Form.Text>
                  <Form.Label >Confirm New Password</Form.Label>
                  <Form.Control  type="password" placeholder="Enter New Password"  value={confirmnewpassword} onChange={e => setconfirmnewpassword(e.target.value)} />
                  <Form.Text style={{color: "red"}} >
                  {confirm_new_passworderrors}
                  </Form.Text>
                </Form.Group>
                <Button style={{display:"flex", alignItems:"center", justifyContent:"center"}} className="update-pas-button"type="submit" onClick={() => setcodes(3)}>
                  Save change
                </Button>
              </Form>

           </Col>

      </div>
    );
}
  
export default AccInfo;

