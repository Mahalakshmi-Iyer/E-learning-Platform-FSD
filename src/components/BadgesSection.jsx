import React from 'react';
import './BadgesSection.css';

const BadgesSection = ({ badges }) => (
  <div className="badges-section">
    <h3>Badges Earned</h3>
    <div className="badge-list">
      {badges.map((badge, index) => (
        <span key={index} className={`badge badge-${badge.color}`}>
          ★
        </span>
      ))}
    </div>
  </div>
);

export default BadgesSection;

