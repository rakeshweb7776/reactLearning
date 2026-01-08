import React from 'react';

const Loader = ({ size = 40, height = '100vh', color = '#3498db' }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      height: height,
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }}>
      <div 
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `3px solid #f3f3f3`,
          borderTop: `3px solid ${color}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;