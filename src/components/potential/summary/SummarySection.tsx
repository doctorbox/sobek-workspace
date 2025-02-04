import * as React from "react";
import { KeyOpportunityList } from "./KeyOpportunityList";
import { SummaryProps } from "./types";

export function SummarySection({ summaryText, opportunities }: SummaryProps) {
  return (
    <div className="flex flex-col max-w-[832px] mt-10 px-[16px]">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="text-base font-semibold text-zinc-950 max-md:max-w-full">
          Summary
        </div>
        <div className="mt-2 max-w-full text-sm leading-6 text-zinc-700 w-[754px] max-md:max-w-full">
          {summaryText}
        </div>
      </div>
      <KeyOpportunityList opportunities={opportunities} />
    </div>
  );
}
