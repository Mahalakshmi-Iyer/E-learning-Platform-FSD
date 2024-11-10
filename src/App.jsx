// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

import Navigation from './components/Navbar';
import Signup from './components/SignupForm';
import Login from './components/Login';
import CoursesPage from './components/CoursesPage';
import PythonCourse from './components/PythonCourse';
import ReactCourse from './components/ReactCourse';
import ArticlesPage from './components/ArticlesPage';
import UnderstandingDataStructures from './components/UnderstandingDataStructures';
import QuizzesPage from './components/QuizzesPage';
import PythonQuiz from './components/PythonQuiz';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  // Set up a state to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in using localStorage
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Handle logout by setting isLoggedIn to false and clearing localStorage
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <div className="banner">
              <header className="text-center my-5">
                <h1 className="banner-text">Let's make learning fun!</h1>
                <p className="banner-subtext">Begin your programming journey with TechOverflow</p>
              </header>
            </div>

            <Container>
              <section className="my-5">
                <h2 className="text-center">What makes TechOverflow special?</h2>
                <Row className="text-center">
                  <Col md={4}>
                    <div className="p-3">
                      <img 
                        src="curatedTutorials.png" 
                        alt="Curated Tutorials" 
                        className="uniform-img"
                      />
                      <h4>Curated Tutorials</h4>
                      <p>Find tutorials tailored to your needs.</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-3">
                      <img 
                        src="interactiveTests.jpg" 
                        alt="Interactive Quizzes" 
                        className="uniform-img"
                      />
                      <h4>Interactive Quizzes</h4>
                      <p>Test your knowledge with engaging quizzes.</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-3">
                      <img 
                        src="techBlogs.png" 
                        alt="Tech Blogs" 
                        className="uniform-img"
                      />
                      <h4>Tech Blogs</h4>
                      <p>Stay updated with the latest in tech.</p>
                    </div>
                  </Col>
                </Row>
              </section>
            </Container>

            <section className="bg-secondary text-white text-center py-5">
              {/* Carousel */}
              <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {/* First Slide: Signup/Register */}
                  <div className="carousel-item active">
                    <div className="d-flex flex-column align-items-center">
                      <img 
                        src="signup1.jpg" 
                        alt="Sign Up" 
                        className="img-fluid mb-3" 
                        style={{ width: '30%', height: '200px', borderRadius: '10px' }} 
                      />
                      <h4>Sign Up to Get Started</h4>
                      <p>Create your account and get access to our powerful online IDE.</p>
                      <Button variant="light" as={Link} to="/signup" disabled={isLoggedIn}>Register Now</Button>
                    </div>
                  </div>

                  {/* Second Slide: Courses */}
                  <div className="carousel-item">
                    <div className="d-flex flex-column align-items-center">
                      <img 
                        src="courses1.webp" 
                        alt="Courses" 
                        className="img-fluid mb-3" 
                        style={{ width: '50%', height: '200px', borderRadius: '10px' }} 
                      />
                      <h4>Explore Our Courses</h4>
                      <p>Choose from a wide range of courses and start learning today.</p>
                      <Button variant="light" as={Link} to="/courses" disabled={!isLoggedIn}>View Courses</Button>
                    </div>
                  </div>

                  {/* Third Slide: Articles & Quizzes */}
                  <div className="carousel-item">
                    <div className="d-flex flex-column align-items-center">
                      <img 
                        src="quizzes1.avif" 
                        alt="Articles & Quizzes" 
                        className="img-fluid mb-3" 
                        style={{ width: '30%', height: '200px', borderRadius: '10px' }} 
                      />
                      <h4>Articles & Quizzes</h4>
                      <p>Read insightful articles and test your knowledge with quizzes.</p>
                      <Button variant="light" as={Link} to="/articles" disabled={!isLoggedIn}>Start Learning</Button>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            <Container>
              <section className="my-5">
                <h2 className="text-center">Specialization Tracks</h2>
                <br />
                <Row>
                  <Col md={4}>
                    <div className="p-3 bg-light border d-flex flex-column align-items-center">
                      <h4>Data Science Track</h4>
                      <img 
                        src={'data.png'} 
                        alt="Data Science Track" 
                        className="img-fluid mb-3"
                        style={{ height: '150px', objectFit: 'cover' }}
                      />
                      <p>Start learning about data science fundamentals.</p>
                      <Button variant="primary" disabled={!isLoggedIn}>Start Learning</Button>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-3 bg-light border d-flex flex-column align-items-center">
                      <h4>App Development Track</h4>
                      <img 
                        src={'android.jpeg'} 
                        alt="App Development Track" 
                        className="img-fluid mb-3"
                        style={{ height: '150px', objectFit: 'cover' }}
                      />
                      <p>Build your skills in mobile and web app development.</p>
                      <Button variant="primary" disabled={!isLoggedIn}>Start Learning</Button>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="p-3 bg-light border d-flex flex-column align-items-center">
                      <h4>Cloud Technologies Track</h4>
                      <img 
                        src={'cloudFin.jpeg'} 
                        alt="Cloud Technologies Track" 
                        className="img-fluid mb-3"
                        style={{ height: '150px', objectFit: 'cover' }}
                      />
                      <p>Master the cloud with our expert-led courses.</p>
                      <Button variant="primary" disabled={!isLoggedIn}>Start Learning</Button>
                    </div>
                  </Col>
                </Row>
              </section>
            </Container>

          </>
        }/>

        {/* Routes for other components */}
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/python" element={<PythonCourse />} />
        <Route path="/courses/react" element={<ReactCourse />} />
        <Route path="/articles" element={<ArticlesPage />} /> 
        <Route path="/articles/data-structures" element={<UnderstandingDataStructures />} />
        <Route path="/quizzes" element={<QuizzesPage />} /> 
        <Route path="/quizzes/python" element={<PythonQuiz />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

      </Routes>

      {/* Display Profile Button if Logged In */}
      {isLoggedIn && (
        <div className="profile-button-container">
          <Button onClick={handleLogout} variant="light">Logout</Button>
        </div>
      )}

      <Footer />
    </Router>
  );
}

export default App;