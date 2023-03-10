import "./score.css";

interface ScoreProps {
  score: number;
}

const Score = ({ score }: ScoreProps) => {
  let value = 0;
  const counter = document.querySelector(".score");
  if (counter) {
    value = Number(counter.innerHTML);
  }

  let speed = 20;
  if (score - value >= 256) {
    speed = 10;
  }

  if (value && value !== score) {
    const interval = setInterval(function count() {
      value++;
      if (counter) counter.innerHTML = value.toString();
      if (value === score) {
        clearInterval(interval);
      }
    }, speed);
  }

  return (
    <div className="scoreInfo">
      <span>Score: </span>
      <div className="score">{score}</div>
    </div>
  );
};

export default Score;
