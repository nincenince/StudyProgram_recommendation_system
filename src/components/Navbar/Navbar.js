import React, { Component } from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'


class Navbar extends Component{

  

    handleClick(id) {

        console.log(id);
        let element = document.getElementById(id);
        element.classList.add(' active_item');      
  
      };


   


    render(){


        // this.state = { active: false }

        return(
            <>
          
<nav className="NavbarItems">
            <h1 className = "navbar-logo">
                <i className = "fas fa-graduation-cap"></i>
                    <p className= "navbar-p">Study Program</p><p className="navbar-p">Recommendation</p><p className="navbar-p">System
                </p></h1>
        
        <nav className= 'nav-menu'>
          
                <Nav.Item>
                <NavLink to="/" className= "nav-links" exact activeClassName="underline">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink to = "/Test" className= "nav-links" exact activeClassName="underline">Test</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink to="/Programs" className= "nav-links" exact activeClassName="underline">Programs</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink to="/Personality" className= "nav-links" exact activeClassName="underline">Personality</NavLink>
                </Nav.Item>
              

                <Button className="navButton" variant="outlined" color="primary"  >
                    <Link to="/SignIn" >
                                Sign In
                    </Link>
                </Button>
          
        </nav>
</nav>
{/* 2 */}


        </>
        )
    }
}

export default Navbar
