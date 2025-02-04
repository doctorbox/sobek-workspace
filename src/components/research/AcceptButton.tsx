import * as React from "react";
import { AcceptButtonProps } from "./types";
import Image from "next/image";

export const AcceptButton: React.FC<AcceptButtonProps> = ({
  iconSrc,
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-2 justify-center items-center self-stretch px-8 py-2.5 my-auto text-sm font-medium leading-none text-green-700 bg-white rounded-md border border-green-700 border-solid min-h-[40px] max-md:px-5"
    >
      <Image
        loading="lazy"
        src={iconSrc}
        width={16}
        height={16}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
};
