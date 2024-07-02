import { useRef, useState } from "react";
import Layout from "../components/Layout";
import usePlayersData from "../hooks/usePlayersData";
import Player from "../types/players";
import normalizeString from "../utils/normalizeString";
import randomizeId from "../utils/randomizeId";

const WhoAmI = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [input, setInput] = useState<string>("");
  const [gamePhase, setGamePhase] = useState<string>("welcome");
  const [score, setScore] = useState<number>(0);
  const maxNumRef = useRef(0);
  const { players, loading, error } = usePlayersData();

  const handleGameStart = () => {
    setGamePhase("started");
    if (maxNumRef.current >= 5) {
      setGamePhase("over");
      return;
    }

    let validPlayerFound = false;

    while (!validPlayerFound) {
      const randomId = randomizeId(players);
      const player = players[randomId];

      if (player.career.length > 1) {
        setSelectedPlayer(player);
        maxNumRef.current += 1;
        validPlayerFound = true;
      }
    }
  };
  const handleChange = (e: string) => {
    setInput(e);
  };
  const handleGuess = () => {
    if (selectedPlayer === null) return;
    const normalizedGuess = normalizeString(input);
    const normalizedPlayerName = normalizeString(selectedPlayer.name);
    if (normalizedGuess === normalizedPlayerName) {
      setScore((prevScore) => prevScore + 1);
    }
    setInput("");
    handleGameStart();
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
        <button onClick={handleGameStart}>start</button>
      )}
      {gamePhase === "started" && (
        <div>
          <div>{selectedPlayer?.name}</div>
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
            onChange={(e) => handleChange(e.target.value)}
            value={input}
            name="input"
            placeholder="Guess the Player"
          />

          <button onClick={handleGuess}>Guess</button>
        </div>
      )}
      {gamePhase === "over" && <div>Your Score is {score} </div>}
    </Layout>
  );
};

export default WhoAmI;
