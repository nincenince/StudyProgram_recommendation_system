import React from 'react';
import './Feedbacks.css'
import {Button, Navbar} from "react-bootstrap";
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import { useEffect, useState } from 'react';



const Admin_prog = props => {
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
  // useEffect(async () => {
  //   await axios.get('127.0.0.1:8000/get_all_user').then(
  //     res => {
  //       console.log(res);
  //     }
  //   )
  // })
	useEffect(() => {
    async function get_data () {
      const res = await axios.get('https://spr-system.herokuapp.com/get_course_admin/');
      //const res = await axios.get('http://127.0.0.1:8000/get_course_admin/');
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
  },[found])

  

  

  const out = async (value) => {
    let response = {};
    let payload = {
      "id" : value
    };
    response = await axios.post('https://spr-system.herokuapp.com/delete_course/', payload);
    //response = await axios.post('http://127.0.0.1:8000/delete_course/', payload);
    //console.log(value);
    if(response.data['status'] === true){
      window.location.reload(false);
    }
    else{
      alert(response.data['message']);
    }
    
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg"
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
      </Navbar>


      <p style={{marginLeft:'2%', fontSize:'2.5vw'}}>Course lists</p>
<div style={{margin:'3%'}}>
   
   <Button style={{float:'right', marginTop:'0.5%', backgroundColor:'rgb(104,193,68)', borderColor:'rgb(104,193,68)'}}>
       
       Add Program</Button>
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