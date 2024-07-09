import Layout from "../components/Layout";
import Button from "../components/Button";
import Title from "../components/Title";
import PlayerCard from "../components/PlayerCard";
import GameOver from "../components/GameOver";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Input from "../components/Input";
import TeamCard from "../components/TeamCard";
import useWhoIsMissing from "../hooks/useWhoIsMissing";
import LoadingSpinner from "../components/LoadingSpinner";

const WhoIsMissing = () => {
  const {
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
  } = useWhoIsMissing();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    toast.error(`An error occurred: ${error}`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
      hideProgressBar: true,
      transition: Bounce,
    });
  }

  return (
    <Layout>
      <Title
        title="Who is missing?"
        description="Are you a true football connoisseur? Welcome to Who Is Missing?, the ultimate challenge for those who know their football lineups! In this game, you’ll be presented with a lineup from a historical match, along with details such as the teams, competition, and phase. Your task is to identify the missing player from the lineup."
      />
      {gamePhase === "welcome" && (
        <Button text="Start" onClick={handleGameStart} />
      )}
      {gamePhase === "started" && selectedSquad && (
        <section className="relative w-full flex items-center flex-col gap-5">
          <img src={selectedSquad.logo.logo} className="h-14 md:h-20" />
          <div className="flex items-center gap-1 font-light text-[#2F4F4F] text-sm flex-col md:flex-row md:text-base md:gap-3">
            <span>{selectedSquad.competition}</span>
            <span className="hidden md:block">-</span>
            <span>{selectedSquad.phase}</span>
          </div>
          <section className="flex items-center gap-7">
            <TeamCard
              teamName={selectedSquad.homeTeam.name}
              imgSrc={selectedSquad.homeTeam.logo}
            />
            <section className="flex items-center gap-4">
              <span className="font-light ">{selectedSquad.homeTeamGoals}</span>
              <span className="text-lg font-thin">vs</span>
              <span className="font-light ">{selectedSquad.awayTeamGoals}</span>
            </section>
            <TeamCard
              teamName={selectedSquad.awayTeam.name}
              imgSrc={selectedSquad.awayTeam.logo}
            />
          </section>
          <section className="h-[80vh] w-full flex justify-center items-center">
            <div
              className="relative w-[90%] md:w-1/2 h-[80%] md:h-[90%] bg-no-repeat bg-cover "
              style={{
                backgroundImage: 'url("/pitch.svg")',
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
              }}
            >
              {selectedSquad.players.map((player) => {
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
          </section>
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
