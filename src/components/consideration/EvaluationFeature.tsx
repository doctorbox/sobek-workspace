import * as React from "react";
import { EvaluationFeatureProps } from "./types";
import Image from "next/image";

export const EvaluationFeature: React.FC<EvaluationFeatureProps> = ({
  icon,
  description,
}) => {
  return (
    <div className="flex flex-col min-w-[240px] max-sm:w-full">
      <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-purple-100">
        <Image
          loading="lazy"
          src={icon}
          alt=""
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <div className="mt-6 text-sm font-medium leading-5 max-w-[240px] text-zinc-700 max-sm:max-w-full">
        {description}
      </div>
    </div>
  );
};
