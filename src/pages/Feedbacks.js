import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './Feedbacks.css'
import { Col, Row, Container , Button, Card, Form, FormControl, Navbar} from "react-bootstrap";
import Feedback from 'react-bootstrap/esm/Feedback';
import Feedbackk from "../Feedbacks";
import { Scrollbars } from 'rc-scrollbars';

class Feedbacks extends Component{
    render(){
  
        return(
      <>


      <h2 
      style={{ fontSize:'2vw', margin:'2%', marginLeft:'10%'}}
        >Feedbacks from our users!</h2>
    
  
    

    <Col >

          <div style={{border:'solid', borderWidth:'thin', marginLeft:'10%',marginRight:'10%', marginTop:'4%'}}>
          <Scrollbars style={{ width: '100vw', height: '65vh'}}>
                {
                  Feedbackk.FeedBacks.map((Info) => {
                    return (
                      <div style={{border:'solid', borderWidth:'thin', borderRadius:'15px',margin:'5%'}} >
                        <p 
                        style={{ fontSize:'1vw', fontWeight:'900', paddingLeft:'5%', paddingTop:'2%'}} >
                          {Info.Programs}</p>

                          {
                                  <p 
                                  style={{ fontSize:'1vw', paddingLeft:'10%',paddingRight:'2%', paddingBottom:'3%'}} >
                                    {Info.User_Feedback}
                                  </p>
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
}

export default Feedbacks;