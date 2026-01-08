import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page! This is a protected route.</p>
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h3>Protected Content</h3>
        <p>Only logged-in users can see this page.</p>
      </div>
    </div>
  );
};

export default Home;