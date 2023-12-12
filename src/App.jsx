import React from "react";
import countriesArray from "./countriesArray";
import { useState } from "react";

function App() {
  const [array, setArray] = useState(countriesArray);
  function shuffleArray(array) {
    const arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
  }

  function handleClick() {
    setArray(shuffleArray(array));
  }

  return (
    <div className="countries">
      {array.map(({ key, component }) => (
        <div className="country" onClick={handleClick} key={key}>
          {component()}
          <p className="country-title">{key}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
