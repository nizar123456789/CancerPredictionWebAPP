import React from "react";
import { Navbar,Container,NavDropdown,Collapse,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Nav.css';
import logo from '../Assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {  faSearch ,faPhone,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
const Navbars = () => {
    return ( 
        <Navbar  expand="lg">
      <Container>
        <Navbar.Brand >
          <img src={logo} title="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


            <Link to='/home' className="active">Home</Link>
        


            <NavDropdown title="Diagnostic" id="basic-nav-dropdown">
            <Link to='/BrainTumor'>
               <NavDropdown.Item href="#action/3.1">Brain-Tumor</NavDropdown.Item>
               </Link>
              <NavDropdown.Item href="#action/3.2">
                Skin-Cancer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lung-Tumor</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
            <Nav.Link ><FontAwesomeIcon icon={faSearch}/>Search</Nav.Link>
            <Nav.Link > 
            <FontAwesomeIcon icon={faPhone}/>(+216)59414269
            </Nav.Link>

            <Link to='/contact-us' >
                <button>Contact us <span> <FontAwesomeIcon icon={faArrowLeft}/> </span></button>
                



            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}
 
export default Navbars;