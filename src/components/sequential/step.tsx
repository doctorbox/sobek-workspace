import * as React from "react";
import { StepProps } from "./types";

export const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex gap-6 items-start p-6 w-full bg-white rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] max-md:p-5 max-md:max-w-full">
      <div className="flex gap-6 items-start w-full max-md:flex-col max-md:max-w-full">
        <div className="self-stretch m-auto w-12 font-medium leading-5 text-center border-2 border-solid border-zinc-300 min-h-[48px] min-w-[48px] rounded-[300px] text-zinc-950 pt-[11px]">
          {number}
        </div>
        <div className="flex flex-col flex-1 leading-none max-md:max-w-full">
          <div className="font-bold text-zinc-900 max-md:max-w-full">
            {title}
          </div>
          <div className="mt-2 text-zinc-700 max-md:max-w-full">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
