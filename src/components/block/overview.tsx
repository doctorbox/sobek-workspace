import React from "react";

function OverviewSection() {
  return (
    <div className="flex flex-col self-center mt-16 max-w-full w-[920px] max-md:mt-10">
      <div className="flex flex-col w-full font-semibold max-md:max-w-full">
        <div className="flex flex-wrap gap-3 items-start w-full text-base max-md:max-w-full">
          <div className="text-purple-800">Stage 1</div>
          <div className="gap-3 self-stretch text-zinc-900">
            Sequence Selection
          </div>
        </div>
        <div className="mt-3 text-5xl tracking-tight leading-none text-zinc-950 max-md:max-w-full max-md:text-4xl">
          Tasks to Evaluate
        </div>
        <div className="mt-3 text-xl font-medium tracking-tight leading-snug text-zinc-900 max-md:max-w-full">
          These are key tasks we have identified within this Stage
        </div>
      </div>
    </div>
  );
}

export default OverviewSection;
