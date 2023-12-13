export default function GameOver({ onClick }) {
  return (
    <div className="game-over-container">
      <h1>Game Over</h1>
      <button onClick={onClick}>Play Again</button>
    </div>
  );
}
