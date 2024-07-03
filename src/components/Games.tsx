import gameModes from "../data/gameModes.json";
import GameCard from "./GameCard";
const Games = () => {
  return (
    <div className="grid grid-cols-2 gap-8 mt-20 mb-20">
      {gameModes.map((mode) => (
        <GameCard
          name={mode.name}
          link={mode.link}
          description={mode.description}
          image={mode.image}
        />
      ))}
    </div>
  );
};

export default Games;
