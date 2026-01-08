import React from 'react';
import { Link } from 'react-router-dom';

const NoHeaderLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Minimal header for auth pages */}
      <div style={{
        padding: '15px 20px',
        backgroundColor: 'white',
        borderBottom: '1px solid #eaeaea'
      }}>
        <Link 
          to="/" 
          style={{ 
            color: '#2c3e50',
            textDecoration: 'none',
            fontSize: '20px',
            fontWeight: 'bold'
          }}
        >
          MyApp
        </Link>
      </div>
      
      {/* Page Content */}
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default NoHeaderLayout;