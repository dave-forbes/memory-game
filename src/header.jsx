export default function Header({ score = 0 }) {
  return (
    <header>
      <h1>EU Country Memory Game</h1>
      <h2>Score - {score} out of 27 </h2>
    </header>
  );
}
