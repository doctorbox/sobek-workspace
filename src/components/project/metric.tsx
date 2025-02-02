interface ProjectMetricProps {
  label: string;
  value: string;
}

export const ProjectMetric: React.FC<ProjectMetricProps> = ({
  label,
  value,
}) => {
  return (
    <div className="flex flex-col justify-between self-stretch my-auto min-h-[44px] w-[94px] max-sm:w-full">
      <div className="font-bold text-zinc-900">{label}</div>
      <div className="mt-1 text-zinc-700">{value}</div>
    </div>
  );
};
