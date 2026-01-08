import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { protectedRoutes } from './RouteConfig';
import MainLayout from '../layouts/MainLayout';
import NoHeaderLayout from '../layouts/NoHeaderLayout';

// Helper function to wrap components with layouts
const layoutWrapper = (layout, element) => {
  switch (layout) {
    case 'main':
      return <MainLayout>{element}</MainLayout>;
    case 'noHeader':
      return <NoHeaderLayout>{element}</NoHeaderLayout>;
    default:
      return element;
  }
};

const ProtectedRoutes = () => {
  return (
    <Routes>
      {/* Map through all protected routes */}
      {protectedRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={layoutWrapper(route.layout, route.element)}
        />
      ))}
      
      {/* Redirect from root to home */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      
      {/* Catch all other routes and redirect to home */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default ProtectedRoutes;