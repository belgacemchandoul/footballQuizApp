import { Game } from "../types/gameMode";

const GameCard: React.FC<Game> = ({ name, link, description }) => {
  return (
    <a href={link} className="border rounded-md flex flex-col ">
      <div className="bg-blue-500 h-1/2">image</div>
      <div className="flex flex-col justify-between gap-3 p-3">
        <p>{description}</p>
        <section className="flex justify-around">
          <span>{name}</span>
          <button>Play</button>
        </section>
      </div>
    </a>
  );
};

export default GameCard;
