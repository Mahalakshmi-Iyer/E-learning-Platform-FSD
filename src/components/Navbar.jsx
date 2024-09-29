// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">TechOverflow</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#courses">Courses</Nav.Link>
          <Nav.Link href="#articles">Articles</Nav.Link>
          <Nav.Link href="#quizzes">Quizzes</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Button variant="outline-light" className="mr-2">Sign In</Button>
        <Button variant="light">Register</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
