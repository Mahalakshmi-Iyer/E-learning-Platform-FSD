// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; 

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
          src="TechOverflowLogo.png"
          alt="logo"
          width="30"
          height="30"
          className="d-inline-block align-top mr-3"
        />
        TechOverflow
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/courses">
            Courses
          </Nav.Link>
  
<Nav.Link as={Link} to="/articles">
  Articles
</Nav.Link>

<Nav.Link as={Link} to="/quizzes">Quizzes</Nav.Link> 
<Nav.Link as={Link} to="/about">About</Nav.Link>
<Nav.Link as={Link} to="/contact">Contact</Nav.Link>

        
        </Nav>
        <div className="ml-auto d-flex align-items-center">
          <Button variant="outline-light" className="mr-3">Sign In</Button>
          <Button variant="light" className="mr-3">Register</Button>
          <NavDropdown
            title={<FaUserCircle size={28} className="text-white" />}
            id="profile-dropdown"
            align="end"
          >
            <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;