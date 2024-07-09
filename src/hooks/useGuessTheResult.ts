import { useCallback, useEffect, useRef, useState } from "react";
import useMatchesData from "../hooks/useMatchesData";
import Match from "../types/matches";
import randomizeId from "../utils/randomizeId";
import { GuessInputValues } from "../types/guessInputValues";
import handleRepetition from "../utils/handleRepetition";
import { Bounce, toast } from "react-toastify";

const useGuessTheResult = () => {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [gamePhase, setGamePhase] = useState("welcome");
  const [score, setScore] = useState<number>(0);
  const [inputValues, setInputValues] = useState<GuessInputValues>({
    homeTeam: 0,
    awayTeam: 0,
  });
  const [showNextMatch, setShowNextMatch] = useState<boolean>(false);
  const { matches, loading, error } = useMatchesData();
  const maxNumRef = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const prevMatchesRef = useRef<Match[]>([]);

  const randomMatch = useCallback(() => {
    const randomId = randomizeId(matches);
    const match = matches[randomId];
    if (!prevMatchesRef.current.includes(match)) {
      prevMatchesRef.current = handleRepetition(match, prevMatchesRef.current);
      setSelectedMatch(match);
      maxNumRef.current += 1;
    }
  }, [matches]);

  useEffect(() => {
    if (gamePhase === "started" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gamePhase]);

  useEffect(() => {
    if (showNextMatch) {
      if (maxNumRef.current >= 5) {
        setGamePhase("over");
      } else {
        randomMatch();
        setShowNextMatch(false);
      }
    }
  }, [randomMatch, showNextMatch]);

  const handleGameStart = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
    setGamePhase("started");
    randomMatch();
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
    if (selectedMatch === null) return;
    if (
      selectedMatch?.awayTeamGoals === inputValues.awayTeam &&
      selectedMatch.homeTeamGoals === inputValues.homeTeam
    ) {
      setScore((prevScore) => prevScore + 1);
      toast.success("Correct, well done!", {
        position: "top-center",
        autoClose: 1000,
        theme: "colored",
        hideProgressBar: true,
        transition: Bounce,
        onClose: () => setShowNextMatch(true),
      });
      setInputValues({
        homeTeam: 0,
        awayTeam: 0,
      });
    } else {
      toast.error(
        `Wrong! The correct answer was: ${selectedMatch.homeTeam.name} ${selectedMatch.homeTeamGoals} - ${selectedMatch.awayTeam.name} ${selectedMatch.awayTeamGoals}.`,
        {
          position: "top-center",
          autoClose: 1000,
          theme: "colored",
          hideProgressBar: true,
          transition: Bounce,
          onClose: () => setShowNextMatch(true),
        }
      );
      setInputValues({
        homeTeam: 0,
        awayTeam: 0,
      });
    }
  };

  const handleGameRestart = () => {
    setScore(0);
    maxNumRef.current = 0;
    prevMatchesRef.current = [];
    setInputValues({
      homeTeam: 0,
      awayTeam: 0,
    });
    setShowNextMatch(false);
    handleGameStart();
  };

  return {
    error,
    loading,
    score,
    gamePhase,
    handleGameRestart,
    handleGuess,
    handleChange,
    handleGameStart,
    selectedMatch,
    inputValues,
    inputRef,
  };
};

export default useGuessTheResult;
