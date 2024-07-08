import React, { forwardRef } from "react";
import Input from "./Input";

type Team = {
  imgSrc?: string;
  teamName?: string;
  input: number;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const TeamScoreBoardCard = forwardRef<HTMLInputElement, Team>(
  ({ imgSrc, teamName, input, onChange, name }, ref) => {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-2">
          <img src={imgSrc} className="h-12 md:h-16" alt={teamName} />
          <span className="text-[#2F4F4F] text-sm md:text-base">
            {teamName}
          </span>
        </div>
        <Input
          onChange={onChange}
          name={name}
          value={input}
          type="number"
          placeholder=""
          ref={ref}
        />
      </div>
    );
  }
);

TeamScoreBoardCard.displayName = "TeamCard";

export default TeamScoreBoardCard;
