import React, { lazy } from 'react';

// Lazy load all pages for better performance
const Home = lazy(() => import('../pages/Home.jsx'));
const About = lazy(() => import('../pages/About.jsx'));
const Login = lazy(() => import('../pages/Login.jsx'));
const Registration = lazy(() => import('../pages/Registration.jsx'));

// Public routes (no authentication required)
export const publicRoutes = [
  {
    path: '/login',
    element: <Login />,
    layout: 'noHeader'
  },
  {
    path: '/register',
    element: <Registration />,
    layout: 'noHeader'
  }
];

// Protected routes (authentication required)
export const protectedRoutes = [
  {
    path: '/home',
    element: <Home />,
    layout: 'main'
  },
  {
    path: '/about',
    element: <About />,
    layout: 'main'
  }
];