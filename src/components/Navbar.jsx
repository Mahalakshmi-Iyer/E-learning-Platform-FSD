import React from 'react';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = ({ isLoggedIn, handleLogout = () => {} }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
          src="TechOverflowLogo.png"
          alt="logo"
          width="30"
          height="30"
          className="d-inline-block align-top me-3"
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
        <div className="ms-auto">
          {isLoggedIn ? (
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="profile-dropdown">
                <i className="fa fa-user"></i> Profile {/* Using Font Awesome icon directly */}
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline-light" className="me-3">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button variant="light" className="me-4">Register</Button>
              </Link>
            </>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
