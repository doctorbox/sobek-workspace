import { FeatureCard } from "./feature-card";

const features = [
  {
    title: "Analyzes Your Workflow",
    description: "Upload your research documents and protocols, and our AI will map your current workflow, identifying opportunities for optimization across key development stages."
  },
  {
    title: "Offers Intelligent Guidance",
    description: "Access curated insights drawn from scientific literature, case studies, and expert annotations relevant to your specific tasks."
  },
  {
    title: "Enhances Your Process",
    description: "Discover AI tools, methodologies, and best practices that can improve your workflow while managing risks."
  },
  {
    title: "Adapts to Your Needs",
    description: "Whether you're starting fresh or optimizing existing protocols, Sobek AI provides contextual Adapts to Your Needs without being prescriptive."
  }
];

export const HelpFeatures: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center items-start px-5 py-10 mx-auto my-0 max-w-[1156px] max-md:gap-8 max-md:px-4 max-md:py-8 max-sm:px-4 max-sm:py-6 mt-[140px]">
        <div className="text-2xl font-semibold tracking-tight leading-8 text-white w-[212px] max-md:mb-6 max-md:w-full max-md:text-center">
          How Sobek AI Helps You
        </div>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </>
  );
};