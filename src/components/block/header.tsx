import * as React from "react";

interface TaskHeaderProps {
  taskNumber: string;
  title: string;
  subtitle: string;
}

export const BlockHeader: React.FC<TaskHeaderProps> = ({
  taskNumber,
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col font-semibold max-w-[920px]">
      <div className="flex flex-wrap gap-3 items-start w-full text-base text-emerald-800 max-md:max-w-full">
        <div>Task {taskNumber}</div>
        <div className="flex gap-3 min-h-[24px]" />
      </div>
      <div className="mt-3 text-5xl tracking-tight leading-none text-zinc-950 max-md:max-w-full max-md:text-4xl">
        {title}
      </div>
      <div className="mt-3 text-xl font-medium tracking-tight leading-snug text-zinc-900">
        {subtitle}
      </div>
    </div>
  );
};
