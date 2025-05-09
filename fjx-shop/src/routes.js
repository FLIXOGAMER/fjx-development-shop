import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import page components
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Support from './pages/Support';

/**
 * Routes configuration for the application
 * This component defines all available routes in the app
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />
      
      {/* Shop pages */}
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      
      {/* Support page */}
      <Route path="/support" element={<Support />} />
      
      {/* Fallback for unknown routes - redirect to home */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;