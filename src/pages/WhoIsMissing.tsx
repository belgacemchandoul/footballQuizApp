import { useRef, useState } from "react";
import Layout from "../components/Layout";
import useSquadsData from "../hooks/useSquadsData";
import Squad from "../types/squads";
import randomizeId from "../utils/randomizeId";
import normalizeString from "../utils/normalizeString";
import handleRepetition from "../utils/handleRepetition";

const WhoIsMissing = () => {
  const { squads, loading, error } = useSquadsData();
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);
  const [gamePhase, setGamePhase] = useState<string>("welcome");
  const [score, setScore] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const maxNumRef = useRef(0);
  const prevSquadRef = useRef<Squad[]>([]);

  const randomSquad = () => {
    if (maxNumRef.current >= 5) {
      setGamePhase("over");
      return;
    }
    const randomId = randomizeId(squads);
    const squad = squads[randomId];
    if (!prevSquadRef.current.includes(squad)) {
      prevSquadRef.current = handleRepetition(squad, prevSquadRef.current);
      setSelectedSquad(squad);
      maxNumRef.current += 1;
    }
  };
  const handleGameStart = () => {
    setGamePhase("started");
    randomSquad();
  };
  const handleGuess = () => {
    if (selectedSquad === null) return;
    const normalizedGuess = normalizeString(input);
    const normalizedPlayerName = normalizeString(selectedSquad?.missingPlayer);
    if (normalizedGuess === normalizedPlayerName) {
      setScore((prevScore) => (prevScore += 1));
      setInput("");
      randomSquad();
    } else {
      setInput("");
      randomSquad();
    }
  };
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    console.error(error);
  }
  return (
    <Layout>
      <div>Who Is Missing?</div>
      {gamePhase === "welcome" && (
        <button onClick={handleGameStart}>start</button>
      )}
      {gamePhase === "started" && (
        <section>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={handleGuess}>Guess</button>
        </section>
      )}
      {gamePhase === "over" && <div>your score is {score}</div>}
    </Layout>
  );
};

export default WhoIsMissing;
