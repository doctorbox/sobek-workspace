import React, { useState } from "react";
import ToggleButton from "../common/toggle-button";
import { Step } from "../common/step";

interface stepType {
  title: string;
  description: string;
}

const MethodologyComparisonChecker: React.FC = () => {
  const [toggleState, setToggle] = useState("Similar");

  const handleToggle = (active: string) => {
    setToggle(active);
  };

  const similarStepArr: stepType[] = [
    {
      title: "Use of Conservancy Analysis",
      description:
        "The project team performs conservancy analysis to identify conserved and immunogenic regions of the SARS-CoV-2 genome, aligning with several studies that emphasize targeting conserved regions to enhance vaccine effectiveness against variants.",
    },
    {
      title: "Emphasis on Local Variants",
      description:
        "The project focuses on local variant prevalence, analyzing genomic data from West African SARS-CoV-2 variants, which is supported by studies that tailor vaccine design to regional strains to enhance efficacy.",
    },
    {
      title: "Targeting Functional Spike Regions",
      description:
        "The project targets critical functional regions of the spike protein based on their importance, conservation, and immunogenicity, aligning with other studies that focus on essential spike regions to induce strong immune responses.",
    },
  ];

  const differentStepArr: stepType[] = [
    {
      title: "Exclusion of Non-Spike Proteins",
      description:
        "The project focuses solely on the spike protein for antigen selection, unlike other studies that include non-spike proteins to broaden the immune response and potentially enhance vaccine efficacy.",
    },
    {
      title: "Minimal Experimental Immunogenicity Validation",
      description:
        "The project omits synthesis feasibility evaluations, such as codon optimization or mRNA stability considerations during sequence selection, in contrast with studies that ensure selected sequences can be effectively synthesized and expressed.",
    },
    {
      title: "Lack of Synthesis Feasibility Evaluation",
      description:
        "The project's structural analysis focuses on specific regions of the spike protein, while other studies conduct comprehensive structural analyses to identify potential epitopes and improve vaccine design.",
    },
  ];

  return (
    <div className="pb-12">
      <div className="text-center">
        <ToggleButton
          options={["Similar", "Different"]}
          defaultActive="Similar"
          onChange={handleToggle}
        />
      </div>

      {toggleState === "Similar" ? (
        <div>
          <h2 className="font-bold text-base/6 mb-9 mt-10">
            Similar Methodologies
          </h2>
          <div className="flex flex-col gap-4">
            {similarStepArr.map((step, index) => (
              <Step
                key={index}
                title={step.title}
                description={step.description}
                source={"some-source"}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="font-bold text-base/6 mb-9 mt-10">
            Different Methodologies
          </h2>
          <div className="flex flex-col gap-4">
            {differentStepArr.map((step, index) => (
              <Step
                key={index}
                title={step.title}
                description={step.description}
                source="some-source"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MethodologyComparisonChecker;
