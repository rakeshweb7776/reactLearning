import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('auth', 'user-token-' + Date.now());
      localStorage.setItem('user', JSON.stringify({
        name: formData.name,
        email: formData.email
      }));
      
      setSuccess('Registration successful! Redirecting...');
      
      // Redirect to home after 2 seconds
      setTimeout(() => {
        navigate('/home', { replace: true });
      }, 2000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
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
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Register</h1>
      
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
      
      {success && (
        <div style={{
          backgroundColor: '#e6ffe6',
          color: '#009900',
          padding: '10px',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          {success}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
            Password *
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
            placeholder="At least 6 characters"
            required
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Confirm Password *
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
            placeholder="Confirm your password"
            required
          />
        </div>
        
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          Create Account
        </button>
      </form>
      
      <div style={{ textAlign: 'center', color: '#666' }}>
        <p style={{ marginTop: '20px' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#007bff' }}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;