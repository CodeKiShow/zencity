import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';

export default function Navigation() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-green-600">ZenCity</Link>
      </nav>
    </header>
  );
}