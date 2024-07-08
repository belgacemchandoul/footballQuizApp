import { useCallback, useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import useSquadsData from "../hooks/useSquadsData";
import Squad from "../types/squads";
import randomizeId from "../utils/randomizeId";
import normalizeString from "../utils/normalizeString";
import handleRepetition from "../utils/handleRepetition";
import Button from "../components/Button";
import Title from "../components/Title";
import PlayerCard from "../components/PlayerCard";
import GameOver from "../components/GameOver";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Input from "../components/Input";
import TeamCard from "../components/TeamCard";

const WhoIsMissing = () => {
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
      const normalizedPlayerName = normalizeString(
        selectedSquad?.missingPlayer
      );
      if (normalizedGuess === normalizedPlayerName) {
        setScore((prevScore) => (prevScore += 1));
        toast.success("Correct, well done !", {
          position: "top-center",
          autoClose: 1000,
          theme: "colored",
          hideProgressBar: true,
          transition: Bounce,
          onClose: () => setShowNextSquad(true),
        });
      } else {
        toast.error(
          `Wrong! The correct answer was: ${selectedSquad.missingPlayer} .`,
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
  const positionCoordinates: { [key: string]: { top: string; left: string } } =
    {
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
        <section className="relative w-full md:h-[200vh] h-screen flex items-center flex-col gap-5">
          <img src={selectedSquad?.logo.logo} className="h-14 md:h-20" />
          <div className="flex items-center gap-1 font-light text-[#2F4F4F] text-sm flex-col md:flex-row md:text-base md:gap-3">
            <span>{selectedSquad?.competition}</span>
            <span className="hidden md:block">-</span>
            <span>{selectedSquad?.phase}</span>
          </div>
          <section className="flex items-center gap-7">
            <TeamCard
              teamName={selectedSquad?.homeTeam.name}
              imgSrc={selectedSquad?.homeTeam.logo}
            />
            <section className="flex items-center gap-4">
              <span className="font-light ">
                {selectedSquad?.homeTeamGoals}
              </span>
              <span className="text-lg font-thin">vs</span>
              <span className="font-light ">
                {selectedSquad?.awayTeamGoals}
              </span>
            </section>
            <TeamCard
              teamName={selectedSquad?.awayTeam.name}
              imgSrc={selectedSquad?.awayTeam.logo}
            />
          </section>
          <div
            className="relative w-3/4 md:w-1/2 h-3/4 md:h-[38%] bg-no-repeat bg-cover"
            style={{
              backgroundImage: 'url("/pitch.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }}
          >
            {selectedSquad?.players.map((player) => {
              const position = player.position;
              const coordinates = positionCoordinates[position];
              const playerName =
                player.name === selectedSquad.missingPlayer
                  ? "???"
                  : player.name;
              if (!coordinates) return null;
              return (
                <PlayerCard
                  key={player.name}
                  coordinates={coordinates}
                  playerName={playerName}
                  playerNumber={player.number}
                />
              );
            })}
          </div>
          <section className="flex gap-3 ">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Guess the missing player"
              type="text"
              ref={inputRef}
            />
            <Button text="Guess" onClick={handleGuess} />
          </section>
        </section>
      )}
      {gamePhase === "over" && (
        <GameOver score={score} onClick={handleGameRestart} />
      )}
      <ToastContainer />
    </Layout>
  );
};

export default WhoIsMissing;
