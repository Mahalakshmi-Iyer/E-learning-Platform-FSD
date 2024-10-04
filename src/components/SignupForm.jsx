// src/components/SignupForm.jsx
import React from 'react';

function SignupForm() {
  return (
    <form className="signup-form">
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" className="form-control" placeholder="Enter full name" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Create a password" />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" className="form-control" placeholder="Confirm password" />
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
}

export default SignupForm;