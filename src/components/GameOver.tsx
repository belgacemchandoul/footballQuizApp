import { Link } from "react-router-dom";
import Button from "./Button";

type GameOver = {
  score: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const GameOver = ({ score, onClick }: GameOver) => {
  return (
    <section className="flex flex-col items-center gap-4">
      <span className="font-semibold text-2xl text-[#2F4F4F]">
        {score >= 3 ? "Well played" : "Nice try"}
      </span>
      <div className="text-[#2F4F4F] font-light">
        You got {score} correct answers!{" "}
        {score >= 3 ? "You did well!" : "Better luck next time!"}
      </div>
      <section className="flex gap-5">
        <Button text="Play again" onClick={onClick} />
        <Link to="/">
          <Button text="Home" />
        </Link>
      </section>
    </section>
  );
};

export default GameOver;
