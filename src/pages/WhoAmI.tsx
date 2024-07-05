import { useCallback, useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import usePlayersData from "../hooks/usePlayersData";
import Player from "../types/players";
import normalizeString from "../utils/normalizeString";
import randomizeId from "../utils/randomizeId";
import handleRepetition from "../utils/handleRepetition";
import Button from "../components/Button";
import Title from "../components/Title";
import Input from "../components/Input";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const WhoAmI = () => {
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
        if (maxNumRef.current >= 5) {
          setGamePhase("over");
          return;
        }
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
    setGuessInput("");
    setShowNextPlayer(false);
    setGamePhase("started");
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
  }

  return (
    <Layout>
      <Title
        title="Who Am I?"
        description="Think you can guess the footballer from their career path? Welcome to Who Am I?, the ultimate challenge for true football enthusiasts! You'll be given a series of clues detailing the clubs a player has been a part of throughout their career. Your task is to identify the footballer based on these career milestones."
      />
      {gamePhase === "welcome" && (
        <Button text="start" onClick={handleGameStart} />
      )}
      {gamePhase === "started" && (
        <div className="flex flex-col items-center gap-10">
          <span className="font-medium text-xl text-indigo-800">
            Player's career
          </span>
          <section className="flex gap-7 items-center">
            {selectedPlayer?.career?.map((team, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={team.logo}
                  className="h-11"
                  alt={team.name}
                  title={team.name}
                />
              </div>
            ))}
          </section>
          <section className="flex gap-7">
            <Input
              onChange={(e) => setGuessInput(e.target.value)}
              value={guessInput}
              name="input"
              placeholder="Guess the Player"
              type="text"
              ref={inputRef}
            />

            <Button text="guess" onClick={handleGuess} />
          </section>
        </div>
      )}
      {gamePhase === "over" && (
        <section className="flex flex-col items-center gap-4">
          <span className="font-semibold text-2xl text-[#2F4F4F]">
            {score >= 3 ? "Well played" : "Nice try"}
          </span>
          <div className="text-[#2F4F4F] font-light">
            You got {score} correct answers!{" "}
            {score >= 3 ? "You did well!" : "Better luck next time!"}
          </div>
          <section className="flex gap-5">
            <Button text="Play again" onClick={handleGameRestart} />
            <Link to="/">
              <Button text="Home" />
            </Link>
          </section>
        </section>
      )}
      <ToastContainer />
    </Layout>
  );
};

export default WhoAmI;
