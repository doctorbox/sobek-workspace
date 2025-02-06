import * as React from "react";
import { EvaluationFeature } from "./EvaluationFeature";
import { EvaluationFeaturesProps } from "./types";

export const EvaluationFeatures: React.FC<EvaluationFeaturesProps> = ({
  title,
  features,
}) => {
  return (
    <div className="flex flex-wrap flex-col gap-10 items-start py-5 bg-white max-w-[920px] max-sm:flex-col max-sm:gap-8 max-sm:py-4">
      <div className="flex flex-col flex-1 min-w-[240px] max-sm:w-full">
        <div className="mb-8 text-lg font-semibold tracking-tight leading-loose text-zinc-900">
          {title}
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <EvaluationFeature {...feature} />
            {index < features.length - 1 && (
              <div className=" mx-5 my-0 border border-solid border-zinc-200 h-[152px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
