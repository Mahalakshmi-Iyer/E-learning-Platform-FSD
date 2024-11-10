import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1>About Us</h1>
      <p>
        Welcome to <strong>TechOverflow</strong> — your ultimate gateway to mastering technology and
        achieving your professional goals. Whether you're a student, a professional, or a tech enthusiast, we are here to help you excel in the world of technology.
      </p>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img 
          src={`about1.webp`} 
          alt="About TechOverflow" 
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>

      <section>
        <h2>Our Mission</h2>
        <p>
          At TechOverflow, our mission is to provide high-quality, accessible, and engaging tech education 
          to learners of all backgrounds. We believe that technology is a powerful tool for transforming lives, 
          and our goal is to empower individuals to harness it effectively.
        </p>
      </section>

      <section>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Excellence:</strong> We are committed to delivering top-notch content and resources.</li>
          <li><strong>Inclusivity:</strong> Learning should be accessible to everyone, regardless of their background.</li>
          <li><strong>Innovation:</strong> We embrace new ideas and constantly adapt to the latest industry trends.</li>
          <li><strong>Community:</strong> We foster a supportive community of learners and educators.</li>
        </ul>
      </section>

      <section>
        <h2>Join Us</h2>
        <p>
          Ready to embark on your tech journey? Explore our wide range of courses, read our insightful articles, and participate in interactive quizzes. 
        </p>
        <p>
          <strong>Stay connected:</strong> Follow us on social media to stay updated with the latest content and community events.
        </p>
      </section>

      <p><em>Together, let's make learning tech skills an exciting and rewarding experience!</em></p>
    </div>
  );
};

export default About;
