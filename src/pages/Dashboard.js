import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './Dashboard.css';
import { Col,Row, Container , Image, Jumbotron, Button, Card} from "react-bootstrap";


class RecommendProg extends Component{

  render(){


      return(
          <>
            <div>
             
                <h1 className = "edu-navbar-logo">
                <i className = "fas fa-graduation-cap edu-cap" style={{ fontSize:'5vw'}}></i>
                    <p className= "edu-navbar-p" style={{ fontSize:'1.25vw'}}>Study Program</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>Recommendation</p><p className="edu-navbar-p" style={{ fontSize:'1.25vw'}}>System
                </p></h1>
            
             
            </div>
                
                
        <Container >

            <Link to="/RecProgram">
                <Button className="Dashboard-done-button" style={{ fontSize:'1vw'}}>
                    Done
                </Button>
            </Link>

        </Container>
          </>
      )
  }
}

export default RecommendProg;


