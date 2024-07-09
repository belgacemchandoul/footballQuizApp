import { useCallback, useEffect, useRef, useState } from "react";
import useSquadsData from "../hooks/useSquadsData";
import Squad from "../types/squads";
import randomizeId from "../utils/randomizeId";
import normalizeString from "../utils/normalizeString";
import handleRepetition from "../utils/handleRepetition";
import { Bounce, toast } from "react-toastify";

const useWhoIsMissing = () => {
  const { squads, loading, error } = useSquadsData();
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);
  const [gamePhase, setGamePhase] = useState<string>("welcome");
  const [score, setScore] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const [showNextSquad, setShowNextSquad] = useState<boolean>(false);
  const maxNumRef = useRef(0);
  const prevSquadRef = useRef<Squad[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const randomSquad = useCallback(() => {
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
  }, [squads]);

  useEffect(() => {
    if (gamePhase === "started" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gamePhase]);

  useEffect(() => {
    if (showNextSquad) {
      if (maxNumRef.current >= 5) {
        setGamePhase("over");
      } else {
        randomSquad();
        setShowNextSquad(false);
      }
    }
  }, [randomSquad, showNextSquad]);

  const handleGameStart = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
    setGamePhase("started");
    randomSquad();
  };

  const handleGuess = () => {
    if (selectedSquad === null) return;
    if (input.length === 0) {
      toast.warning("Please take a guess!", {
        position: "top-center",
        autoClose: 1000,
        theme: "colored",
        hideProgressBar: true,
        transition: Bounce,
      });
    } else {
      const normalizedGuess = normalizeString(input);
      const normalizedPlayerName = normalizeString(selectedSquad.missingPlayer);
      if (normalizedGuess.trim() === normalizedPlayerName) {
        setScore((prevScore) => prevScore + 1);
        toast.success("Correct, well done!", {
          position: "top-center",
          autoClose: 1000,
          theme: "colored",
          hideProgressBar: true,
          transition: Bounce,
          onClose: () => setShowNextSquad(true),
        });
      } else {
        toast.error(
          `Wrong! The correct answer was: ${selectedSquad.missingPlayer}.`,
          {
            position: "top-center",
            autoClose: 1000,
            theme: "colored",
            hideProgressBar: true,
            transition: Bounce,
            onClose: () => setShowNextSquad(true),
          }
        );
      }
      setInput("");
    }
  };

  const handleGameRestart = () => {
    setScore(0);
    maxNumRef.current = 0;
    prevSquadRef.current = [];
    setInput("");
    handleGameStart();
  };

  const positionCoordinates: { [key: string]: { top: string; left: string } } = {
    GK: { top: "90%", left: "50%" },
    LB: { top: "68%", left: "15%" },
    RB: { top: "68%", left: "85%" },
    LCB: { top: "71%", left: "40%" },
    RCB: { top: "71%", left: "60%" },
    LCDM: { top: "53%", left: "30%" },
    RCDM: { top: "53%", left: "70%" },
    CDM: { top: "53%", left: "50%" },
    CM: { top: "43%", left: "50%" },
    LCM: { top: "43%", left: "30%" },
    RCM: { top: "43%", left: "70%" },
    CAM: { top: "35%", left: "50%" },
    LCAM: { top: "35%", left: "30%" },
    RCAM: { top: "35%", left: "70%" },
    LW: { top: "25%", left: "15%" },
    RW: { top: "25%", left: "85%" },
    CF: { top: "15%", left: "50%" },
  };

  return {
    loading,
    error,
    score,
    gamePhase,
    positionCoordinates,
    input,
    setInput,
    handleGameRestart,
    handleGuess,
    handleGameStart,
    inputRef,
    selectedSquad,
  };
};

export default useWhoIsMissing;
