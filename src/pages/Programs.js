import React, { useState} from 'react';
// import ProgramsList from "../ProgramsList";
// import {ProgramsList} from "../ProgramsList.js";
import { Col,Row, Container, Form} from "react-bootstrap";
// import { Col,Row, Container , Image, Jumbotron, Button, Form} from "react-bootstrap";

import axios from 'axios';
import { useEffect } from 'react';
// import { useSelector, useDispatch} from 'react-redux';

import  "./Programs.css"
// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';

 
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
      // const res = await axios.get('http://127.0.0.1:8000/get_course/');
      let responses = res.data['result'];
      setData(responses);
      setrresponse(responses);
      // setData(ProgramsList);
      // setrresponse(ProgramsList);
    }
    get_course();
    // console.log(response);
  },[found])
  
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
      if(filteredData.length === 0){
        setfound(false);
      }
      setData(filteredData);
    }
  }
 
  return (
    <div className="App">

      {/* <div  style={{ marginLeft: "20%", marginRight: "20%"}}> */}
      <Col  md={{ span: 6, offset: 3}}>
        <h4>Search / ค้นหา:</h4>
        <input
            style={{width:"70%", height:'38px' }}
            type="text"
            placeholder="Type to search..."
            value={searchText}
            onChange={e => handleChange(e.target.value)}
          />
          
      {/* </div> */}
      {/* </Col> */}

      {/* <div style={{ marginLeft: "20%", marginRight: "20%"}}>Select Faculty/College: */}
   
      <h4 style={{marginTop:'4%'}}>Select Faculty/College:</h4>

        <Form>  
          <Form.Group controlId="forfn">
            {/* <Form.Label style={{ fontSize:'1vw'}}>Select Faculty/College</Form.Label> */}
            {/* <Form.Control style={{ fontSize:'1vw'}} type="text" placeholder="Enter First Name"  value={firstname} onChange={e => setfirstname(e.target.value)} /> */}
            <Form.Control as="select" style={{ width:"70%"}} value={facu} onChange={e => filterData(e.target.value)} key="fa">
              <option style={{ fontSize:'1vw'}}>{null}</option>
              <option value="College of Educational Innovation Research" style={{ fontSize:'1vw'}}>College of Educational Innovation Research : วิทยาลัยวิจัยนวัตกรรมทางการศึกษา</option>
              <option value="Institute of Music Science and Engineering" style={{ fontSize:'1vw'}}>Institute of Music Science and Engineering : วิทยาลัยวิศวกรรมสังคีต</option>
              <option value="KOSEN-KMITL" style={{ fontSize:'1vw'}}>KOSEN-KMITL : สถาบันโคเซ็นแห่งสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</option>
              <option value="CMKL University" style={{ fontSize:'1vw'}}>CMKL University : มหาวิทยาลัยซีเอ็มเคแอล</option>
              <option value="KMITL Hospital" style={{ fontSize:'1vw'}}>KMITL Hospital : โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร</option>
              <option value="Faculty of Dentistry" style={{ fontSize:'1vw'}}>Faculty of Dentistry : คณะทันตแพทยศาสตร์</option>
              <option value="KMITL Prince of Chumphon Campus" style={{ fontSize:'1vw'}}>KMITL Prince of Chumphon Campus : วิทยาเขตชุมพรเขตรอุดมศักดิ์ จังหวัดชุมพร</option>
              <option value="School of Engineering" style={{ fontSize:'1vw'}}>School of Engineering : คณะวิศวกรรมศาสตร์</option>
              <option value="Faculty of Architecture" style={{ fontSize:'1vw'}}>Faculty of Architecture : คณะสถาปัตยกรรมศาสตร์ ศิลปะและการออกแบบ</option>
              <option value="School of Science" style={{ fontSize:'1vw'}}>School of Science : คณะวิทยาศาสตร์</option>
              <option value="Faculty of Industrial Education and Technology" style={{ fontSize:'1vw'}}>Faculty of Industrial Education and Technology : คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี</option>
              <option value="Faculty of Agricultural Technology" style={{ fontSize:'1vw'}}>Faculty of Agricultural Technology : คณะเทคโนโลยีการเกษตร</option>
              <option value="Faculty of Information Technology" style={{ fontSize:'1vw'}}>Faculty of Information Technology : คณะเทคโนโลยีสารสนเทศ</option>
              <option value="Faculty of Food Industry" style={{ fontSize:'1vw'}}>Faculty of Food Industry : คณะอุตสาหกรรมอาหาร</option>
              <option value="KMITL Business School" style={{ fontSize:'1vw'}}>KMITL Business School : คณะบริหารธุรกิจ</option>
              <option value="Faculty of Liberal Arts" style={{ fontSize:'1vw'}}>Faculty of Liberal Arts : คณะศิลปศาสตร์</option>
              <option value="College of Nanotechnology" style={{ fontSize:'1vw'}}>College of Nanotechnology : วิทยาลัยนาโนเทคโนโลยีพระจอมเกล้าลาดกระบัง</option>
              <option value="College of Advanced Manufacturing Innovation" style={{ fontSize:'1vw'}}>College of Advanced Manufacturing Innovation : วิทยาลัยนวัตกรรมการผลิตขั้นสูง</option>
              <option value="Faculty of Medicine" style={{ fontSize:'1vw'}}>Faculty of Medicine : คณะแพทยศาสตร์</option>
              <option value="International Academy of Aviation Industry" style={{ fontSize:'1vw'}}>International Academy of Aviation Industry : วิทยาลัยอุตสาหกรรมการบินนานาชาติ</option>
              <option value="King Mongkut's International Demonstration School" style={{ fontSize:'1vw'}}>King Mongkut's International Demonstration School : โรงเรียนสาธิตนานาชาติพระจอมเกล้า</option>
              <option value="Other" style={{ fontSize:'1vw'}}>Other : อื่นๆ</option>
            </Form.Control>                  
          </Form.Group>
        </Form>
        </Col>
      {/* </div>  */}
     
      {found ?
        <Container>
      
        {data.map((d, i) => {
            return <div key={i} style={{ backgroundColor: d.color }}>
              <Row className = "ProgramsList-box" >
                <Col>
                  <br></br>
                  <img className="object-contain rounded-lg" src={"https://res.cloudinary.com/hdtjuro73/image/upload/w_250,h_150,c_scale,q_auto,f_auto/v1617779170/"+d.coursepic}></img>
                  <hr></hr>
                  <p>
                    <a style={{textAlign: 'center', fontSize: 'calc(0.5em + 0.5vw)', fontFamily: 'Arial'}} href={d.url}>{d.ProgramName}</a>
                  </p>
                  <p>
                    {d.program_thai}
                  </p>
                </Col>
              </Row>
            </div>
            })}
            {data.length === 0 && <span>!</span>} 
         </Container> 
         
        : 
        <Container>
          Not Found
          
        </Container>
      }

    </div>
  );
}
 

export default Programs;