// src/components/CoursesSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesSection.css'; 

const CoursesSection = ({ enrolledCourses }) => {
  return (
    <div className="courses-section">
      <h3>Enrolled Courses</h3>
      <div className="course-list">
        {enrolledCourses.map((course, index) => (
          <div key={index} className="course-item">
            <h4>{course.name}</h4>
            <div className="progress-bar-container">
              <progress value={course.progress} max="100"></progress>
              <span>{course.progress}%</span>
            </div>
            <Link to={`/courses/${course.slug}`} className="btn btn-primary">
              Go to Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
