export default function FlagContainer({
  addToScore,
  gameOver,
  shuffleArray,
  array,
  clickedFlags,
}) {
  function handleClick(e) {
    const node = e.target;
    let data = node.getAttribute("data-index")
      ? node.getAttribute("data-index")
      : node.parentElement.parentElement.getAttribute("data-index");
    if (clickedFlags.includes(data)) {
      gameOver();
    } else {
      clickedFlags.push(data);
      shuffleArray();
      addToScore();
    }
  }

  return (
    <div className="countries">
      {array.map(({ key, component }) => (
        <div
          className="country"
          onClick={handleClick}
          key={key}
          data-index={key}
        >
          {component()}
          <p data-index={key} className="country-title">
            {key}
          </p>
        </div>
      ))}
    </div>
  );
}
