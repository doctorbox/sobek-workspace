import * as React from "react";
import { MethodologyContentProps } from "./types";

export const MethodologyContent: React.FC<MethodologyContentProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <div className="mt-3 text-5xl tracking-tight leading-none text-zinc-950 max-md:max-w-full max-md:text-4xl">
        {title}
      </div>
      <div className="mt-3 text-xl font-medium tracking-tight leading-7 text-zinc-900 max-md:max-w-full">
        {description}
      </div>
    </>
  );
};
