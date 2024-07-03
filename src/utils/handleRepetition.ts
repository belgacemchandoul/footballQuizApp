import Match from "../types/matches";
import Player from "../types/players";
import Squad from "../types/squads";

const handleRepetition = <T extends Player | Squad | Match>(
  data: T,
  prevData: T[]
): T[] => {
  return [...prevData, data];
};

export default handleRepetition;
