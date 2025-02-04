import React from "react";
import { BlockHeader } from "@/components/block/header";
import { PotentialDashboard } from "@/components/potential/PotentialDashboard";

const SessionPage: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto self-end pb-4 w-full text-xs leading-none  max-w-[920px] max-md:max-w-full mt-10">
      <BlockHeader
        taskNumber="2"
        title="Epitope Mapping and Selection"
        subtitle="Task Scores and Sources"
      />
      <PotentialDashboard />
    </div>
  );
};

export default SessionPage;
