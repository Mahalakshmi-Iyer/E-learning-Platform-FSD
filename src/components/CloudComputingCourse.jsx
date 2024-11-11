// src/components/CloudComputingCourse.jsx

import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const CloudComputingCourse = ({ enrollInCourse }) => {
  const navigate = useNavigate();  // Initialize the navigate function for routing

  const handleEnroll = () => {
    const course = {
      name: "Cloud Computing Essentials",
      progress: 0,  // New course starts with 0% progress
      slug: "cloud-computing",
    };

    // Enroll the user in the course
    enrollInCourse(course);

    // Optionally, navigate to the dashboard or courses page
    navigate("/");  // Navigate to the Dashboard
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Cloud Computing Essentials</h2>
      
      {/* Course Overview Section */}
      <Row className="mb-5">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Course Overview</Card.Title>
              <Card.Text>
                Cloud computing has revolutionized the way we store, access, and manage data. In this course, you'll learn the foundational concepts of cloud computing, key services, and how cloud technology is transforming industries. This course is designed for beginners with no prior knowledge of cloud computing required.
              </Card.Text>
              <Button variant="primary">Download Course Materials</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="/cloud-computing.png" alt="Cloud Computing Course"/>
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
                <ListGroup.Item>Understand the basics of cloud computing and cloud service models (IaaS, PaaS, SaaS)</ListGroup.Item>
                <ListGroup.Item>Learn about cloud deployment models (public, private, hybrid)</ListGroup.Item>
                <ListGroup.Item>Explore popular cloud platforms like AWS, Microsoft Azure, and Google Cloud</ListGroup.Item>
                <ListGroup.Item>Get hands-on experience with setting up cloud infrastructure and services</ListGroup.Item>
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
                  <strong>Lesson 1: Introduction to Cloud Computing</strong>
                  <p>Learn what cloud computing is, its advantages, and how it works.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 2: Cloud Service Models</strong>
                  <p>Understand the differences between IaaS, PaaS, and SaaS, and their use cases.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 3: Cloud Deployment Models</strong>
                  <p>Explore the different cloud deployment models and their advantages.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 4: Getting Started with AWS</strong>
                  <p>Learn how to set up and navigate AWS to deploy basic cloud services.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 5: Hands-on Cloud Project</strong>
                  <p>Put your skills to the test with a practical cloud computing project.</p>
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

export default CloudComputingCourse;
