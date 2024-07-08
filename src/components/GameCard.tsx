import { Link } from "react-router-dom";
import { Game } from "../types/gameMode";

const GameCard: React.FC<Game> = ({ name, link, description, image }) => {
  return (
    <Link
      to={link}
      className="border rounded-md flex flex-col justify-between shadow-sm w-full relative overflow-hidden"
      style={{
        height: "250px",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: `url(${image}.JPG)`,
          opacity: 0.5,
          backgroundSize: "150%",
        }}
      ></div>
      <div className="relative z-10 flex flex-col h-full justify-between opacity-95">
        <div className="flex-grow"></div>
        <section className="flex justify-between gap-3 w-full bg-indigo-500 text-white p-4 items-center">
          <section className="flex flex-col w-full">
            <span className="font-extrabold text-lg lg:text-2xl">{name}</span>
            <p className="text-xs lg:text-sm">{description}</p>
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
