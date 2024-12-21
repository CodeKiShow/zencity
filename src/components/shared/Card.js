import React from 'react';

export default function Card({ children }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {children}
    </div>
  );
}