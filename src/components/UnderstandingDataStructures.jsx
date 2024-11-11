// src/components/UnderstandingDataStructures.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './UnderstandingDataStructures.css'; 

const UnderstandingDataStructures = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 title">Understanding Data Structures</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="article-title">Introduction</h3>
          <p className="article-text">
            Data structures are fundamental concepts in computer science. They provide a way to organize, manage, and store data in a format that enables efficient access and modification. Understanding data structures is crucial for efficient algorithm design and implementation.
          </p>

          <h3 className="article-title">Types of Data Structures</h3>
          <p className="article-text">
            There are several types of data structures, including:
          </p>
          <ul className="article-list">
            <li><strong>Arrays:</strong> A collection of elements identified by index or key.</li>
            <li><strong>Linked Lists:</strong> A linear collection of data elements where each element points to the next.</li>
            <li><strong>Stacks:</strong> A collection of elements that follows the Last In First Out (LIFO) principle.</li>
            <li><strong>Queues:</strong> A collection of elements that follows the First In First Out (FIFO) principle.</li>
            <li><strong>Trees:</strong> A hierarchical data structure consisting of nodes connected by edges.</li>
            <li><strong>Graphs:</strong> A set of nodes connected by edges, useful for representing networks.</li>
          </ul>

          <h3 className="article-title">Importance of Data Structures</h3>
          <p className="article-text">
            Choosing the right data structure can significantly impact the performance of an application. It can affect:
          </p>
          <ul className="article-list">
            <li>Time complexity of operations</li>
            <li>Memory usage</li>
            <li>Code maintainability and scalability</li>
          </ul>

          <h3 className="article-title">Conclusion</h3>
          <p className="article-text">
            In conclusion, understanding data structures is essential for any programmer. They form the backbone of effective algorithm design, enabling efficient data handling in software applications.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default UnderstandingDataStructures;
