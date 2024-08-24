import { useState, useEffect } from 'react';
import key from '../key/key';
import Header from './components/Header';
import Gameboard from './components/GameBoard';

export default function App() {
  const score = 1;
  const highScore = 8;
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=48&api_key=${key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setCats(data)) //need to filter unique cats
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Gameboard cats={cats} />
    </>
  );
}
