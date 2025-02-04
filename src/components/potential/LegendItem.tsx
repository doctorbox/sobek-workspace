import * as React from "react";
import { LegendItemProps } from "./types";

export const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => (
  <div className="flex gap-2 items-center">
    <div className="flex gap-2.5 items-center self-stretch py-1 my-auto w-2">
      <div
        className={`flex self-stretch my-auto w-2 h-2 ${color} rounded-full min-h-[8px]`}
      />
    </div>
    <div className="self-stretch my-auto text-sm font-medium leading-none text-zinc-900">
      {label}
    </div>
  </div>
);
