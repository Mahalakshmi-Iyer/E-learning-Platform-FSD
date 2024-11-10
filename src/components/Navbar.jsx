import React from 'react';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = ({ isLoggedIn, handleLogout }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
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
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
          <Nav.Link as={Link} to="/articles">Articles</Nav.Link>
          <Nav.Link as={Link} to="/quizzes">Quizzes</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        <div className="ml-auto">
          {isLoggedIn ? (
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="profile-dropdown">
                <FontAwesomeIcon icon={faUser} /> Profile
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline-light" className="mr-3">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button variant="light" className="mr-4">Register</Button>
              </Link>
            </>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
