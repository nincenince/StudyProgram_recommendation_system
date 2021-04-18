import React from 'react';
import './Feedbacks.css'
import {Button, Navbar, Form} from "react-bootstrap";
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const Admin_prog = (props, {defaultImage}) => {
  const datas = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
      },
      {
        label: 'Faculty',
        field: 'faculty',
        sort: 'asc',
      },
      {
        label: 'Department',
        field: 'department',
        sort: 'asc',
      },
      {
        label: 'Program',
        field: 'program',
        sort: 'asc',
      },
      {
        label: '',
        field: 'button',
        sort: 'asc',
      }
    ],
    rows: [
      {
        id: '1',
        program: 'Program',
        faculty: "Faculty",
        department: "Department",
        button:<Button style={{backgroundColor:'transparent', border:'transparent'}} onClick={() => out("dummy")}>
        <i className="fas fa-trash" style={{color:'red'}}></i>
    </Button>
      }
    ]
  };
  const [data, setdata] = useState(datas)
  const [found, setfound] = useState(true);
  let response = {};

  const [faculty, setfaculty] = useState('');
  const [facultyerrors, setfacultyerrors] = useState('');
  const [department, setdepartment] = useState('');
  const [departmenterrors, setdepartmenterrors] = useState('');
  const [program, setprogram] = useState('');
  const [programerrors, setprogramerrors] = useState('');
  const [link, setlink] = useState('');
  const [linkerrors, setlinkerrors] = useState('');

  const cloudinary = require('cloudinary/lib/cloudinary').v2;
  const fileSelect = useRef(null);
  const [image, setImage] = useState(defaultImage);
  const [progress, setProgress] = useState(0);
  const [Publicid, setPublicid]=  useState('');
  const [coursepic, setcoursepic] = useState('default_user_img_nzynlg.png');

  // useEffect(async () => {
  //   await axios.get('127.0.0.1:8000/get_all_user').then(
  //     res => {
  //       console.log(res);
  //     }
  //   )
  // })
	useEffect(() => {
    async function get_data () {
      //const res = await axios.get('https://spr-system.herokuapp.com/get_course_admin/');
      const res = await axios.get('http://127.0.0.1:8000/get_course_admin/');
      let response = res.data['result'];
      //console.log(response);
      let inside_data = [];
      for(let i = 0; i<response.length; i++){
        let a = {
          id: i+1,
          program: response[i]['program'],
          faculty: response[i]['faculty'],
          department: response[i]['department'],
          button:<Button style={{backgroundColor:'transparent', border:'transparent'}} onClick={() => out(response[i]['id'])}>
          <i className="fas fa-trash" style={{color:'red'}}></i>
      </Button>
        };
      inside_data.push(a);
      }
      const temp = {
        columns: [
          {
            label: 'ID',
            field: 'id',
            sort: 'asc',
          },
          {
            label: 'Faculty',
            field: 'faculty',
            sort: 'asc',
          },
          {
            label: 'Department',
            field: 'department',
            sort: 'asc',
          },
          {
            label: 'Program',
            field: 'program',
            sort: 'asc',
          },
          {
            label: '',
            field: 'button',
            sort: 'asc',
          }
        ],
        rows: inside_data
      };
      setdata(temp);
      setfound(true)
    }
    get_data();
    // console.log(response);
  },[found, response])

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const out = async (value) => {
    let response = {};
    let payload = {
      "id" : value
    };
    //response = await axios.post('https://spr-system.herokuapp.com/delete_course/', payload);
    response = await axios.post('http://127.0.0.1:8000/delete_course/', payload);
    //console.log(value);
    if(response.data['status'] === true){
      window.location.reload(false);
    }
    else{
      alert(response.data['message']);
    }
    
  }
  async function handleImageUpload() {
    if (fileSelect) {
      fileSelect.current.click();
    }
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      uploadFile(files[i]);
    }
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
      console.log(Math.round((e.loaded * 100.0) / e.total));
    });

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);

        let a = response.secure_url.split('/');
        setcoursepic(a[7]);
        setImage(response.secure_url);
        setPublicid(response.public_id);
        console.log(response);
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
    
    console.log(Publicid);

    await cloudinary.uploader.destroy(Publicid,
      function(err, res) {
        console.log(res);
      }
    );
    setImage(defaultImage);
    setcoursepic('default_user_img_nzynlg.png');
    setProgress(0);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    validate(faculty, department, program, link);
    
  }
  const validate = async (ft, dp, pg, lk) => {
    // let input = this.state.input;
    // let errors = {};
    
    let input = {};
    input['faculty'] = ft;
    input['department'] = dp;
    input['program'] = pg;
    input['link'] = lk;

    let isValid = true;

    if (!input["department"]) {
      console.log('1');
      isValid = false;
      setdepartmenterrors("Please enter department.");
    }
    if (!input["program"]) {
      console.log('2');
      isValid = false;
      setprogramerrors("Please enter program.");
    }
    if (!input["link"]) {
      console.log('3');
      isValid = false;
      setlinkerrors("Please enter link.");
    }
    if (!input["faculty"]) {
      console.log('4');
      isValid = false;
      setfacultyerrors("Please select faculty.");
    }

    if (isValid) {
       
      let payload = {
        "faculty": input['faculty'],
        "department": input['department'],
        "program_name": input['program'],
        "link": input['link'],
        'coursepic': coursepic
      }
      console.log(payload);
      //response = await axios.post("https://spr-system.herokuapp.com/add_course/", payload);
      response = await axios.post("http://127.0.0.1:8000/add_course/", payload);
    }
    else {
      return isValid;
    }
    if (response.data['status'] === true) {
      console.log(response.data)
      alert(response.data['message'])
      setfaculty('');
      setdepartment('');
      setprogram('');
      setlink('');
      setfacultyerrors('');
      setdepartmenterrors('');
      setprogramerrors('');
      setlinkerrors('');
      setcoursepic('default_user_img_nzynlg.png');
      setProgress(0);
      setImage(defaultImage);
      setPublicid('')
      handleClose();
    }
    else {
      alert(response.data['message'])
    }
    return isValid;

}
  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg"
    //    style={{backgroundColor:'lightgrey'}}
        >
       <Navbar.Brand href="/"   >
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
      </Navbar> */}


      <p style={{marginLeft:'2%', fontSize:'2.5vw'}}>Course lists</p>
<div style={{margin:'3%'}}>
   
   <Button style={{float:'right', marginTop:'0.5%', backgroundColor:'rgb(104,193,68)', borderColor:'rgb(104,193,68)'}} onClick={handleOpen}>
      Add Program
    </Button>

    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formfaculty">
                <Form.Label >Faculty</Form.Label>
                <Form.Control  as="select" name="faculty" value={faculty} onChange={e => setfaculty(e.target.value)} >
                  <option style={{ fontSize:'1vw'}}>{null}</option>
                  <option style={{ fontSize:'1vw'}}>College of Educational Innovation Research</option>
                  <option style={{ fontSize:'1vw'}}>Institute of Music Science and Engineering</option>
                  <option style={{ fontSize:'1vw'}}>KOSEN-KMITL</option>
                  <option style={{ fontSize:'1vw'}}>CMKL University</option>
                  <option style={{ fontSize:'1vw'}}>KMITL Hospital</option>
                  <option style={{ fontSize:'1vw'}}>42  Bangkok KMITL</option>
                  <option style={{ fontSize:'1vw'}}>KMITL Prince of Chumphon Campus </option>
                  <option style={{ fontSize:'1vw'}}>School of Engineering</option>
                  <option style={{ fontSize:'1vw'}}>Faculty of Architecture</option>
                  <option style={{ fontSize:'1vw'}}>School of Science</option>
                  <option style={{ fontSize:'1vw'}}>Faculty of Industrial Education and Technology</option>
                  <option style={{ fontSize:'1vw'}}>Faculty of Agricultural Technology</option>
                  <option style={{ fontSize:'1vw'}}>Faculty of Information Technology</option>
                  <option style={{ fontSize:'1vw'}}>Faculty of Food Industry</option>
                  <option style={{ fontSize:'1vw'}}>KMITL Business School</option>
                  <option style={{ fontSize:'1vw'}}>Faculty of Liberal Arts</option>
                  <option style={{ fontSize:'1vw'}}>College of Nanotechnology</option>
                  <option style={{ fontSize:'1vw'}}>College of Advanced Manufacturing Innovation</option>
                  <option style={{ fontSize:'1vw'}}>Faculty of Medicine</option>
                  <option style={{ fontSize:'1vw'}}>International Academy of Aviation Industry</option>
                  <option style={{ fontSize:'1vw'}}>King Mongkut's International Demonstration School</option>
                  <option style={{ fontSize:'1vw'}}>Other</option>
                </Form.Control>
                <Form.Text style={{color: "red"}} >
                  {facultyerrors}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formdeaprtment">
                <Form.Label >Department</Form.Label>
                <Form.Control type="text" name="department"
                placeholder="Enter Department" value={department} onChange={e => setdepartment(e.target.value)} />
                <Form.Text style={{color: "red"}} >
                  {departmenterrors}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formprogram">
                <Form.Label >Program</Form.Label>
                <Form.Control type="text" name="program"
                placeholder="Enter Program" value={program} onChange={e => setprogram(e.target.value)} />
                <Form.Text style={{color: "red"}} >
                  {programerrors}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formlink">
                <Form.Label >Link</Form.Label>
                <Form.Control type="text" name="link"
                placeholder="Enter link" value={link} onChange={e => setlink(e.target.value)} />
                <Form.Text style={{color: "red"}} >
                  {linkerrors}
                </Form.Text>
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
              <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Button 
                style={{display:"flex", alignItems:"center", justifyContent:"center"}}
                variant="primary" type="submit" value="Submit">
                  Add course
                </Button>
              </div>
            </Form>
          </div>
        </Fade>
      </Modal>
    <MDBDataTable 
        responsive
      scrollY
      maxHeight="50vh"
      striped
      bordered
    //   small
      data={data}
    />

</div>
      
    </>
  );

}


export default Admin_prog;