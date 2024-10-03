// src/pages/Login.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Welcome Back to TechOverflow</h2>
      <p>Please login to access your dashboard.</p>
      <LoginForm />
    </div>
  );
}

export default Login;
