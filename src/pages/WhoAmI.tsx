import Layout from "../components/Layout";
import Button from "../components/Button";
import Title from "../components/Title";
import Input from "../components/Input";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWhoAmI from "../hooks/useWhoAmI";
import GameOver from "../components/GameOver";
import LoadingSpinner from "../components/LoadingSpinner";

const WhoAmI = () => {
  const {
    inputRef,
    selectedPlayer,
    gamePhase,
    score,
    loading,
    error,
    guessInput,
    handleGameStart,
    handleGuess,
    handleGameRestart,
    setGuessInput,
  } = useWhoAmI();

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
        title="Who Am I?"
        description="Think you can guess the footballer from their career path? Welcome to Who Am I?, the ultimate challenge for true football enthusiasts! You'll be given a series of clues detailing the clubs a player has been a part of throughout their career. Your task is to identify the footballer based on these career milestones."
      />
      {gamePhase === "welcome" && (
        <Button text="Start" onClick={handleGameStart} />
      )}
      {gamePhase === "started" && selectedPlayer && (
        <div className="flex flex-col items-center gap-10">
          <span className="font-medium text-base md:text-xl text-indigo-800">
            Player's career
          </span>
          <section className="flex gap-4 md:gap-7 items-center">
            {selectedPlayer?.career?.map((team, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={team.logo}
                  className="h-8 md:h-11"
                  alt={team.name}
                  title={team.name}
                />
              </div>
            ))}
          </section>
          <section className="flex gap-7">
            <Input
              onChange={(e) => setGuessInput(e.target.value)}
              value={guessInput}
              name="input"
              placeholder="Guess the Player"
              type="text"
              ref={inputRef}
            />
            <Button text="Guess" onClick={handleGuess} />
          </section>
        </div>
      )}
      {gamePhase === "over" && (
        <GameOver score={score} onClick={handleGameRestart} />
      )}
      <ToastContainer />
    </Layout>
  );
};

export default WhoAmI;
