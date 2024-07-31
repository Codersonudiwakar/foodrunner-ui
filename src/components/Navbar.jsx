import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { GrHelpBook } from "react-icons/gr";
import { TfiHelpAlt } from "react-icons/tfi";
import LoginPage from './Login';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-modal';


const TopNavbar =() =>{
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
  
      <Container>
        <Navbar.Brand href="#home"><img src='https://gumlet-images.assettype.com/afaqs%2F2024-04%2Fff7ef11f-51b9-4ab4-801d-627c659f0001%2FSwiggy.png?w=1200&auto=format%2Ccompress&ogImage=true' className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
         
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link<BiSolidOffer /> <GrHelpBook />
              </NavDropdown.Item>
            </NavDropdown> */}


<div className="App">
    </div>
          </Nav>
          <Nav>
          <Nav.Link  href="#memes">
            <BiSolidOffer />   Offer
            </Nav.Link>
            <Nav.Link  href="#memes">
            <TfiHelpAlt />

            Help
            </Nav.Link>
            <Nav.Link href="#deets"> <FaRegUser /> Sign In</Nav.Link>
            <Nav.Link  href="#memes">
            <BsCart2 />
            Dank memes
            </Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;