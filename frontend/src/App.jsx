import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PricingPage from './components/Pricing/Pricing.jsx'; // Import your PricingPage component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for Home Page */}
          <Route path="/" element={<Home />} />

          {/* Route for Pricing Page */}
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
