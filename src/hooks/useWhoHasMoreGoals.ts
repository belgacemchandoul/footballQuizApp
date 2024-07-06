import { useState } from "react";
import usePlayersData from "../hooks/usePlayersData";
import Player from "../types/players";
import randomizeId from "../utils/randomizeId";
import { Bounce, toast } from "react-toastify";


const useWhoHasMoreGoals = () => {
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
      toast.success("Correct, well done !", {
        position: "top-center",
        autoClose: 500,
        theme: "colored",
        hideProgressBar: true,
        transition: Bounce,
      });
    } else if (basePlayer.goals > nextPlayer.goals && value === "less") {
      setBasePlayer(nextPlayer);
      nextPlayerGeneration(nextPlayer);
      setScore((prevScore) => prevScore + 1);
      toast.success("Correct, well done !", {
        position: "top-center",
        autoClose: 1000,
        theme: "colored",
        hideProgressBar: true,
        transition: Bounce,
      });
      toast.success;
    } else {
      setGamePhase("over");
    }
  };
  const handleGameRestart = () => {
    setScore(0);
    handleGameStart();
  };
  return { score, gamePhase, loading, error, handleGameRestart, basePlayer, nextPlayer, handleGoalsCheck, handleGameStart }
}

export default useWhoHasMoreGoals