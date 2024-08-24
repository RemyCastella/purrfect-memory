import React from 'react';

export default function Card({ cat, handleCardClick }) {
  return (
    <div className="card">
      <img src={cat.url} alt="cat" onClick={() => handleCardClick(cat.id)} />
    </div>
  );
}
