import React from "react";
import { useRouter } from "next/router";
import OverviewSection from "@/components/block/overview";
import BlockSection from "@/components/block/section";

const SessionPage: React.FC = () => {
  const router = useRouter();
  const { levelId } = router.query;

  return (
    <div className="flex flex-col mx-auto self-end pb-4 w-full text-xs leading-none border-b border-zinc-200 max-w-[920px] max-md:max-w-full">
      <OverviewSection />
      <BlockSection />
    </div>
  );
};

export default SessionPage;
