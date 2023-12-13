import { useEffect, useState } from "react";

export default function Header({ score = 0 }) {
  const [hiScore, setHiScore] = useState(0);

  useEffect(() => {
    setHiScore((prevHiScore) => (score > prevHiScore ? score : prevHiScore));
  }, [score, hiScore]);

  return (
    <header>
      <h1>EU Country Memory Game</h1>
      <h2>Score - {score} out of 27 </h2>
      <h2>High Score - {hiScore} </h2>
    </header>
  );
}
