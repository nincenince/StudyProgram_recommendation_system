import React from 'react';
// import {Link } from "react-router-dom";
import './Feedbacks.css'
import { Col} from "react-bootstrap";
// import Feedback from 'react-bootstrap/esm/Feedback';
// import Feedbackk from "../Feedbacks";
import { Scrollbars } from 'rc-scrollbars';
import {  useEffect, useState } from 'react';
import axios from 'axios';
function Feedbacks(props){
    const [feedbackk, setfeedbackk] = useState([]);
    const [found, setfound] = useState(true);
    useEffect(() => {
      async function get_feedback () {
        const res = await axios.get('https://spr-system.herokuapp.com/get_feedback/');
        //const res = await axios.get('http://127.0.0.1:8000/get_feedback/');
        let response = res.data['Feedbacks'];
        setfeedbackk(response);
        setfound(true);
      }
      get_feedback();
      // console.log(response);
    },[found])

    return(
      <>


      <h2 
      style={{ fontSize:'2vw', margin:'2%', marginLeft:'10%'}}
        >Feedbacks from our users!</h2>
    
    <Col >

          <div style={{border:'solid', borderWidth:'thin', marginLeft:'10%',marginRight:'10%', marginTop:'4%'}}>
          <Scrollbars style={{ width: '100vw', height: '65vh'}}>
                {
                  feedbackk.map((Info) => {
                    return (
                      <div style={{border:'solid', borderWidth:'thin', borderRadius:'15px',margin:'5%'}} key={Info.User_Feedback}>
                        <p style={{  fontWeight:'900', paddingLeft:'5%', paddingTop:'2%'}} >{Info.Title} - {Info.Rating}</p>
                        {
                          <p style={{ paddingLeft:'10%',paddingRight:'2%', paddingBottom:'3%'}} >{Info.User_Feedback}</p>
                        }
                
                      </div>
                     
                    );
                  })
                } 
              </Scrollbars>
              
        </div>

    </Col>
  


        

      </>


    )
}

export default Feedbacks;