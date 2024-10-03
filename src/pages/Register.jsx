// src/pages/Register.jsx
import React from 'react';
import SignupForm from '../components/SignupForm';
import '../styles/Register.css';

function Register() {
  return (
    <div className="register-container">
      <div className="register-left">
        <h2>Create Your Account</h2>
        <p>Stay updated with our latest courses and news. Subscribe to our newsletter!</p>
        <input type="email" className="form-control" placeholder="Enter your email" />
        <button type="submit" className="btn btn-secondary mt-2">Subscribe</button>
      </div>
      <div className="register-right">
        <SignupForm />
      </div>
    </div>
  );
}

export default Register;
