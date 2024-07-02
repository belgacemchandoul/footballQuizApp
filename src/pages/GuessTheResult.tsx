import { useRef, useState } from "react";
import Layout from "../components/Layout";
import useMatchesData from "../hooks/useMatchesData";
import Match from "../types/matches";
import randomizeId from "../utils/randomizeId";
import { GuessInputValues } from "../types/guessInputValues";

const GuessTheResult = () => {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [gamePhase, setGamePhase] = useState("welcome");
  const [score, setScore] = useState<number>(0);
  const [inputValues, setInputValues] = useState<GuessInputValues>({
    homeTeam: 0,
    awayTeam: 0,
  });
  const { matches, loading, error } = useMatchesData();
  const maxNumRef = useRef(0);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    console.error(error);
  }
  const handleGameStart = () => {
    setGamePhase("started");
    if (maxNumRef.current >= 5) {
      setGamePhase("over");
      return;
    }
    const randomId = randomizeId(matches);
    setSelectedMatch(matches[randomId]);
    maxNumRef.current += 1;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => {
      return {
        ...prevInputValues,
        [name]: Number(value),
      };
    });
  };
  const handleGuess = () => {
    if (
      selectedMatch?.awayTeamGoals === inputValues.awayTeam &&
      selectedMatch.homeTeamGoals === inputValues.homeTeam
    ) {
      console.log("well done");
      setScore((prevScore) => prevScore + 1);
    } else console.log("aasba");
    setInputValues({
      homeTeam: 0,
      awayTeam: 0,
    });
    handleGameStart();
  };
  return (
    <Layout>
      <div>
        <p>Guess The Result</p>
        <section>
          <button onClick={handleGameStart}>start</button>
          <div>
            <div>
              {selectedMatch?.awayTeam.name} {selectedMatch?.awayTeamGoals}
            </div>{" "}
            <input
              onChange={(e) => handleChange(e)}
              name="awayTeam"
              value={inputValues.awayTeam}
              type="number"
            />
            <div>
              {selectedMatch?.homeTeam.name} {selectedMatch?.homeTeamGoals}
            </div>{" "}
            <input
              onChange={(e) => handleChange(e)}
              name="homeTeam"
              value={inputValues.homeTeam}
              type="number"
            />
          </div>
          <button onClick={handleGuess}>Guess</button>
        </section>
        {gamePhase === "over" && <div>your score is {score}</div>}
      </div>
    </Layout>
  );
};

export default GuessTheResult;
