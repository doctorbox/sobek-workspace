import * as React from "react";
import { AvatarProps } from "@/types";

export const Avatar: React.FC<AvatarProps> = ({ initials, className }) => {
  return (
    <div
      className={`w-9 h-9 text-sm font-medium bg-white rounded-full border border-solid shadow-sm transition-all cursor-pointer border-black border-opacity-10 duration-[0.2s] ease-[ease-in-out] text-zinc-950 max-sm:w-8 max-sm:h-8 max-sm:text-xs flex items-center justify-center ${className}`}
      role="button"
      tabIndex={0}
    >
      {initials}
    </div>
  );
};
