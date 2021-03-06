import React, { Component , useState} from 'react';
// import ProgramsList from "../ProgramsList";
import {ProgramsList} from "../ProgramsList.js";
import { Col,Row, Container , Image, Jumbotron, Button, Form} from "react-bootstrap";

import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';

import  "./Programs.css"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

 
function Programs() {
  let response = [];
  const [found, setfound] = useState(true);

  // useEffect(async () => {
  //   await axios.get('127.0.0.1:8000/get_all_user').then(
  //     res => {
  //       console.log(res);
  //     }
  //   )
  // })
	useEffect(() => {
    async function get_course () {
      const res = await axios.get('https://spr-system.herokuapp.com/get_course/');
      //const res = await axios.get('http://127.0.0.1:8000/get_course/');
      response = res.data['result'];
      setData(response);
      setrresponse(response);
    }
    get_course();
    // console.log(response);
  },found)
  
  const [facu, setfacu] = useState('');
  const [rresponse, setrresponse] = useState(response);
  const [searchText, setSearchText] = useState("");
  // const [data, setData] = useState(ProgramsList);
  const [data, setData] = useState(response);
 
  //   const excludeColumns = ["id"];
  const handleChange = value => {
      setSearchText(value);
      filterData(value);
    };

  //   const handleChange = value => {
    // this.setState({setSearchText: value});
    // this.setState({filterData: value});
    
  //   };
  const filterData = (value) => {
    setfacu(value);
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(rresponse);
    else {
      const filteredData = rresponse.filter(item => {
        return Object.keys(item).some(key =>
        //   excludeColumns.includes(key) ? false :
		   item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setfound(true);
      if(filteredData.length == 0){
        setfound(false);
      }
      setData(filteredData);
    }
  }
 
  return (
    <div className="App">

      <div  style={{ marginLeft: "20%", marginRight: "20%"}}>Search:<br></br>
        <input
            style={{width:"70%"}}
            type="text"
            placeholder="Type to search..."
            value={searchText}
            onChange={e => handleChange(e.target.value)}
          />
      </div>
      <br></br>
      <div style={{ marginLeft: "20%", marginRight: "20%"}}>Select Faculty/College:
        <Form>  
          <Form.Group controlId="forfn">
            {/* <Form.Label style={{ fontSize:'1vw'}}>Select Faculty/College</Form.Label> */}
            {/* <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter First Name"  value={firstname} onChange={e => setfirstname(e.target.value)} /> */}
            <Form.Control as="select" style={{ fontSize:'1vw', width:"70%"}} value={facu} onChange={e => filterData(e.target.value)} key="fa">
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
              <option style={{ fontSize:'1vw'}}>Faculty of Science</option>
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
            </Form.Control>                  
          </Form.Group>
        </Form>
      </div> 

      {found ? <Container>
        {data.map((d, i) => {
            return <div key={i} style={{ backgroundColor: d.color }}>
              <Row className = "ProgramsList-box" >
                <Col>
                  <a href={d.url}>{d.ProgramName}</a>
                </Col>
              </Row>
            </div>
            })}
            {data.length === 0 && <span>!</span>} 
        </Container> : 
        <Container>
          Not Found
          
        </Container>
      }

    </div>
  );
}
 

export default Programs;