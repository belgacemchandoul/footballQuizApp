import { useRef, useState } from "react";
import Layout from "../components/Layout";
import useSquadsData from "../hooks/useSquadsData";
import Squad from "../types/squads";
import randomizeId from "../utils/randomizeId";
import normalizeString from "../utils/normalizeString";

const WhoIsMissing = () => {
  const { squads, loading, error } = useSquadsData();
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);
  const [gamePhase, setGamePhase] = useState<string>("welcome");
  const [score, setScore] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const maxNumRef = useRef(0);

  const handleGameStart = () => {
    setGamePhase("start");
    if (maxNumRef.current >= 5) {
      setGamePhase("over");
      return;
    }
    const randomId = randomizeId(squads);
    setSelectedSquad(squads[randomId]);
    maxNumRef.current += 1;
  };
  const handleGuess = () => {
    if (selectedSquad === null) return;
    const normalizedGuess = normalizeString(input);
    const normalizedPlayerName = normalizeString(selectedSquad?.missingPlayer);
    if (normalizedGuess === normalizedPlayerName) {
      console.log("saha");
      setScore((prevScore) => (prevScore += 1));
      setInput("");
      handleGameStart();
    } else {
      console.log("aasba");
      setInput("");
      handleGameStart();
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
      <section>
        <button onClick={handleGameStart}>start</button>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleGuess}>Guess</button>
      </section>
      {gamePhase === "over" && <div>your score is {score}</div>}
    </Layout>
  );
};

export default WhoIsMissing;
