// src/components/QuizzesPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const quizzes = [
  { title: 'Python Quiz', link: '/quizzes/python' },
  { title: 'React Quiz', link: '#' },
  { title: 'Data Science Quiz', link: '#' },
  { title: 'Cloud Computing Quiz', link: '#' },
  { title: 'Machine Learning Quiz', link: '#' },
  { title: 'Cybersecurity Quiz', link: '#' },
];

const QuizzesPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Quizzes</h2>
      <Row className="justify-content-center">
        {quizzes.map((quiz, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Link to={quiz.link} className="text-decoration-none">
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>{quiz.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default QuizzesPage;
