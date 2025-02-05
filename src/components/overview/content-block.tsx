import * as React from "react";
import { ContentBlockProps } from "./types";
import Image from "next/image";

export const ContentBlock: React.FC<ContentBlockProps> = ({
  icon,
  title,
  description,
  iconBgColor,
}) => {
  return (
    <div className="flex flex-wrap gap-6">
      <Image
        loading="lazy"
        src={icon}
        alt=""
        width={24}
        height={24}
        className={`object-contain shrink-0 self-start w-12 h-12 ${iconBgColor} rounded aspect-square p-[15px]`}
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="text-lg font-semibold tracking-tight leading-loose text-zinc-900 max-md:max-w-full">
          {title}
        </div>
        <div className="mt-2 text-sm leading-6 text-zinc-700 max-md:max-w-full">
          {description}
        </div>
      </div>
    </div>
  );
};
