import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Use useNavigate for redirecting
import { Container, Form, Button, Row, Col, Card, Alert } from 'react-bootstrap';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const navigate = useNavigate();  // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsButtonDisabled(true);  // Disable button while processing

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      setIsButtonDisabled(false);  // Re-enable the button on error
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsButtonDisabled(false);  // Re-enable the button on error
      return;
    }

    const signupData = { username, email, password };

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', signupData);
      setSuccess(response.data.message);

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/login');  // Navigate to login page after successful signup
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred. Please try again.");
      setIsButtonDisabled(false);  // Re-enable the button on error
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <h3 className="text-center mb-4">Sign Up</h3>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mt-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 mt-4"
                  disabled={isButtonDisabled}  // Disable the button after submission
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
