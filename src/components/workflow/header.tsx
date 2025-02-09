import Image from "next/image";
import React from "react";

export const WorkflowHeader: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center w-full max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-3 items-start self-stretch my-auto text-base font-semibold basis-16 min-w-[240px] text-zinc-900 max-md:max-w-full">
        <div>Proposed Workflow</div>
        <div className="flex gap-3 min-h-[24px]" />
      </div>
      <button className="flex gap-2 justify-center items-center self-stretch px-8 py-2.5 my-auto text-sm font-medium leading-none text-green-700 bg-white rounded-md border border-green-700 border-solid min-h-[40px] max-md:px-5">
        <Image
          loading="lazy"
          src="/check-single.svg"
          width={16}
          height={16}
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          alt=""
        />
        <span className="self-stretch my-auto">Accept Workflow</span>
      </button>
    </div>
  );
};
