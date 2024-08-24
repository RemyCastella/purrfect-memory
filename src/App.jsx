import { useState, useEffect } from 'react';
import key from '../key/key';
import Header from './components/Header';
import Gameboard from './components/GameBoard';
import GameOver from './components/GameOver';

export default function App() {
  const [cats, setCats] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    localStorage.getItem('highScore') ?? 0
  );
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      fetch(
        `https://api.thecatapi.com/v1/images/search?limit=24&api_key=${key}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setCats(data);
        })
        .catch((error) => console.log(error));
    }
  }, [gameOver]);

  function handleGameOver() {
    setGameOver(true);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', score);
    }
  }

  return (
    <>
      <Header score={score} highScore={highScore} />
      {gameOver ? (
        <GameOver setGameOver={setGameOver} setScore={setScore} />
      ) : (
        <Gameboard
          cats={cats}
          setScore={setScore}
          handleGameOver={handleGameOver}
        />
      )}
      <footer>
        <p>© 2024 Remy Castella. All rights reserved.</p>
      </footer>
    </>
  );
}
