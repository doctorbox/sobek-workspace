import * as React from "react";
import { StageHeader } from "./StageHeader";
import { MethodologyContent } from "./MethodologyContent";

export const MethodologyEvaluation: React.FC = () => {
  return (
    <div className="flex flex-col font-semibold max-w-[920px]">
      <div className="flex flex-col w-full max-md:max-w-full">
        <StageHeader stageNumber="1" stageTitle="Sequence Selection" />
        <MethodologyContent
          title="Evaluate my methodology"
          description="This evaluation can inform how your overall research approach for Sequence Selection compares to established practices in the field. By analyzing your workflow against peer-reviewed papers and case studies, we highlight where your methodology aligns with or differs from common approaches."
        />
      </div>
    </div>
  );
};
