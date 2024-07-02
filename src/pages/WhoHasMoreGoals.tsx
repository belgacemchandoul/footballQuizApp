import { useState } from "react";
import Layout from "../components/Layout";
import usePlayersData from "../hooks/usePlayersData";
import Player from "../types/players";
import randomizeId from "../utils/randomizeId";

const WhoHasMoreGoals = () => {
  const [basePlayer, setBasePlayer] = useState<Player | null>(null);
  const [nextPlayer, setNextPlayer] = useState<Player | null>(null);
  const { players, loading, error } = usePlayersData();

  const handleGameStart = () => {
    let validPlayerFound = false;
    while (!validPlayerFound) {
      const basePlayerRandomId = randomizeId(players);
      const nextPlayerRandomId = randomizeId(players);
      const basePlayer = players[basePlayerRandomId];
      const nextPlayer = players[nextPlayerRandomId];

      if (
        basePlayer.goals !== null &&
        nextPlayer.goals !== null &&
        nextPlayer.goals !== basePlayer.goals
      ) {
        setBasePlayer(basePlayer);
        setNextPlayer(nextPlayer);
        validPlayerFound = true;
      }
    }
  };
  const nextPlayerGeneration = (currPlayer: Player) => {
    let validPlayerFound = false;
    while (!validPlayerFound) {
      const nextPlayerRandomId = randomizeId(players);
      const genPlayer = players[nextPlayerRandomId];

      if (
        currPlayer.goals !== null &&
        genPlayer.goals !== null &&
        genPlayer.goals !== currPlayer.goals
      ) {
        setNextPlayer(genPlayer);
        validPlayerFound = true;
      }
    }
  };
  const handleGoalsCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    if (
      basePlayer === null ||
      basePlayer.goals === null ||
      nextPlayer === null ||
      nextPlayer.goals === null
    )
      return;
    if (basePlayer.goals < nextPlayer.goals && value === "more") {
      setBasePlayer(nextPlayer);
      nextPlayerGeneration(nextPlayer);
    } else if (basePlayer.goals > nextPlayer.goals && value === "less") {
      setBasePlayer(nextPlayer);
      nextPlayerGeneration(nextPlayer);
    } else {
      console.log("game over");
    }
  };

  if (loading) {
    return <div>Loading..</div>;
  }
  if (error) {
    console.error(error);
  }
  return (
    <Layout>
      <div>Who Has More Goals ?</div>
      <section>
        <button onClick={handleGameStart}>start</button>
        <div>
          {basePlayer?.name} {basePlayer?.goals}
          <div>
            {nextPlayer?.name} {nextPlayer?.goals}
            <button onClick={(e) => handleGoalsCheck(e)} value="more">
              more
            </button>
            <button onClick={(e) => handleGoalsCheck(e)} value="less">
              less
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoHasMoreGoals;
