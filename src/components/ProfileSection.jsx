import React from 'react';
import './ProfileSection.css';

const ProfileSection = ({ user }) => (
  <div className="profile-section">
    <img src={user.profilePicture} alt="Profile" className="profile-picture" />
    <h2>Welcome, {user.name}</h2>
    <p>{user.profile}</p>
  </div>
);

export default ProfileSection;
