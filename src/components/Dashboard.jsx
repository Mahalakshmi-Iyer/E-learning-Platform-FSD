import React, { useState } from 'react';
import ProfileSection from './ProfileSection';
import BadgesSection from './BadgesSection';
import CoursesSection from './CoursesSection';
import TodoListSection from './TodoListSection';
import './Dashboard.css';

const Dashboard = () => {
  // User state
  const [user] = useState({
    name: "John Doe",
    profile: "Learner at TechOverflow",
    profilePicture: "profile.jpg", 
  });

  const [badges] = useState([
    { color: 'gold' },
    { color: 'silver' },
    { color: 'bronze' },
  ]);

  const [enrolledCourses] = useState([
    { name: "React Fundamentals", progress: 80, slug: "react" },  // slug for routing
    { name: "Python for Beginners", progress: 60, slug: "python" },
  ]);

  // To-do list state
  const [todos, setTodos] = useState([
    "Finish React course",
    "Take Python quiz",
    "Read the latest article",
  ]);

  const addTodo = (todo) => setTodos([...todos, todo]);

  return (
    <div className="dashboard">
      <div className="left-column">
        <ProfileSection user={user} />
        <BadgesSection badges={badges} />
      </div>

      <div className="middle-column">
        <CoursesSection enrolledCourses={enrolledCourses} />
      </div>

      
      <div className="right-column">
        <div className="quote-section">
          <p>"The journey of a thousand lines begins with a single character."</p>
        </div>
        <TodoListSection todos={todos} addTodo={addTodo} />
      </div>
    </div>
  );
};



export default Dashboard;
