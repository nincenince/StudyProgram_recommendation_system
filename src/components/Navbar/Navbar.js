import React from 'react';
import './Navbar.css'
// import {Button} from "../Button"
// import {Link} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
// import NavLink from 'react-bootstrap/NavLink';
import 'bootstrap/dist/css/bootstrap.min.css';
import Kandle_logo from './Kandle_logo.png'

import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
//import { signout } from '../actions';
import { destroy_token, signout, destroy_firstname, destroy_lastname, destroy_email, destroy_sex, destroy_age, destroy_edu, destroy_per, destroy_comefrom, destroy_school, destroy_role, signout_admin, destroy_profilepic, destroy_rec } from '../../actions';
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'



function Navbarr (props){
    const loadingContainer = {
        width: "2rem",
        height: "2rem",
        display: "flex",
        justifyContent: "space-around",
        marginLeft: "25%"
      };
      
      const loadingCircle = {
        display: "block",
        width: "0.5rem",
        height: "0.5rem",
        backgroundColor: "black",
        borderRadius: "0.25rem"
      };
      
      const loadingContainerVariants = {
        start: {
          transition: {
            staggerChildren: 0.2
          }
        },
        end: {
          transition: {
            staggerChildren: 0.2
          }
        }
      };
      
      const loadingCircleVariants = {
        start: {
          y: "50%"
        },
        end: {
          y: "150%"
        }
      };
      const loadingCircleTransition = {
        duration: 0.5,
        yoyo: Infinity,
        ease: "easeInOut"
      };
    // state = { clicked: false,
    //     open: false }

    // const handleClick = () => {
    //     this.setState({ clicked: !this.state.clicked })
    // }
    
    let token = useSelector(state => state.token)
    let isLogged = useSelector(state => state.isLogged);
    let isAdmin = useSelector(state => state.isAdmin);
    let dispatch = useDispatch();
    let personal = useSelector(state => state.personal);
    let profilepicurl = "https://res.cloudinary.com/hdtjuro73/image/upload/w_50,c_fill,ar_1:1,g_auto,r_max/v1617866916/"+personal.profilepic;
    useEffect(() => {
        //token = useSelector(state => state.token);
      }, [token, isLogged]);


    const logout = async (tk) => {
        //let token = useSelector(state => state.token)
        let response = {};
        let payload = {
            "token": tk
        }
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
        dispatch(destroy_school());
        dispatch(destroy_role());
        dispatch(signout_admin());
        dispatch(destroy_profilepic());
        dispatch(destroy_rec());
        response = await axios.post("https://spr-system.herokuapp.com/logout/", payload)
        //response = await axios.post("http://127.0.0.1:8000/logout/", payload)
        // if(response.data['status'] === true){
        //     dispatch(signout());
        //     dispatch(destroy_token());
        //     dispatch(destroy_firstname());
        //     dispatch(destroy_lastname());
        //     dispatch(destroy_email());
        //     dispatch(destroy_age());
        //     dispatch(destroy_sex());
        //     dispatch(destroy_edu());
        //     dispatch(destroy_per());
        //     dispatch(destroy_comefrom());
        //     dispatch(destroy_school());
        //     dispatch(destroy_role());
        //     dispatch(signout_admin());
        //     alert(response.data['message']);
        //     //props.history.push('/');
        // }
    }
        return(
            <>
            <Navbar collapseOnSelect expand="lg"  >
            <Navbar.Brand href="/" >
                <Nav.Link className="navbar-brand" href="/">
                    {/* <i className = "fas fa-graduation-cap fa-3x" Style={{ fontSize:'4.95vw'}}> */}
                    <img src={Kandle_logo} style={{width:100,  marginLeft:'4%'}} />
                    <span style={{color: 'red', fontSize:'100%', fontWeight:'900'}}>Kandle</span>
                    <span>
                    <motion.div
                        style={loadingContainer}
                        variants={loadingContainerVariants}
                        initial="start"
                        animate="end"
                        >
                        <motion.span
                            style={loadingCircle}
                            variants={loadingCircleVariants}
                            transition={loadingCircleTransition}
                        />
                        <motion.span
                            style={loadingCircle}
                            variants={loadingCircleVariants}
                            transition={loadingCircleTransition}
                        />
                        <motion.span
                            style={loadingCircle}
                            variants={loadingCircleVariants}
                            transition={loadingCircleTransition}
                        />
                        </motion.div>
                    </span>
                    {/* </i> */}
                </Nav.Link>
                {/* <div className="row">
                    <col-2>
                        <i className = "fas fa-graduation-cap" Style={{ fontSize:'4.95vw'}}/>
                    </col-2>
                    <col-10>
                        <row>
                            <p className= "navbar-p" Style={{ fontSize:'1vw'}}>Study Program</p>
                        </row>
                        <row>
                            <p className="navbar-p" Style={{ fontSize:'1vw'}}>Recommendation</p>
                        </row>
                        <row>
                            <p className="navbar-p" Style={{ fontSize:'1vw'}}>System</p>
                        </row>
                    </col-10>
                </div> */}
                
                    
                
                </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            {isAdmin ? <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto nav-menu d-flex justify-content-around">
                    <Nav.Link as={NavLink} to='/Admin_prog' exact  href="/Admin_prog" className= "nav-links" activeClassName="underline">Add Course </Nav.Link>
                    <Nav.Link as={NavLink} to='/Feedbacks' exact  href="/Feedbacks" className= "nav-links" activeClassName="underline" Style={{ fontSize:'1vw'}}>Feedbacks </Nav.Link>
                    {isLogged ? <NavDropdown style={{  float:'right', width:'300px'}}
                        title="User"
                        id="collasible-nav-dropdown" 
                        className="NavDropdown"
                        style ={{ width:'300px'}} >
                            {/* <NavDropdown.Item as={NavLink} to='/AccInfo' className="NavDropdownItem" Style={{ fontSize:'0.9vw'}} >Account Information</NavDropdown.Item> */}
                            {/* <NavDropdown.Item as={NavLink} to='/Dashboard' className="NavDropdownItem"  Style={{ fontSize:'0.9vw'}} >User Dashboard</NavDropdown.Item> */}
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="NavDropdownItem"  >
                                <img style={{borderRadius: '100%'}} src={profilepicurl}/>
                                <span style={{padding: '5%'}}>Admin</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/' className="NavDropdownItem" style ={{ textAlign:'center'}} onClick={() => logout(token)} >
                                Sign out
                            </NavDropdown.Item>
                        </NavDropdown> :
                        <NavDropdown style={{  align: 'right'}}
                        title="User"
                        id="collasible-nav-dropdown" 
                        className="NavDropdown nav navbar-nav ml-auto w-100 justify-content-end" >
                            {/* <NavDropdown.Item as={NavLink} to='/AccInfo' className="NavDropdownItem" style={{ fontSize:'0.9vw'}} >Account Information</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/Dashboard' className="NavDropdownItem"  style={{ fontSize:'0.9vw'}} style={{ fontSize:'1vw'}}>User Dashboard</NavDropdown.Item>
                            <NavDropdown.Divider /> */}
                            <NavDropdown.Item as={NavLink} to='/SignIn' className="NavDropdownItem"  tyle={{ fontSize:'0.9vw'}} style={{ fontSize:'1vw', textAlign:'center'}}>Sign In</NavDropdown.Item>
                        </NavDropdown>}
                </Nav>
                </Navbar.Collapse>:
                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto nav-menu d-flex justify-content-around">
                <Nav.Link as={NavLink} to='/' exact href="/" className= "nav-links" activeClassName="underline" >About</Nav.Link>
                <Nav.Link as={NavLink} to='/RecProgram' exact href="/RecProgram" className= "nav-links" activeClassName="underline" >Recommend Programs</Nav.Link>
                <Nav.Link  as={NavLink} to='/Programs' exact href="/Programs" className= "nav-links" activeClassName="underline" >Browse Programs</Nav.Link>
                {/* <Nav.Link className= "nav-links" activeClassName="underline" Style={{ fontSize:'1vw'}}></Nav.Link> */}
                {/* <Nav.Link className= "nav-links" activeClassName="underline" Style={{ fontSize:'1vw'}}></Nav.Link> */}

                
                {isLogged ? <NavDropdown 
                title="User"
                 id="collasible-nav-dropdown" 
                className="NavDropdown" 
                style ={{ width:'200px'}}
                >
                    <NavDropdown.Item as={NavLink} to='/Dashboard' className="NavDropdownItem"  >
                        <img style={{borderRadius: '100%'}} src={profilepicurl}/>
                        <span style={{padding: '5%'}}>{personal.firstname}</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/AccInfo' className="NavDropdownItem" style ={{ textAlign:'center'}} >Account Information</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/Dashboard' className="NavDropdownItem"style ={{ textAlign:'center'}} >User Dashboard</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to='/' className="NavDropdownItem"   onClick={() => logout(token)} style ={{ textAlign:'center'}} >Sign Out</NavDropdown.Item>
                </NavDropdown> :
                <NavDropdown 
                title="User"
                 id="collasible-nav-dropdown" 
                className="NavDropdown" >
                    {/* <NavDropdown.Item as={NavLink} to='/AccInfo' className="NavDropdownItem" style={{ fontSize:'0.9vw'}} >Account Information</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/Dashboard' className="NavDropdownItem"  style={{ fontSize:'0.9vw'}} style={{ fontSize:'1vw'}}>User Dashboard</NavDropdown.Item>
                    <NavDropdown.Divider /> */}
                    <NavDropdown.Item as={NavLink} to='/SignIn' className="NavDropdownItem" style ={{ textAlign:'center'}} >Sign In</NavDropdown.Item>
                </NavDropdown>
                }
                
                </Nav>
             
            </Navbar.Collapse>}
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
//                     <NavDropdown.Item as={NavLink} to='/SignIn' className="NavDropdownItem"  tyle={{ fontSize:'0.9vw'}} style={{ fontSize:'1vw'}}>Sign Out</NavDropdown.Item>
//                 </NavDropdown>
//                 </Nav>
             
//             </Navbar.Collapse>
//             </Navbar>



//         </>
//         )
//     }
// }
