import "./score.css";
import { useRef } from "react";

interface ScoreProps {
  score: number;
}

const Score = ({ score }: ScoreProps) => {
  const ref = useRef<HTMLDivElement>(null);
  let ref2 = useRef(0);

  if (score < ref2.current) {
    ref2.current = 0;
  }

  let value = 0;
  if (ref.current) {
    value = ref2.current;
  }

  let speed = 20;
  if (score - value >= 256) {
    speed = 10;
  }

  if (value && value !== score) {
    const interval = setInterval(function count() {
      value++;
      if (ref.current) ref.current.textContent = value.toString();
      if (value === score) {
        clearInterval(interval);
      }
    }, speed);
  }

  ref2.current = score;

  return (
    <div className="scoreInfo">
      <span>Score: </span>
      <div className="score" ref={ref}>
        {score}
      </div>
    </div>
  );
};

export default Score;
