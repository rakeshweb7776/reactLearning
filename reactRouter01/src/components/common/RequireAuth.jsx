import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = localStorage.getItem('auth');

  if (!auth) {
    // Store the attempted location for redirect after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};

export default RequireAuth;