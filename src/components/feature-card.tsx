import { FeatureCardProps } from "@/types";

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-start pl-4 w-[200px] max-md:w-[calc(50%_-_16px)] max-sm:w-full border-l border-white/20">
      <div className="mb-2 text-2xl font-semibold tracking-tight leading-8 text-emerald-300 max-sm:text-xl max-sm:leading-7">
        {title}
      </div>
      <div className="text-base leading-6 text-white max-sm:text-sm max-sm:leading-6">
        {description}
      </div>
    </div>
  );
};