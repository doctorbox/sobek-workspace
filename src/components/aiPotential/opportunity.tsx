import * as React from "react";
import { OpportunityProps } from "./types";

export function Opportunity({ title, description }: OpportunityProps) {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="text-base font-semibold text-zinc-900 max-md:max-w-full">
        {title}
      </div>
      <div className="mt-2 text-sm leading-6 text-zinc-700 max-md:max-w-full">
        {description}
      </div>
    </div>
  );
}
