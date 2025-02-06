import Image from "next/image";
import * as React from "react";

interface NoteCardProps {
  icon: string;
  title: string;
  message: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ icon, title, message }) => {
  return (
    <div className="flex flex-wrap gap-6 py-9 pr-20 pl-8 mt-10 self-start rounded-lg border border-solid bg-neutral-50 border-zinc-200 max-md:px-5 max-md:py-9 max-sm:px-4 max-sm:py-6">
      <Image
        loading="lazy"
        src={icon}
        alt=""
        width={24}
        height={24}
        className="h-[24px]"
      />
      <div className="flex flex-col flex-1 w-fit max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="text-base font-semibold text-zinc-900 max-md:max-w-full">
            {title}
          </div>
          <div className="mt-2 text-sm leading-5 text-zinc-700 max-md:max-w-full">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
