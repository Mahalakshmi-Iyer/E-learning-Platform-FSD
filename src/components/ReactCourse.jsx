// src/components/ReactCourse.jsx
import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

const ReactCourse = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Introduction to React</h2>
      
      {/* Course Overview Section */}
      <Row className="mb-5">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Course Overview</Card.Title>
              <Card.Text>
                Welcome to the React programming course! In this course, you'll learn the fundamentals of React, including components, state management, props, and more. This course is designed for beginners, and no prior programming experience is required.
              </Card.Text>
              <Button variant="primary">Download Course Materials</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="/react1.jpeg" alt="React Course" />
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
                <ListGroup.Item>Understand React syntax and basic component structure</ListGroup.Item>
                <ListGroup.Item>Learn to manage state and props effectively</ListGroup.Item>
                <ListGroup.Item>Work with React hooks and lifecycle methods</ListGroup.Item>
                <ListGroup.Item>Build interactive UIs using React</ListGroup.Item>
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
                  <strong>Lesson 1: Introduction to React</strong>
                  <p>An overview of React, its applications, and setup instructions.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 2: Components and Props</strong>
                  <p>Learn how to create components and pass data using props.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 3: State Management</strong>
                  <p>Understand how to manage state in functional and class components.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 4: React Hooks</strong>
                  <p>Write functional components using hooks for state and effects.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                {/* Add more lessons as needed */}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="text-center">
        <Col>
          <Button variant="success" size="lg">Enroll Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ReactCourse;
