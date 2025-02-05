import * as React from "react";
import { StageHeaderProps } from "./types";

export const StageHeader: React.FC<StageHeaderProps> = ({
  stageNumber,
  stageTitle,
}) => {
  return (
    <div className="flex flex-wrap gap-3 items-start w-full text-base max-md:max-w-full">
      <div className="text-purple-800">Stage {stageNumber}</div>
      <div className="gap-3 self-stretch text-zinc-900">{stageTitle}</div>
    </div>
  );
};
