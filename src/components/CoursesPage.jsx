import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const courses = [
  {
    title: 'Introduction to Python',
    description: 'Learn the basics of Python programming.',
    image: 'py.png',
    link: '/courses/python', 
  },
  {
    title: 'Web Development with React',
    description: 'Build dynamic websites using React.',
    image: 'react1.jpeg',
    link: '/courses/react', 
  },
  {
    title: 'Data Science with Python',
    description: 'Explore data science using Python libraries.',
    image: 'data.png',
    link: '/courses/ds-with-python', 
  },
  {
    title: 'Cloud Computing Essentials',
    description: 'Master the basics of cloud computing.',
    image: 'cloudFin.jpeg',
    link: '/courses/cloud-computing', 
  },
  {
    title: 'Mobile App Development',
    description: 'Learn to develop mobile applications.',
    image: 'android-logo.png',
    link: '/courses/mobile-app-development',
  },
  {
    title: 'Machine Learning Basics',
    description: 'Get started with machine learning.',
    image: 'ml.png',
    link: '/courses/machine-learning', 
  },
];

const CoursesPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Courses</h2>
      <Row>
        {courses.map((course, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={course.image} alt={course.title} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Link to={course.link}>
                  <Button variant="primary">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoursesPage;
