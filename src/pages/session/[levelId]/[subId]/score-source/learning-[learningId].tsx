import React from "react";
import { ResearchArticle } from "@/components/research/ResearchArticle";

const SessionPage: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto self-end pb-4 w-full text-xs leading-none  max-w-[920px] max-md:max-w-full mt-14">
      <ResearchArticle />
    </div>
  );
};

export default SessionPage;
