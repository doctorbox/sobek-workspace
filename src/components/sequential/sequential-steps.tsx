import * as React from "react";
import { Step } from "../common/step";
import { ToggleButton } from "./toggle-button";

const steps = [
  {
    number: "01",
    title: "Select Proteins",
    description:
      "Selected S, E, M, and N proteins due to their crucial roles and strong immune responses, especially in S and N.",
  },
  {
    number: "02",
    title: "Filter Epitopes",
    description:
      "Applied criteria using VaxiJen for antigenicity, AllerTop for allergenicity, IEDB tools for conservancy, and IFNepitope for IFN-γ induction.",
  },
];

export const SequentialSteps: React.FC = () => {
  const [isSequential, setIsSequential] = React.useState(true);

  const setIsSequentialFalse = () => {
    setIsSequential(false);
  };
  const setIsSequentialTrue = () => {
    setIsSequential(true);
  };
  return (
    <div className="flex relative flex-col px-20 py-0 max-w-[922px] max-md:px-5 max-md:py-0">
      <div className="flex z-0 flex-col items-center w-full text-sm font-medium leading-none text-center whitespace-nowrap max-md:max-w-full">
        <div className="flex flex-col justify-center p-1 max-w-full rounded-lg bg-black bg-opacity-10 min-h-[36px] w-[447px]">
          <div className="flex justify-center items-center w-full max-md:max-w-full">
            <div className="flex-1" onClick={setIsSequentialTrue}>
              <ToggleButton isActive={isSequential}>Sequential</ToggleButton>
            </div>
            <div className="flex-1" onClick={setIsSequentialFalse}>
              <ToggleButton isActive={!isSequential}>
                Non-Sequential
              </ToggleButton>
            </div>
          </div>
        </div>
      </div>

      <div className="flex z-0 flex-col mt-10 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="text-base font-semibold text-zinc-900 max-md:max-w-full">
            Undertaken Sequential Steps
          </div>
          <div className="mt-2 text-sm leading-none text-zinc-700 max-md:max-w-full">
            Steps that are part of a continuous sequence, each step following
            temporally from the one before.
          </div>
        </div>

        <div className="flex flex-col mt-9 w-full text-sm max-md:max-w-full">
          {steps.map((step, index) => (
            <div key={step.number} className={index > 0 ? "mt-4" : ""}>
              <Step {...step} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex absolute z-0 w-1 h-4 bg-zinc-200 bottom-[116px] left-[46px] min-h-[16px]" />
    </div>
  );
};
