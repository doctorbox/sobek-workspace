import React from "react";
import { useRouter } from "next/router";
import { MethodologyEvaluation } from "@/components/methodology/MethodologyEvaluation";
import { EvaluationFeatures } from "@/components/consideration/EvaluationFeatures";

const SessionPage: React.FC = () => {
  const router = useRouter();
  const { levelId } = router.query;
  const features = [
    {
      icon: "check",
      description:
        "How your implementation across key tasks compares to successful workflows in similar contexts",
    },
    {
      icon: "arrows-shuffle",
      description:
        "Whether you've included critical steps identified in published research",
    },
    {
      icon: "bulb",
      description:
        "Where your approach could benefit from additional considerations",
    },
  ];

  return (
    <div className="flex flex-col mx-auto self-end pb-4 w-full text-xs leading-none border-b border-zinc-200 max-w-[920px] max-md:max-w-full mt-14">
      <MethodologyEvaluation />
      <EvaluationFeatures
        title="Evaluation Considerations"
        features={features}
      />
    </div>
  );
};

export default SessionPage;
