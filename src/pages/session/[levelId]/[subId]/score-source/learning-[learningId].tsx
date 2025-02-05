import React from "react";
import { ResearchArticle } from "@/components/research/ResearchArticle";
import { AIPotential } from "@/components/aiPotential/ai-potential";
import { Overview } from "@/components/overview/overview";
import { SequentialSteps } from "@/components/sequential/sequential-steps";

const SessionPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col mx-auto self-end pb-4 w-full text-xs leading-none  max-w-[920px] max-md:max-w-full mt-14">
        <ResearchArticle />
        <AIPotential />
        <div className="mt-[48px] mb-[56px]">
          <Overview />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="flex flex-col mx-auto self-end pb-4 w-full text-xs leading-none  max-w-[920px] max-md:max-w-full pt-[48px]">
          <SequentialSteps />
        </div>
      </div>
    </>
  );
};

export default SessionPage;
