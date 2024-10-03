// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import CoursesPage from './components/CoursesPage';
import PythonCourse from './components/PythonCourse'; // Import the new Python course component
import ReactCourse from './components/ReactCourse';
import ArticlesPage from './components/ArticlesPage'; // Import the Articles page
import UnderstandingDataStructures from './components/UnderstandingDataStructures';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <header className="text-center my-5">
              <h1>Let's make learning fun!</h1>
              <p>Begin your programming journey with TechOverflow</p>
            </header>

            <Container>
              <section className="my-5">
                <h2 className="text-center">What makes TechOverflow special?</h2>
                <Row className="text-center">
                  <Col md={4}>
                    <div className="p-3">
                      <img src="curatedTutorials.png" alt="Curated Tutorials" className="img-fluid" />
                      <h4>Curated Tutorials</h4>
                      <p>Find tutorials tailored to your needs.</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-3">
                      <img src="interactiveTests.jpg" alt="Interactive Quizzes" className="img-fluid" />
                      <h4>Interactive Quizzes</h4>
                      <p>Test your knowledge with engaging quizzes.</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-3">
                      <img src="techBlogs.png" alt="Tech Blogs" className="img-fluid" />
                      <h4>Tech Blogs</h4>
                      <p>Stay updated with the latest in tech.</p>
                    </div>
                  </Col>
                </Row>
              </section>
            </Container>

            <section className="bg-primary text-white text-center py-5">
              <h2>Try our online IDE for free</h2>
              <p>Just create your account and explore our IDE</p>
            </section>

            <Container>
              <section className="my-5">
                <h2 className="text-center">Specialization Tracks</h2>
                <Row>
                  <Col md={4}>
                    <div className="p-3 bg-light border">
                      <h4>Data Science Track</h4>
                      <p>Start learning about data science fundamentals.</p>
                      <Button variant="primary">Start Learning</Button>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-3 bg-light border">
                      <h4>App Development Track</h4>
                      <p>Build your skills in mobile and web app development.</p>
                      <Button variant="primary">Start Learning</Button>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-3 bg-light border">
                      <h4>Cloud Technologies Track</h4>
                      <p>Master the cloud with our expert-led courses.</p>
                      <Button variant="primary">Start Learning</Button>
                    </div>
                  </Col>
                </Row>
              </section>
            </Container>
          </>
        }/>
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/python" element={<PythonCourse />} />
        <Route path="/courses/react" element={<ReactCourse />} />
        <Route path="/articles" element={<ArticlesPage />} /> 
        <Route path="/articles/data-structures" element={<UnderstandingDataStructures />} />
      </Routes>
    </Router>
  );
}

export default App;
