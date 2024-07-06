import { useCallback, useEffect, useRef, useState } from "react";

import usePlayersData from "./usePlayersData";
import Player from "../types/players";
import normalizeString from "../utils/normalizeString";
import randomizeId from "../utils/randomizeId";
import handleRepetition from "../utils/handleRepetition";

import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const useWhoAmI = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [guessInput, setGuessInput] = useState<string>("");
  const [gamePhase, setGamePhase] = useState<string>("welcome");
  const [score, setScore] = useState<number>(0);
  const [showNextPlayer, setShowNextPlayer] = useState<boolean>(false);
  const maxNumRef = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const prevPlayersRef = useRef<Player[]>([]);
  const { players, loading, error } = usePlayersData();

  useEffect(() => {
    if (gamePhase === "started" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gamePhase]);

  const gameProcess = useCallback(() => {
    let validPlayerFound = false;

    while (!validPlayerFound) {
      const randomId = randomizeId(players);
      const player = players[randomId];

      if (
        player?.career &&
        player.career.length > 1 &&
        !prevPlayersRef.current.includes(player)
      ) {
        prevPlayersRef.current = handleRepetition(
          player,
          prevPlayersRef.current
        );
        setSelectedPlayer(player);
        maxNumRef.current += 1;
        validPlayerFound = true;
      }
    }
  }, [players]);

  useEffect(() => {
    if (showNextPlayer) {
      if (maxNumRef.current >= 5) {
        setGamePhase("over");
      } else {
        gameProcess();
        setShowNextPlayer(false);
      }
    }
  }, [gameProcess, showNextPlayer]);

  const handleGameStart = () => {
    setGamePhase("started");
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
    gameProcess();
  };

  const handleGuess = () => {
    if (selectedPlayer === null) return;
    if (guessInput.length === 0) {
      toast.warning("Please take a guess!", {
        position: "top-center",
        autoClose: 1000,
        theme: "colored",
        hideProgressBar: true,
        transition: Bounce,
      });
    } else {
      const normalizedGuess = normalizeString(guessInput);
      const normalizedPlayerName = normalizeString(selectedPlayer.name);

      if (normalizedGuess === normalizedPlayerName) {
        setScore((prevScore) => prevScore + 1);
        toast.success("Correct, well done !", {
          position: "top-center",
          autoClose: 1000,
          theme: "colored",
          hideProgressBar: true,
          transition: Bounce,
          onClose: () => setShowNextPlayer(true),
        });
      } else {
        toast.error(`Wrong! The correct answer was: ${selectedPlayer.name}.`, {
          position: "top-center",
          autoClose: 1000,
          theme: "colored",
          hideProgressBar: true,
          transition: Bounce,
          onClose: () => setShowNextPlayer(true),
        });
      }
      setGuessInput("");
    }
  };

  const handleGameRestart = () => {
    setScore(0);
    maxNumRef.current = 0;
    prevPlayersRef.current = []
    setGuessInput("");
    setShowNextPlayer(false);
    handleGameStart()
  };
  return { selectedPlayer, gamePhase, score, loading, inputRef, error, guessInput, handleGameStart, handleGuess, handleGameRestart, setGuessInput, }
}

export default useWhoAmI