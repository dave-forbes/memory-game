import { useEffect, useState } from "react";

export default function Header({ score = 0 }) {
  const [hiScore, setHiScore] = useState(0);

  useEffect(() => {
    setHiScore((prevHiScore) => (score > prevHiScore ? score : prevHiScore));
  }, [score, hiScore]);

  const LightDarkThemeIcon = () => (
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>ic_fluent_dark_theme_24_filled</title>{" "}
        <desc>Created with Sketch.</desc>{" "}
        <g
          id="🔍-Product-Icons"
          stroke="none"
          strokeWidth="1"
          fillRule="evenodd"
        >
          {" "}
          <g id="ic_fluent_dark_theme_24_filled" fillRule="nonzero">
            {" "}
            <path
              d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20 L12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z"
              id="🎨-Color"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
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
