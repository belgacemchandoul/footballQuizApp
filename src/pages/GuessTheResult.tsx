import Layout from "../components/Layout";
import Button from "../components/Button";
import Title from "../components/Title";
import TeamScoreBoardCard from "../components/TeamScoreBoardCard";
import GameOver from "../components/GameOver";
import { Bounce, toast, ToastContainer } from "react-toastify";
import useGuessTheResult from "../hooks/useGuessTheResult";
import LoadingSpinner from "../components/LoadingSpinner";

const GuessTheResult = () => {
  const {
    error,
    loading,
    score,
    handleGameRestart,
    handleGuess,
    handleChange,
    gamePhase,
    handleGameStart,
    selectedMatch,
    inputValues,
    inputRef,
  } = useGuessTheResult();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    toast.error(`an error happened , ${error}`, {
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
        title="Guess the result"
        description="Think you know your football history? Welcome to Guess the Result, where you get to test your knowledge of past games! In this challenge, you'll be given key details such as the teams involved, the competition, and the phase of the tournament. Your task is to guess the final score of these historical matches."
      />
      {gamePhase === "welcome" && (
        <Button text="Start" onClick={handleGameStart} />
      )}
      {gamePhase === "started" && selectedMatch && (
        <section className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <img src={selectedMatch.logo.logo} className="h-14 md:h-20" />
            <div className="flex items-center gap-1 font-light text-[#2F4F4F] text-sm flex-col md:flex-row md:text-base md:gap-3">
              <span>{selectedMatch.competition}</span>
              <span className="hidden md:block">-</span>
              <span>{selectedMatch.phase}</span>
            </div>
            <section className="flex items-center gap-7">
              <TeamScoreBoardCard
                teamName={selectedMatch.homeTeam.name}
                imgSrc={selectedMatch.homeTeam.logo}
                input={inputValues.homeTeam}
                onChange={(e) => handleChange(e)}
                name="homeTeam"
                ref={inputRef}
              />
              <span className="text-lg font-thin">vs</span>
              <TeamScoreBoardCard
                teamName={selectedMatch.awayTeam.name}
                imgSrc={selectedMatch.awayTeam.logo}
                input={inputValues.awayTeam}
                onChange={(e) => handleChange(e)}
                name="awayTeam"
              />
            </section>
          </div>
          <Button onClick={handleGuess} text="Guess" />
        </section>
      )}
      {gamePhase === "over" && (
        <GameOver score={score} onClick={handleGameRestart} />
      )}
      <ToastContainer />
    </Layout>
  );
};

export default GuessTheResult;
