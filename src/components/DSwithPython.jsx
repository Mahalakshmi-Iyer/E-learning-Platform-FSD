// src/components/DSwithPython.jsx

import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  

const DSwithPython = ({ enrollInCourse }) => {
  const navigate = useNavigate();  

  const handleEnroll = () => {
    const course = {
      name: "Data Science with Python",
      progress: 0,  
      slug: "data-science-python",
    };

    enrollInCourse(course);

    navigate("/"); 
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Data Science with Python</h2>
      
      {/* Course Overview Section */}
      <Row className="mb-5">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Course Overview</Card.Title>
              <Card.Text>
                Welcome to the Data Science with Python course! In this course, you'll learn how to use Python for data analysis, statistical modeling, and machine learning. You'll gain practical experience working with libraries such as Pandas, NumPy, and Scikit-learn, as well as techniques for data visualization and preprocessing.
              </Card.Text>
              <Button variant="primary">Download Course Materials</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="/data.png" alt="Data Science with Python Course"/>
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
                <ListGroup.Item>Understand data manipulation using Pandas and NumPy</ListGroup.Item>
                <ListGroup.Item>Perform data visualization with Matplotlib and Seaborn</ListGroup.Item>
                <ListGroup.Item>Learn machine learning techniques using Scikit-learn</ListGroup.Item>
                <ListGroup.Item>Implement data cleaning and preprocessing techniques</ListGroup.Item>
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
                  <strong>Lesson 1: Introduction to Data Science and Python</strong>
                  <p>An overview of Data Science, its applications, and Python setup for data analysis.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 2: Data Manipulation with Pandas</strong>
                  <p>Learn how to manipulate and analyze data using the Pandas library.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 3: Data Visualization with Matplotlib and Seaborn</strong>
                  <p>Create stunning visualizations and charts to understand the data.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 4: Machine Learning with Scikit-learn</strong>
                  <p>Learn how to build machine learning models using Scikit-learn.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Lesson 5: Data Cleaning and Preprocessing</strong>
                  <p>Understand how to clean and preprocess raw data for analysis.</p>
                  <Button variant="outline-primary" size="sm">Start Lesson</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

  
      <Row className="text-center">
        <Col>
          <Button variant="success" size="lg" onClick={handleEnroll}>Enroll Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DSwithPython;
