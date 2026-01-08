import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './components/common/RequireAuth';
import Loader from './components/common/Loader';

// Lazy load ProtectedRoutes
const ProtectedRoutes = React.lazy(() => import('./routes/ProtectedRoutes'));
// Import public routes
import { publicRoutes } from './routes/RouteConfig';

function App() {
  return (
    <Router>
      {/* Suspense for lazy loading with fallback loader */}
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.layout === 'noHeader' ? (
                  <div className="auth-layout">
                    {route.element}
                  </div>
                ) : (
                  route.element
                )
              }
            />
          ))}
          
          {/* Protected Routes */}
          <Route
            path="/*"
            element={
              <RequireAuth>
                <ProtectedRoutes />
              </RequireAuth>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;