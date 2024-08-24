import React from 'react';
import derpyCat from '/derpyCat.jpg';

export default function GameOver({ setGameOver, setScore, setCats }) {
  function handlePlayAgain() {
    setScore(0);
    setCats([]);
    setGameOver(false);
  }

  return (
    <main className="game-over">
      <img className="game-over" src={derpyCat} alt="oh lawd he derpy" />
      <h2 className="game-over">Game Over!</h2>
      <button className="game-over" onClick={handlePlayAgain}>
        Play Again
      </button>
    </main>
  );
}
