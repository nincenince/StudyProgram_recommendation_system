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

import { useSelector, useDispatch} from 'react-redux';
import { useState, useEffect } from 'react';
//import { signout } from '../actions';
import { destroy_token, signout, destroy_firstname, destroy_lastname, destroy_email, destroy_sex, destroy_age, destroy_edu, destroy_per, destroy_comefrom } from '../../actions';
import axios from 'axios';
import { NavLink } from 'react-router-dom'



function Navbarr (props){
    // state = { clicked: false,
    //     open: false }

    // const handleClick = () => {
    //     this.setState({ clicked: !this.state.clicked })
    // }
    
    let token = useSelector(state => state.token)
    let isLogged = useSelector(state => state.isLogged);
    let dispatch = useDispatch();

    useEffect(() => {
        //token = useSelector(state => state.token);
      }, [token, isLogged]);


    const logout = async (tk) => {
        //let token = useSelector(state => state.token)
        let response = {};
        let payload = {
            "token": tk
        }
        response = await axios.post("https://spr-system.herokuapp.com/logout/", payload)
        //response = await axios.post("http://127.0.0.1:8000/logout/", payload)
        if(response.data['status'] === true){
            dispatch(signout());
            dispatch(destroy_token());
            dispatch(destroy_firstname());
            dispatch(destroy_lastname());
            dispatch(destroy_email());
            dispatch(destroy_age());
            dispatch(destroy_sex());
            dispatch(destroy_edu());
            dispatch(destroy_per());
            dispatch(destroy_comefrom());
            alert(response.data['message']);
            //props.history.push('/');
        }
    }
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
                <Nav.Link as={NavLink} to='/' exact href="/" className= "nav-links" exact activeClassName="underline" style={{ fontSize:'1vw'}}>About</Nav.Link>
                <Nav.Link as={NavLink} to='/RecProgram' exact href="/RecProgram" className= "nav-links" exact activeClassName="underline" style={{ fontSize:'1vw'}}>Recommend Programs</Nav.Link>
                <Nav.Link  as={NavLink} to='/Programs' exact href="/Programs" className= "nav-links" exact activeClassName="underline" style={{ fontSize:'1vw'}}>Browse Programs</Nav.Link>
                <Nav.Link as={NavLink} to='/Feedbacks' exact  href="/Feedbacks" className= "nav-links" exact activeClassName="underline" style={{ fontSize:'1vw'}}>Feedbacks </Nav.Link>
                
                {isLogged ? <NavDropdown style={{ fontSize:'1vw'}}
                title="User"
                 id="collasible-nav-dropdown" 
                className="NavDropdown" >
                    <NavDropdown.Item as={NavLink} to='/AccInfo' className="NavDropdownItem" style={{ fontSize:'0.9vw'}} >Account Information</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/Dashboard' className="NavDropdownItem"  style={{ fontSize:'0.9vw'}} style={{ fontSize:'1vw'}}>User Dashboard</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to='/' className="NavDropdownItem"  tyle={{ fontSize:'0.9vw'}} style={{ fontSize:'1vw'}} onClick={() => logout(token)} >Log out</NavDropdown.Item>
                </NavDropdown> :
                <NavDropdown style={{ fontSize:'1vw'}}
                title="User"
                 id="collasible-nav-dropdown" 
                className="NavDropdown" >
                    {/* <NavDropdown.Item as={NavLink} to='/AccInfo' className="NavDropdownItem" style={{ fontSize:'0.9vw'}} >Account Information</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/Dashboard' className="NavDropdownItem"  style={{ fontSize:'0.9vw'}} style={{ fontSize:'1vw'}}>User Dashboard</NavDropdown.Item>
                    <NavDropdown.Divider /> */}
                    <NavDropdown.Item as={NavLink} to='/SignIn' className="NavDropdownItem"  tyle={{ fontSize:'0.9vw'}} style={{ fontSize:'1vw'}}>Log in</NavDropdown.Item>
                </NavDropdown>
                }
                
                </Nav>
             
            </Navbar.Collapse>
            </Navbar>



        </>
        )
}

export default Navbarr



// class Navbarr extends Component{
//     state = { clicked: false,
//         open: false }

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked })
//     }

  

//     render(){


//         return(
//             <>
           


//             <Navbar collapseOnSelect expand="lg"  >
//             <Navbar.Brand href="/"  >
//                 <i 
//                  className = "fas fa-graduation-cap" style={{ fontSize:'4.95vw'}}
//                 ></i>
//                     <p 
//                     className= "navbar-p" style={{ fontSize:'1vw'}}
//                     >Study Program</p><p 
//                     className="navbar-p" style={{ fontSize:'1vw'}}
//                     >Recommendation</p>
//                     <p 
//                     className="navbar-p" style={{ fontSize:'1vw'}}
//                     >System
//                 </p>
//                 </Navbar.Brand>

//             <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
//             <Navbar.Collapse id="responsive-navbar-nav" >
           
//                 <Nav className="mr-auto nav-menu ">
//                 <Nav.Link as={NavLink} to='/' exact href="/" className= "nav-links" exact activeClassName="underline" style={{ fontSize:'1vw'}}>About</Nav.Link>
//                 <Nav.Link as={NavLink} to='/RecProgram' exact href="/RecProgram" className= "nav-links" exact activeClassName="underline" style={{ fontSize:'1vw'}}>Recommend Programs</Nav.Link>
//                 <Nav.Link  as={NavLink} to='/Programs' exact href="/Programs" className= "nav-links" exact activeClassName="underline" style={{ fontSize:'1vw'}}>Browse Programs</Nav.Link>
//                 <Nav.Link as={NavLink} to='/Feedbacks' exact  href="/Feedbacks" className= "nav-links" exact activeClassName="underline" style={{ fontSize:'1vw'}}>Feedbacks </Nav.Link>
//                 <NavDropdown style={{ fontSize:'1vw'}}
//                 title="User"
//                  id="collasible-nav-dropdown" 
//                 className="NavDropdown" >
//                     <NavDropdown.Item as={NavLink} to='/AccInfo' className="NavDropdownItem" style={{ fontSize:'0.9vw'}} >Account Information</NavDropdown.Item>
//                     <NavDropdown.Item as={NavLink} to='/Dashboard' className="NavDropdownItem"  style={{ fontSize:'0.9vw'}} style={{ fontSize:'1vw'}}>User Dashboard</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item as={NavLink} to='/SignIn' className="NavDropdownItem"  tyle={{ fontSize:'0.9vw'}} style={{ fontSize:'1vw'}}>Log out</NavDropdown.Item>
//                 </NavDropdown>
//                 </Nav>
             
//             </Navbar.Collapse>
//             </Navbar>



//         </>
//         )
//     }
// }
