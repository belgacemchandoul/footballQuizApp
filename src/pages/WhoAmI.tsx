import { useRef, useState } from "react";
import Layout from "../components/Layout";
import usePlayersData from "../hooks/usePlayersData";
import Player from "../types/players";
import normalizeString from "../utils/normalizeString";
import randomizeId from "../utils/randomizeId";
import handleRepetition from "../utils/handleRepetition";
import Button from "../components/Button";

const WhoAmI = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [guess, setGuessInput] = useState<string>("");
  const [gamePhase, setGamePhase] = useState<string>("welcome");
  const [score, setScore] = useState<number>(0);
  const maxNumRef = useRef(0);
  const prevPlayersRef = useRef<Player[]>([]);
  const { players, loading, error } = usePlayersData();

  const gameProcess = () => {
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
  };
  const handleGameStart = () => {
    setGamePhase("started");
    gameProcess();
  };

  const handleGuess = () => {
    if (selectedPlayer === null) return;
    const normalizedGuess = normalizeString(guess);
    const normalizedPlayerName = normalizeString(selectedPlayer.name);

    if (normalizedGuess === normalizedPlayerName) {
      console.log("saha");
      setScore((prevScore) => prevScore + 1);
      if (maxNumRef.current >= 5) {
        setGamePhase("over");
        return;
      }

      setGuessInput("");

      gameProcess();
    } else {
      console.log("aasba");
      setScore((prevScore) => prevScore + 1);
      if (maxNumRef.current >= 5) {
        setGamePhase("over");
        return;
      }

      setGuessInput("");

      gameProcess();
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
  }

  return (
    <Layout>
      {" "}
      <span>Who Am I?</span>
      {gamePhase === "welcome" && (
        <Button text="start" onClick={handleGameStart} />
      )}
      {gamePhase === "started" && (
        <div>
          <section className="flex gap-7 items-center">
            {selectedPlayer?.career?.map((team, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={team.logo}
                  className="h-24 w-24"
                  alt={team.name}
                  title={team.name}
                />
              </div>
            ))}
          </section>
          <input
            onChange={(e) => setGuessInput(e.target.value)}
            value={guess}
            name="input"
            placeholder="Guess the Player"
            required
            type="text"
          />

          <button onClick={handleGuess}>Guess</button>
        </div>
      )}
      {gamePhase === "over" && <div>Your Score is {score} </div>}
    </Layout>
  );
};

export default WhoAmI;
