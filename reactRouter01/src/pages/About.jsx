import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. Learn more about our application here.</p>
      <div style={{ marginTop: '20px' }}>
        <h3>Features:</h3>
        <ul>
          <li>Protected routes with authentication</li>
          <li>Different layouts for different pages</li>
          <li>Lazy loading for better performance</li>
          <li>Professional routing structure</li>
        </ul>
      </div>
    </div>
  );
};

export default About;