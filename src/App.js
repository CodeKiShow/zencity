import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ZenSpots from './components/ZenSpots';
import ReligiousRoutes from './components/ReligiousRoutes';
import ThematicRoutes from './components/ThematicRoutes';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Routes>
        <Route path="/" element={<ZenSpots />} />
        <Route path="/religious" element={<ReligiousRoutes />} />
        <Route path="/routes" element={<ThematicRoutes />} />
      </Routes>
    </div>
  );
}