import React, { Component } from 'react';
import './Navbar.css'
// import {Button} from "../Button"
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';


import { NavLink } from 'react-router-dom'



class Navbarr extends Component{
    // container = React.createRef();
    state = { clicked: false,
        open: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    //   componentDidMount() {
    //     document.addEventListener("mousedown", this.handleClickOutside);
    //   }
    //   componentWillUnmount() {
    //     document.removeEventListener("mousedown", this.handleClickOutside);
    //   }

    //   handleClickOutside = event => {
    //     if (this.container.current && !this.container.current.contains(event.target)) {
    //       this.setState({
    //         open: false,
    //       });
    //     }
    //   };
    //   handleButtonClick = () => {
    //     this.setState(state => {
    //       return {
    //         open: !state.open,
    //       };
    //     });

    // }

    render(){


        return(
            <>
           
    <nav className="NavbarItems">
             
                <h1 className = "navbar-logo">
                <i className = "fas fa-graduation-cap"></i>
                    <p className= "navbar-p">Study Program</p><p className="navbar-p">Recommendation</p><p className="navbar-p">System
                </p></h1>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

               
 
           
        <nav className= 'nav-menu'>
            {/* <Navbar collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"> */}

                <Nav.Item>
                <NavLink to="/" className= "nav-links" exact activeClassName="underline">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink to = "/Test" className= "nav-links" exact activeClassName="underline">Recommend Programs</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink to="/Programs" className= "nav-links" exact activeClassName="underline">Programs</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink to="/Personality" className= "nav-links" exact activeClassName="underline">Statistic</NavLink>
                </Nav.Item>

                {/* <NavDropdown title="Dropdown" className="ProfileButton" >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}

           
                <Button className="ProfileButton" 
                onClick={this.handleButtonClick}
                >
                    <Link to="/SignIn" >
                    <i class="fas fa-user-circle fa-3x profile-color"></i>     
                    </Link>
                </Button>

                {/* {this.state.open && (
                    <div class="container">
                        <ul>
                            <li><Link to="/" >
                                Home
                            </Link></li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                        </ul>
                        </div>
                    )} */}
  
        
{/* 
                </Navbar.Collapse>
            </Navbar> */}
        
        </nav>
                
        

        {/* </nav> */}
   
</nav>



        </>
        )
    }
}

export default Navbarr