import { Link } from "react-router-dom";
import { Game } from "../types/gameMode";

const GameCard: React.FC<Game> = ({ name, link, description }) => {
  return (
    <Link to={link} className="border rounded-md flex flex-col items-center ">
      <img src="/anonymous.jpg" width={150} className="opacity-90 blur-sm" />
      <div className="flex items-center flex-col w-full ">
        <section className="flex justify-between gap-3 w-full bg-indigo-500  text-white p-4 items-center">
          <section className="flex flex-col w-full">
            <span className="font-extrabold text-2xl">{name}</span>
            <p className="text-sm">{description}</p>
          </section>
          <section>
            <button className="bg-white text-indigo-500 rounded-md text-center font-semibold px-4 py-2 transition duration-300 hover:opacity-85">
              Play
            </button>
          </section>
        </section>
      </div>
    </Link>
  );
};

export default GameCard;
