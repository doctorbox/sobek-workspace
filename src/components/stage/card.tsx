import { StageProps } from "@/types";
import { useState } from "react";
import { useRouter } from "next/router";
import PmButton from "../common/pm-button";

export const StageCard: React.FC<StageProps> = ({
  stageNumber,
  title,
  objectives,
  lastUpdated,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const router = useRouter();

  return (
    <div className="flex overflow-hidden bg-white rounded-lg border border-solid border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
      <div className="self-stretch w-2 bg-indigo-200" />
      <div className="flex flex-col flex-1">
        <div className="p-10 border-b border-solid border-b-zinc-200 max-sm:p-5">
          <div className="flex gap-3 items-center mb-6">
            <div className="text-2xl font-bold tracking-tight text-indigo-600">
              Stage {stageNumber}
            </div>
            <div className="text-2xl font-bold tracking-tight text-zinc-950">
              {title}
            </div>
          </div>
          <div className="mb-2 text-base font-semibold text-zinc-900">
            Major Objectives
          </div>
          <ul className="flex flex-col gap-1 list-disc">
            {objectives.map((objective, index) => (
              <li key={index} className="text-sm leading-none text-zinc-700">
                {objective}
              </li>
            ))}
          </ul>
          {isVisible && (
            <>
              <div className="mb-2 text-base font-semibold text-zinc-900 mt-5">
                Major Milestones
              </div>
              <ul className="flex flex-col gap-1 list-disc">
                {objectives.map((objective, index) => (
                  <li
                    key={index}
                    className="text-sm leading-none text-zinc-700"
                  >
                    {objective}
                  </li>
                ))}
              </ul>
            </>
          )}

          <button
            className="mt-6 text-sm font-medium underline cursor-pointer text-zinc-950"
            tabIndex={0}
            onClick={toggleVisibility}
          >
            Show more
          </button>
        </div>
        <div className="flex justify-between items-center px-10 py-8 max-md:flex-col max-md:gap-5 max-md:items-start max-sm:p-5">
          <div className="flex gap-5 max-md:w-full">
            <PmButton onClick={() => router.push(`/session/${stageNumber}`)}>
              Evaluate my tasks
            </PmButton>
            <PmButton
              onClick={() => router.push(`/session/${stageNumber}/methodology`)}
            >
              Evaluate my methodology
            </PmButton>
          </div>
          <div className="text-xs leading-none text-zinc-500">
            Last Updated: {lastUpdated}
          </div>
        </div>
      </div>
    </div>
  );
};
