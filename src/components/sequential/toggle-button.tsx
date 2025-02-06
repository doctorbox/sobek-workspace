import * as React from "react";
import { ToggleButtonProps } from "../common/types";

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isActive,
  children,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`flex-1 gap-2 self-stretch px-3 py-1 my-auto rounded-md min-h-[28px] content-center ${
        isActive ? "bg-white shadow text-zinc-950" : "text-zinc-500"
      }`}
    >
      {children}
    </div>
  );
};
