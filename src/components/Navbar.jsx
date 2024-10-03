import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top" > 
      <Navbar.Brand href="/" className="d-flex align-items-center">
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
        {/* Center aligned navigation links */}
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

          <Nav.Link href="#quizzes">Quizzes</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        {/* Right aligned buttons with spacing */}
        <div className="ml-auto">
          <Button variant="outline-light" className="mr-3">
            Sign In
          </Button>
          <Button variant="light" className="mr-4">
            Register
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
