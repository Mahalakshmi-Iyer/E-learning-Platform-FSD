// src/components/MobileAppDevelopmentCourse.jsx

import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  

const MobileAppDevelopmentCourse = ({ enrollInCourse }) => {
  const navigate = useNavigate(); 

  const handleEnroll = () => {
    const course = {
      name: "Mobile App Development",
      progress: 0,  
      slug: "mobile-app-development",
    };

  
    enrollInCourse(course);

    
    navigate("/");  
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Mobile App Development</h2>
      
      {/* Course Overview Section */}
      <Row className="mb-5">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Course Overview</Card.Title>
              <Card.Text>
                Welcome to the Mobile App Development course! In this course, you'll learn how to build mobile applications from scratch using modern frameworks like React Native and Flutter. Whether you're looking to develop for Android, iOS, or both, this course will guide you through the essential concepts and techniques.
              </Card.Text>
              <Button variant="primary">Download Course Materials</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="/android-logo.png" alt="Mobile App Development"/>
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
                <ListGroup.Item>Understand the basics of mobile app development and the mobile app lifecycle</ListGroup.Item>
                <ListGroup.Item>Learn how to build cross-platform apps using React Native or Flutter</ListGroup.Item>
                <ListGroup.Item>Work with APIs and handle data in mobile applications</ListGroup.Item>
                <ListGroup.Item>Publish and deploy your mobile apps to Google Play Store and Apple App Store</ListGroup.Item>
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
                  <strong>Lesson 1: Introduction to Mobile App Development</strong>
                  <p>Overview of mobile app development, tools, and frameworks used in the industry.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 2: Getting Started with React Native</strong>
                  <p>Setting up React Native environment and building your first app.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 3: Building UIs with React Native</strong>
                  <p>Learn to design mobile app interfaces using React Native components and styling.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 4: Working with APIs and Databases</strong>
                  <p>Integrate APIs and work with local databases like SQLite or Firebase.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 5: Deploying Your Mobile App</strong>
                  <p>Learn the process of deploying and publishing your app to the App Store and Google Play.</p>
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

export default MobileAppDevelopmentCourse;
