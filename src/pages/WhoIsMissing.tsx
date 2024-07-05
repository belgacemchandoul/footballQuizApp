import { useRef, useState } from "react";
import Layout from "../components/Layout";
import useSquadsData from "../hooks/useSquadsData";
import Squad from "../types/squads";
import randomizeId from "../utils/randomizeId";
import normalizeString from "../utils/normalizeString";
import handleRepetition from "../utils/handleRepetition";
import Button from "../components/Button";
import Title from "../components/Title";

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
      <Title
        title="Who is missing ?"
        description="Are you a true football connoisseur? Welcome to Who Is Missing?, the ultimate challenge for those who know their football lineups! In this game, you’ll be presented with a lineup from a historical match, along with details such as the teams, competition, and phase. Your task is to identify the missing player from the lineup."
      />
      {gamePhase === "welcome" && (
        <Button text="start" onClick={handleGameStart} />
      )}
      {gamePhase === "started" && (
        <section>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button onClick={handleGuess}>Guess</button>
        </section>
      )}
      {gamePhase === "over" && <div>your score is {score}</div>}
    </Layout>
  );
};

export default WhoIsMissing;
