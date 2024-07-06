import Button from "../components/Button";
import Title from "../components/Title";
import GameOver from "../components/GameOver";
import { ToastContainer } from "react-toastify";
import useWhoHasMoreGoals from "../hooks/useWhoHasMoreGoals";
import Layout from "../components/Layout";

const WhoHasMoreGoals = () => {
  const {
    score,
    gamePhase,
    loading,
    error,
    handleGameRestart,
    basePlayer,
    nextPlayer,
    handleGoalsCheck,
    handleGameStart,
  } = useWhoHasMoreGoals();

  if (loading) {
    return <div>Loading..</div>;
  }
  if (error) {
    console.error(error);
  }
  return (
    <Layout>
      <Title
        title="Who has more goals ?"
        description="How well do you know football’s top scorers? Welcome to Who Has More Goals?, the ultimate challenge for football fans! In this game, you'll be presented with two players and your task is to guess if the second player has scored more or fewer goals than the first. "
      />
      {gamePhase === "welcome" && (
        <Button text="start" onClick={handleGameStart} />
      )}
      {gamePhase === "started" && (
        <section className="flex gap-5 flex-col md:flex-row md:gap-32">
          <div className="flex flex-col gap-2 items-center md:text-xl md:font-semibold font-medium md:gap-4 text-[#2F4F4F]">
            <span>{basePlayer?.name}</span>
            <span>{basePlayer?.goals} goals</span>
          </div>
          <hr className="md:hidden" />
          <div className="flex flex-col gap-4 items-center ">
            <span className="md:text-xl md:font-semibold font-medium text-[#2F4F4F]">
              {nextPlayer?.name}
            </span>
            <div className="flex gap-4">
              <Button
                value="more"
                text="more"
                onClick={(e) => handleGoalsCheck(e)}
              />
              <Button
                value="less"
                text="less"
                onClick={(e) => handleGoalsCheck(e)}
              />
            </div>
          </div>
        </section>
      )}
      {gamePhase === "over" && (
        <GameOver score={score} onClick={handleGameRestart} />
      )}
      <ToastContainer />
    </Layout>
  );
};

export default WhoHasMoreGoals;
