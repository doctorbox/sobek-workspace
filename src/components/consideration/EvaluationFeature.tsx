import * as React from "react";
import { EvaluationFeatureProps } from "./types";

export const EvaluationFeature: React.FC<EvaluationFeatureProps> = ({
  icon,
  description,
}) => {
  return (
    <div className="flex flex-col flex-1 min-w-[240px] max-sm:w-full">
      <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-zinc-100">
        <i className={`ti ti-${icon}`} />
      </div>
      <div className="mt-6 text-sm font-medium leading-5 max-w-[240px] text-zinc-700 max-sm:max-w-full">
        {description}
      </div>
    </div>
  );
};
