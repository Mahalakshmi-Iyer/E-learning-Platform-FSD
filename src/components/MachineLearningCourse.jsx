// src/components/MachineLearningCourse.jsx

import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  

const MachineLearningCourse = ({ enrollInCourse }) => {
  const navigate = useNavigate();  

  const handleEnroll = () => {
    const course = {
      name: "Machine Learning Basics",
      progress: 0,  
      slug: "machine-learning",
    };

  
    enrollInCourse(course);

    navigate("/");  
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Machine Learning Basics</h2>
      
      {/* Course Overview Section */}
      <Row className="mb-5">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Course Overview</Card.Title>
              <Card.Text>
                Welcome to the Machine Learning Basics course! In this course, you'll learn the core principles of machine learning, including supervised and unsupervised learning, classification and regression techniques, and how to build your first machine learning model using Python and popular libraries like scikit-learn and TensorFlow. No prior knowledge of machine learning is required.
              </Card.Text>
              <Button variant="primary">Download Course Materials</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="/ml.png" alt="Machine Learning Course"/>
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
                <ListGroup.Item>Understand the fundamentals of machine learning and its types</ListGroup.Item>
                <ListGroup.Item>Learn about common machine learning algorithms like linear regression, decision trees, and k-means clustering</ListGroup.Item>
                <ListGroup.Item>Get hands-on experience using Python libraries such as scikit-learn and TensorFlow</ListGroup.Item>
                <ListGroup.Item>Build and evaluate basic machine learning models</ListGroup.Item>
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
                  <strong>Lesson 1: Introduction to Machine Learning</strong>
                  <p>Learn the basics of machine learning, including its types, applications, and importance in modern AI systems.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 2: Supervised Learning Algorithms</strong>
                  <p>Understand supervised learning techniques like regression and classification. Learn about linear regression and decision trees.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 3: Unsupervised Learning Algorithms</strong>
                  <p>Explore unsupervised learning techniques such as clustering and dimensionality reduction.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 4: Model Evaluation and Metrics</strong>
                  <p>Learn how to evaluate machine learning models using various metrics like accuracy, precision, recall, and F1-score.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 5: Building Your First Model with scikit-learn</strong>
                  <p>Hands-on experience building your first machine learning model using Python and scikit-learn.</p>
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

export default MachineLearningCourse;
