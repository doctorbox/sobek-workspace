import { useState } from "react";
import { WorkflowHeader } from "@/components/workflow/header";
import ToggleButton from "@/components/common/toggle-button";
import BlockCard from "@/components/common/block-card";
import Image from "next/image";
import ContentBlock from "@/components/common/content-block";
import CheckDouble from "@/components/custom-icon/check-double";
import Collapse from "@/components/common/collapse";
import { Step } from "@/components/common/step";

interface Subtask {
  title: string;
  description: string;
}

interface Task {
  title: string;
  description: string;
  sub: Subtask[];
}

interface WorkflowMap {
  [key: string]: Task[]; // Dynamic keys with an array of Task objects
}

const SessionPage: React.FC = () => {
  const [toggleState, setToggle] = useState("Tasks");

  const handleToggle = (active: string) => {
    setToggle(active);
  };
  const workflowMap: WorkflowMap = {
    Tasks: [
      {
        title: "Task 1",
        description: "Codon Optimization",
        sub: [
          {
            title: "Data",
            description: "Human Codon usage tables",
          },
          {
            title: "Model",
            description: "RNAfold secondary prediction",
          },
        ],
      },
      {
        title: "Task 2",
        description: "mRNA Stability Enhancement",
        sub: [
          {
            title: "Models",
            description: "RNAfold secondary prediction",
          },
        ],
      },
    ],
    Learnings: [
      {
        title: "Learning 1",
        description: "Codon Optimization",
        sub: [
          {
            title: "Data",
            description: "Human Codon usage tables",
          },
          {
            title: "Model",
            description: "RNAfold secondary prediction",
          },
        ],
      },
      {
        title: "Learning 2",
        description: "mRNA Stability Enhancement",
        sub: [
          {
            title: "Models",
            description: "RNAfold secondary prediction",
          },
        ],
      },
    ],
  };
  const differentStepArr = [
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
    <div className="flex flex-col mx-auto self-end pb-4 w-full text-xs leading-none  max-w-[920px] max-md:max-w-full mt-14">
      <WorkflowHeader />
      <h1 className="mt-8 text-5xl font-semibold tracking-tight leading-[52px] text-zinc-950 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Emphasizing Speed and Traditional Methods with a Focus on Codon
        Optimization
      </h1>
      <div className="text-center mt-16 mb-16">
        <ToggleButton
          options={["Tasks", "Learnings"]}
          defaultActive="Tasks"
          onChange={handleToggle}
        />
      </div>
      <div className="flex flex-col gap-8">
        {workflowMap[toggleState].map((workflow, index) => (
          <BlockCard
            leftBorderColor="purple-200"
            key={index}
            footer={
              <Collapse
                headerCollapsed={<span className="underline">Show Step</span>}
                headerExpanded={<span className="underline">Hide Step</span>}
              >
                <div className="flex flex-col gap-4">
                  {differentStepArr.map((step, index) => (
                    <Step
                      key={index}
                      title={step.title}
                      description={step.description}
                    />
                  ))}
                </div>
              </Collapse>
            }
          >
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 text-purple-600 text-base font-semibold">
                <CheckDouble color="#9333EA" />
                {workflow.title}
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900">
                {workflow.description}
              </h3>
              {workflow.sub.map((sub, index) => (
                <ContentBlock heading={sub.title} key={index}>
                  {sub.description}
                </ContentBlock>
              ))}
            </div>
          </BlockCard>
        ))}
      </div>
    </div>
  );
};

export default SessionPage;
