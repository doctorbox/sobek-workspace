import React from "react";
import { MethodologyEvaluation } from "@/components/methodology/MethodologyEvaluation";
import { EvaluationFeatures } from "@/components/consideration/EvaluationFeatures";
import NoteCard from "@/components/note-card";
import BgWrapper from "@/components/bg-wrapper";
import MethodologyComparisonChecker from "@/components/methodology/methodology-comparison-checker";

const SessionPage: React.FC = () => {
  const features = [
    {
      icon: "/check-check.svg",
      description:
        "How your implementation across key tasks compares to successful workflows in similar contexts",
    },
    {
      icon: "/route.svg",
      description:
        "Whether you've included critical steps identified in published research",
    },
    {
      icon: "/sun.svg",
      description:
        "Where your approach could benefit from additional considerations",
    },
  ];

  const note = {
    icon: "/lightbulb.svg",
    title: "Note",
    message:
      "A different methodology isn't necessarily wrong – innovation often comes from novel approaches. Use these insights to make informed decisions about your research design.",
  };

  return (
    <>
      <div className="flex flex-col mx-auto self-end pb-12 w-full text-xs leading-none border-b border-zinc-200 max-w-[920px] max-md:max-w-full mt-14">
        <MethodologyEvaluation />
        <EvaluationFeatures
          title="Evaluation Considerations"
          features={features}
        />
        <NoteCard {...note} />
      </div>
      <BgWrapper backgroundColor="bg-[#F4F4F5]">
        <MethodologyComparisonChecker />
      </BgWrapper>
    </>
  );
};

export default SessionPage;
