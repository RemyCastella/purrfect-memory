import React from 'react';

export default function Header({ score, highScore }) {
  return (
    <header>
      <h1 className="game-title">Purrfect Memory</h1>
      <div className="score-board">
        <p className="score-label">Score: {score}</p>
        <p className="score-label">High Score: {highScore}</p>
      </div>
    </header>
  );
}
