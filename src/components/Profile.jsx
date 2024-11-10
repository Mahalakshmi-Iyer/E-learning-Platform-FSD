// Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/user/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfileData(response.data);
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile Page</h2>
      {profileData ? (
        <div>
          <p>Email: {profileData.email}</p>
          {/* Add more profile data here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
