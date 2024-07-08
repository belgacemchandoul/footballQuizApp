type TeamCard = {
  imgSrc?: string;
  teamName?: string;
};

const TeamCard = ({ imgSrc, teamName }: TeamCard) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <img src={imgSrc} className="h-12" alt={teamName} />
        </div>

        <span className="text-[#2F4F4F] text-sm">{teamName}</span>
      </div>
    </div>
  );
};

export default TeamCard;
