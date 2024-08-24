import React from 'react';
import Card from './Card';

export default function Gameboard({ cats }) {
  const cardElements = cats.map((cat) => <Card cats={cats} />);

  return (
    <main>
      <p className="instruction">Don't choose the same card twice!</p>
      <div className="card-container">{cardElements}</div>
    </main>
  );
}
