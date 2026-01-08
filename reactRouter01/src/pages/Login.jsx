import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Simple validation
    if (!credentials.email || !credentials.password) {
      setError('Please fill in all fields');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      // For demo: accept any email/password
      localStorage.setItem('auth', 'user-token-' + Date.now());
      localStorage.setItem('user', JSON.stringify({
        email: credentials.email,
        name: credentials.email.split('@')[0]
      }));
      
      // Redirect to where user came from or home
      const from = location.state?.from || '/home';
      navigate(from, { replace: true });
    }, 500);
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '50px auto', 
      padding: '30px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h1>
      
      {error && (
        <div style={{
          backgroundColor: '#ffe6e6',
          color: '#cc0000',
          padding: '10px',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
            placeholder="Enter your password"
            required
          />
        </div>
        
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          Login
        </button>
      </form>
      
      <div style={{ textAlign: 'center', color: '#666' }}>
        <p>Demo: Use any email and password</p>
        <p style={{ marginTop: '20px' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#007bff' }}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;