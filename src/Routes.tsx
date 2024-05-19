import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import About from './pages/About';
import HomePage from './pages/home2';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;