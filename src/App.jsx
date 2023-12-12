import React from "react";
import countriesArray from "./countriesArray";

function App() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledArray = shuffleArray([...countriesArray]);
  return (
    <div className="countries">
      {shuffledArray.map(({ key, component }) => (
        <div className="country" key={key}>
          {component()}
          <p className="country-title">{key}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
