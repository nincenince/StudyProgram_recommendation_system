import React, { Component } from 'react';
import './Navbar.css'
// import {Button} from "../Button"
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
// import NavLink from 'react-bootstrap/NavLink';
import 'bootstrap/dist/css/bootstrap.min.css';


import { NavLink } from 'react-router-dom'



class Navbarr extends Component{
    state = { clicked: false,
        open: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

  

    render(){


        return(
            <>
           


            <Navbar collapseOnSelect expand="lg"  >
            <Navbar.Brand href="/"  >
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

            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" >
           
                <Nav className="mr-auto nav-menu ">
                <Nav.Link as={NavLink} to='/' exact href="/" className= "nav-links" exact activeClassName="underline" >About</Nav.Link>
                <Nav.Link as={NavLink} to='/RecProgram' exact href="/RecProgram" className= "nav-links" exact activeClassName="underline" >Recommend Programs</Nav.Link>
                <Nav.Link  as={NavLink} to='/Programs' exact href="/Programs" className= "nav-links" exact activeClassName="underline">Browse Programs</Nav.Link>
                <Nav.Link as={NavLink} to='/Feedbacks' exact  href="/Feedbacks" className= "nav-links" exact activeClassName="underline" >Feedbacks </Nav.Link>
                <NavDropdown title="User" id="collasible-nav-dropdown" className="NavDropdown" >
                    <NavDropdown.Item as={NavLink} to='/AccInfo' className="NavDropdownItem" style={{ fontSize:'0.9vw'}}>Account Information</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/Dashboard' className="NavDropdownItem" style={{ fontSize:'0.9vw'}}>User Dashboard</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to='/SignIn' className="NavDropdownItem" style={{ fontSize:'0.9vw'}}>Log out</NavDropdown.Item>
                </NavDropdown>
                </Nav>
             
            </Navbar.Collapse>
            </Navbar>



        </>
        )
    }
}

export default Navbarr