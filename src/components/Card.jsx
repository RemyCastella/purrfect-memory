import React from 'react';

export default function Card({ cats }) {
  const cat = cats[Math.floor(Math.random() * cats.length)];

  return (
    <div className="card">
      <img src={cat.url} alt="cat" />
    </div>
  );
}
