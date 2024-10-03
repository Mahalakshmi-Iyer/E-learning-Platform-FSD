// src/components/ArticlesPage.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ArticlesPage.css'; // Import custom CSS for hover effect

const articles = [
  {
    title: 'Understanding Data Structures',
    description: 'A comprehensive guide to data structures in computer science.',
    link: '/articles/data-structures', // Add links to each article
  },
  {
    title: 'Introduction to Algorithms',
    description: 'Learn about different algorithms and their applications.',
    link: '/articles/algorithms',
  },
  {
    title: 'The Basics of Operating Systems',
    description: 'An overview of operating system concepts and architecture.',
    link: '/articles/operating-systems',
  },
  {
    title: 'Web Development Essentials',
    description: 'Key concepts and technologies in web development.',
    link: '/articles/web-development',
  },
  {
    title: 'Exploring Machine Learning',
    description: 'An introduction to machine learning and its real-world applications.',
    link: '/articles/machine-learning',
  },
  {
    title: 'Getting Started with Cybersecurity',
    description: 'Fundamentals of cybersecurity and best practices.',
    link: '/articles/cybersecurity',
  },
];

const ArticlesPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Computer Science Articles</h2>
      <Row className="justify-content-center">
        {articles.map((article, index) => (
          <Col md={6} className="mb-4" key={index}>
            <Link to={article.link} className="text-decoration-none text-dark">
              <div className="text-center article-box">
                <h4>{article.title}</h4>
                <p>{article.description}</p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArticlesPage;
