import { useEffect, useState } from "react";

export default function Header({ score = 0 }) {
  const [hiScore, setHiScore] = useState(0);

  useEffect(() => {
    setHiScore((prevHiScore) => (score > prevHiScore ? score : prevHiScore));
  }, [score, hiScore]);

  const LightDarkThemeIcon = () => (
    <svg viewBox="0 0 24 24">
      <g>
        <g>
          <g>
            <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20 L12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z"></path>
          </g>
        </g>
      </g>
    </svg>
  );

  function lightDarkToggle() {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  }

  return (
    <header>
      <h1>EU Country Memory Game</h1>
      <h2>Score - {score}</h2>
      <h2>High Score - {hiScore} </h2>
      <div className="light-dark" onClick={lightDarkToggle}>
        <LightDarkThemeIcon />
      </div>
    </header>
  );
}
