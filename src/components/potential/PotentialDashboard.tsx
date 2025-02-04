import * as React from "react";
import { LegendItem } from "./LegendItem";
import { PotentialItem } from "./PotentialItem";
import { PotentialItemProps } from "./types";

const legendItems = [
  { color: "bg-green-200", label: "Low" },
  { color: "bg-green-500", label: "Medium" },
  { color: "bg-green-800", label: "High" },
];

const potentialItems: PotentialItemProps[] = [
  {
    icon: "/sparkles.svg",
    title: "AI Potential (2)",
    level: 2,
    iconAlt: "AI Potential Icon",
  },
  {
    icon: "/chart.svg",
    title: "Data Potential (4)",
    level: 3,
    iconAlt: "Data Potential Icon",
  },
  {
    icon: "/message.svg",
    title: "Risk Potential (2)",
    level: 2,
    iconAlt: "Risk Potential Icon",
  },
];

export const PotentialDashboard: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[920px] mt-10">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[701px] max-md:max-w-full">
        <div className="text-sm font-medium leading-none text-zinc-900">
          Potential
        </div>
        <div className="flex gap-10">
          {legendItems.map((item, index) => (
            <LegendItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        {potentialItems.map((item, index) => (
          <div key={index} className={index > 0 ? "mt-4" : ""}>
            <PotentialItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};
