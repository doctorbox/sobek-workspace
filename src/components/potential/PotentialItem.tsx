import * as React from "react";
import { PotentialItemProps } from "./types";
import Image from "next/image";
import { SummaryContainer } from "./summary/SummaryContainer";
import { useState } from "react";

export const PotentialItem: React.FC<PotentialItemProps> = ({
  icon,
  title,
  level,
  iconAlt,
}) => {
  const getLevelBars = () => {
    const bars = [];
    for (let i = 1; i <= 3; i++) {
      bars.push(
        <div
          key={i}
          className={`flex shrink-0 h-4 rounded-sm ${
            i === level
              ? `bg-green-${level === 3 ? "800" : "500"}`
              : "bg-zinc-100"
          } w-[148px]`}
        />
      );
    }
    return bars;
  };

  const [containerOpen, setContainerOpen] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden p-6 w-full bg-white rounded-lg border border-solid border-zinc-200 shadow-[0px_1px_2px_rgba(0,0,0,0.06)] max-md:px-5 max-md:max-w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center text-sm font-bold leading-none text-zinc-900">
          <Image
            loading="lazy"
            src={icon}
            alt={iconAlt}
            height={32}
            width={32}
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <div className="self-stretch my-auto w-[156px]">{title}</div>
        </div>
        <div className="flex gap-0.5 my-auto max-md:max-w-full">
          {getLevelBars()}
        </div>
        <Image
          loading="lazy"
          src="/chevron-down.svg"
          alt=""
          height={32}
          width={32}
          className="object-contain shrink-0 w-8 aspect-square cursor-pointer"
          onClick={() => setContainerOpen(!containerOpen)}
        />
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          containerOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <SummaryContainer />
      </div>
    </div>
  );
};
