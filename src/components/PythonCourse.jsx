// src/components/PythonCourse.jsx

import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  

const PythonCourse = ({ enrollInCourse }) => {
  const navigate = useNavigate();  

  const handleEnroll = () => {
    const course = {
      name: "Python for Beginners",
      progress: 0,  
      slug: "python",
    };

    enrollInCourse(course);

   
    navigate("/");  
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Introduction to Python</h2>
      
      {/* Course Overview Section */}
      <Row className="mb-5">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Course Overview</Card.Title>
              <Card.Text>
                Welcome to the Python programming course! In this course, you'll learn the fundamentals of Python, including variables, data types, loops, functions, and more. This course is designed for beginners, and no prior programming experience is required.
              </Card.Text>
              <Button variant="primary">Download Course Materials</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="/py.png" alt="Python Course"/>
          </Card>
        </Col>
      </Row>

      {/* Learning Objectives Section */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Learning Objectives</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Understand Python syntax and basic data types</ListGroup.Item>
                <ListGroup.Item>Learn to write Python functions and control flow statements</ListGroup.Item>
                <ListGroup.Item>Work with lists, dictionaries, and other data structures</ListGroup.Item>
                <ListGroup.Item>Implement Python code for problem-solving</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Course Content Section */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Course Content</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Lesson 1: Introduction to Python</strong>
                  <p>An overview of Python, its applications, and setup instructions.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 2: Variables and Data Types</strong>
                  <p>Learn how to declare variables and explore different data types.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 3: Control Flow (If, Else, Loops)</strong>
                  <p>Understand how to use if-else statements and loops in Python.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 4: Functions and Modules</strong>
                  <p>Write functions and use modules to organize code effectively.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="text-center">
        <Col>
          <Button variant="success" size="lg" onClick={handleEnroll}>Enroll Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PythonCourse;
