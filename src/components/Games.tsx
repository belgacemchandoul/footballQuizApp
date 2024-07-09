import { lazy } from "react";
import gameModes from "../data/gameModes.json";
const GameCard = lazy(() => import("./GameCard"));
const Games = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-20 sm:grid-cols-1 md:grid-cols-2">
      {gameModes.map((mode) => (
        <GameCard
          key={mode.name}
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
