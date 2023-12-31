import Header from "./Header";
import FlagContainer from "./FlagContainer";
import { useState, useRef } from "react";
import FlagArray from "./FlagArray";
import GameOver from "./GameOver";

export default function App() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [array, setArray] = useState(FlagArray);

  const clickedFlags = useRef([]);

  function reset() {
    setScore(0);
    setGameOver(false);
    setArray(shuffleArray(array));
    clickedFlags.current = [];
  }

  function shuffleArray(array) {
    const arrayCopy = [...array];
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (array.length - 1));
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
  }

  return (
    <>
      <Header score={score} />
      {gameOver ? (
        <GameOver onClick={() => reset()} />
      ) : (
        <FlagContainer
          addToScore={() => setScore(score + 1)}
          gameOver={() => setGameOver(true)}
          shuffleArray={() => setArray(shuffleArray(array))}
          array={array}
          clickedFlags={clickedFlags.current}
        />
      )}
    </>
  );
}
