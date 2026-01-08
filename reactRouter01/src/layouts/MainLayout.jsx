import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('auth');
  
  const user = isLoggedIn 
    ? JSON.parse(localStorage.getItem('user') || '{}') 
    : null;

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '0 20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '60px'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/home" style={{ 
              color: 'white', 
              textDecoration: 'none',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>
              MyApp
            </Link>
          </div>

          {/* Navigation */}
          <nav>
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              gap: '20px',
              margin: 0,
              padding: 0
            }}>
              <li>
                <Link 
                  to="/home" 
                  style={{ 
                    color: isActive('/home') ? '#3498db' : 'white',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    backgroundColor: isActive('/home') ? 'rgba(255,255,255,0.1)' : 'transparent',
                    transition: 'all 0.3s'
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  style={{ 
                    color: isActive('/about') ? '#3498db' : 'white',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    backgroundColor: isActive('/about') ? 'rgba(255,255,255,0.1)' : 'transparent',
                    transition: 'all 0.3s'
                  }}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* User Info/Login */}
          <div>
            {isLoggedIn ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '14px' }}>
                  Welcome, <strong>{user?.name || 'User'}</strong>
                </span>
                <button
                  onClick={handleLogout}
                  style={{
                    padding: '6px 15px',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                style={{ 
                  color: 'white',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  backgroundColor: '#3498db',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        flex: 1,
        padding: '30px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#34495e',
        color: '#ecf0f1',
        padding: '20px',
        marginTop: 'auto'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p>© 2024 My Application. All rights reserved.</p>
          <div style={{ marginTop: '10px', fontSize: '14px' }}>
            <Link to="/home" style={{ color: '#bdc3c7', margin: '0 10px' }}>
              Home
            </Link>
            <Link to="/about" style={{ color: '#bdc3c7', margin: '0 10px' }}>
              About
            </Link>
            <span style={{ color: '#7f8c8d', margin: '0 10px' }}>|</span>
            <span>Built with React Router</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;