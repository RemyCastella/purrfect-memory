import React, { useState } from 'react';
import shuffle from '../../utils/shuffle';
import Card from './Card';

export default function Gameboard({ cats, setScore, handleGameOver }) {
  const [selectedCats, setSelectedCats] = useState([]);
  const shuffledCats = shuffle(cats);
  const shownCats = [];

  if (cats.length === 0) {
    return (
      <main className="game-board">
        <p className="instruction">Don't choose the same card twice!</p>
        <h2 className="loading-board">Loading images...</h2>;
      </main>
    );
  }

  for (let i = 0; i < 12; i++) {
    shownCats.push(shuffledCats[i]);
  }

  function handleCardClick(selectedId) {
    if (selectedCats.includes(selectedId)) {
      console.log('Game Over');
      handleGameOver();
    } else {
      setSelectedCats((prevCats) => [...prevCats, selectedId]);
      setScore((prevScore) => prevScore + 1);
    }
  }

  const shownCatElements = shownCats.map((cat) => (
    <Card key={cat.id} cat={cat} handleCardClick={handleCardClick} />
  ));

  return (
    <main className="game-board">
      <p className="instruction">Don't choose the same card twice!</p>
      <div className="card-container">{shownCatElements}</div>
    </main>
  );
}
