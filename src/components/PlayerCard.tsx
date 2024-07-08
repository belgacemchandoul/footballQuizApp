type Coordinates = {
  top: string;
  left: string;
};
type PlayerData = {
  playerName: string;
  coordinates: Coordinates;
  playerNumber: number;
};

const PlayerCard = ({ playerName, coordinates, playerNumber }: PlayerData) => {
  return (
    <div
      key={playerName}
      className="absolute flex flex-col items-center"
      style={{
        top: coordinates.top,
        left: coordinates.left,
        transform: "translate(-50%, -50%)",
      }}
    >
      <span className=" w-8 h-8 bg-violet-800 text-white rounded-full items-center flex justify-center border text-xs">
        {playerNumber}
      </span>
      <span className="text-xs text-white font-medium w-full text-center">
        {playerName}
      </span>
    </div>
  );
};

export default PlayerCard;
