import { useState } from "react";
import Layout from "../components/Layout";
import usePlayersData from "../hooks/usePlayersData";
import Player from "../types/players";
import randomizeId from "../utils/randomizeId";
import Button from "../components/Button";

const WhoHasMoreGoals = () => {
  const [basePlayer, setBasePlayer] = useState<Player | null>(null);
  const [nextPlayer, setNextPlayer] = useState<Player | null>(null);
  const [score, setScore] = useState<number>(0);
  const [gamePhase, setGamePhase] = useState<string>("welcome");

  const { players, loading, error } = usePlayersData();

  const handleGameStart = () => {
    setGamePhase("started");
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
      setScore((prevScore) => prevScore + 1);
    } else if (basePlayer.goals > nextPlayer.goals && value === "less") {
      setBasePlayer(nextPlayer);
      nextPlayerGeneration(nextPlayer);
      setScore((prevScore) => prevScore + 1);
    } else {
      setGamePhase("over");
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
      {gamePhase === "welcome" && (
        <Button text="start" onClick={handleGameStart} />
      )}
      {gamePhase === "started" && (
        <section>
          <div>
            {basePlayer?.name}
            <div>
              {nextPlayer?.name}
              <button onClick={(e) => handleGoalsCheck(e)} value="more">
                more
              </button>
              <button onClick={(e) => handleGoalsCheck(e)} value="less">
                less
              </button>
            </div>
          </div>
        </section>
      )}
      {gamePhase === "over" && <div>your score is {score}</div>}
    </Layout>
  );
};

export default WhoHasMoreGoals;
