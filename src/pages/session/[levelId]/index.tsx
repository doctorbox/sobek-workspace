import React from "react";
import { useRouter } from "next/router";
import OverviewSection from "@/components/block/overview";

const SessionPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <OverviewSection />
    </div>
  );
};

export default SessionPage;
