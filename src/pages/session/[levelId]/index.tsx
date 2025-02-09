import React from "react";
import { useRouter } from "next/router";
import OverviewSection from "@/components/block/overview";
import BlockSection from "@/components/block/section";
import BgWrapper from "@/components/bg-wrapper";
import BlockCard from "@/components/common/block-card";
import PmButton from "@/components/common/pm-button";

interface WorkflowData {
  title: string;
  description: string;
  bgColor: string;
}

const SessionPage: React.FC = () => {
  const router = useRouter();
  const { levelId } = router.query;

  const workflowsData: WorkflowData[] = [
    {
      title:
        "Emphasizing Speed and Traditional Methods with a Focus on Codon Optimization",
      description:
        "This protocol outlines a streamlined approach to sequence optimization, prioritizing speed and the use of traditional methods with a strong emphasis on codon optimization. It is designed to enhance mRNA vaccine efficacy by rapidly optimizing codon usage, mRNA stability, and translation efficiency while minimizing resource demands. By leveraging established methodologies and focusing on key elements that impact protein expression, the protocol accelerates development timelines without compromising on quality. Each task incorporates careful assessment and iteration to mitigate risks, aligning with the project's goals of efficiency and practicality.",
      bgColor: "blue-300",
    },
    {
      title:
        "Comprehensive Approach with Newer Techniques Focusing on mRNA Stability Enhancement",
      description:
        "This protocol presents a comprehensive strategy for optimizing mRNA sequences, incorporating newer techniques with a particular focus on enhancing mRNA stability. It systematically addresses critical tasks such as codon optimization, mRNA stability enhancement, immunogenicity management, UTR design and optimization, regulatory element optimization, and thermal stability optimization. By leveraging advanced computational models like the LinearDesign algorithm and tools such as ViennaRNA, CONTRAfold, IntaRNA, and NetNGlyc, the protocol ensures efficient translation and increased stability while minimizing immunogenicity. Emphasis on minimizing double-stranded RNA regions, incorporating modified nucleotides, and optimizing UTRs contributes to the development of effective and stable mRNA vaccines suitable for distribution in resource-limited settings like West Africa.",
      bgColor: "blue-300",
    },
    {
      title:
        "Lower-Cost Approach with Straightforward Methods Focusing on Immunogenicity Reduction",
      description:
        "This sequence optimization protocol meets the specified standards, ensuring clarity and alignment between the tasks, data, models, and literature contributions. It focuses on enhancing mRNA vaccine efficacy through straightforward and cost-effective methods, emphasizing immunogenicity reduction. By optimizing codon usage, incorporating modified nucleotides judiciously, managing immunogenicity through careful sequence selection, and refining untranslated regions (UTRs) and regulatory elements.",
      bgColor: "blue-300",
    },
  ];

  return (
    <>
      <div className="flex flex-col mx-auto self-end pb-10 w-full text-xs leading-none border-b border-zinc-200 max-w-[920px] max-md:max-w-full">
        <OverviewSection />
        <BlockSection />
      </div>
      {levelId === "2" && (
        <BgWrapper backgroundColor={"bg-[#F4F4F5]"}>
          <div className="pt-3">
            <div className="flex justify-between items-start mb-8 w-full">
              <div className="flex-1">
                <h1 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-zinc-950 max-sm:text-2xl">
                  Proposed Workflows for Sequence Optimization
                </h1>
                <p className="text-sm leading-none text-zinc-700">
                  Given that you have not fleshed out a detailed protocol for
                  the Sequence Optimization phase of your project, we have
                  created potential workflows that you might adopt for this
                  stage.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {workflowsData.map((workflow, index) => (
                <BlockCard
                  key={index}
                  leftBorderColor={workflow.bgColor}
                  footer={
                    <PmButton
                      onClick={() =>
                        router.push(
                          `/session/${levelId}/proposed-worlkflow-${index + 1}`
                        )
                      }
                    >
                      Go to Proposed Workflow
                    </PmButton>
                  }
                >
                  <div className="flex flex-col gap-4">
                    <div className="text-lg font-semibold text-zinc-900">
                      {workflow.title}
                    </div>
                    <div className="text-sm/6 text-zinc-700">
                      {workflow.description}
                    </div>
                  </div>
                </BlockCard>
              ))}
            </div>
          </div>
        </BgWrapper>
      )}
    </>
  );
};

export default SessionPage;
