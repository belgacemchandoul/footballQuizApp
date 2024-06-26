import gameModes from "../data/gameModes.json";
import GameCard from "./GameCard";
const Games = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {gameModes.map((mode) => (
        <div key={mode.name}>
          <GameCard
            name={mode.name}
            link={mode.link}
            description={mode.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Games;
