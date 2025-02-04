import * as React from "react";
import { InfoRowProps } from "./types";

export const InfoRow: React.FC<InfoRowProps> = ({
  title,
  content,
  minHeight = "44px",
}) => {
  return (
    <div
      className={`flex flex-col w-full ${minHeight ? `min-h-[${minHeight}]` : ""} max-md:max-w-full`}
    >
      <div className="font-bold text-zinc-900 max-md:max-w-full">{title}</div>
      <div className="mt-1 text-zinc-700 max-md:max-w-full">{content}</div>
    </div>
  );
};
