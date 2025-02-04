import * as React from "react";
import { KeyOpportunityItem } from "./types";

interface KeyOpportunityListProps {
  opportunities: KeyOpportunityItem[];
}

export function KeyOpportunityList({ opportunities }: KeyOpportunityListProps) {
  return (
    <div className="flex flex-col items-start mt-6 w-full text-sm font-bold text-zinc-700 max-md:max-w-full">
      <div className="self-stretch text-base font-semibold text-zinc-950 max-md:max-w-full">
        Key Opportunities
      </div>
      {opportunities.map((item, index) => (
        <div
          key={index}
          className="mt-2 max-w-full leading-5 decoration-auto decoration-solid underline-offset-auto w-[754px] max-md:max-w-full"
        >
          <ul className="list-disc pl-4">
            <li>
              <div className="underline text-zinc-900">{item.title}</div>
              <div
                className=" leading-6 text-zinc-600 font-normal
"
              >
                {item.description}
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
