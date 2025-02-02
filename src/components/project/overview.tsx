import * as React from "react";
import { ProjectMetric } from "./metric";
import type { ProjectDetailProps, KeyChallengeProps } from "@/types";

const projectDetails: ProjectDetailProps = {
  organization: "Vaccine Research Laboratory",
  location: "West Africa",
  timeline: "12 months",
  budget: "$700,000",
  teamSize: "7 members",
};

const challenges: KeyChallengeProps[] = [
  { challenge: "Limited resources and infrastructure" },
  { challenge: "Variant evolution and surveillance" },
  { challenge: "LNP formulation efficiency" },
  { challenge: "Limited animal study capabilities" },
];

export const ProjectOverview: React.FC = () => {
  return (
    <>
      <div className="flex flex-col px-5 py-10 mx-auto my-0 max-w-[920px] max-md:p-5">
        <div className="flex flex-col w-full">
          <div className="text-5xl font-semibold tracking-tight leading-[52px] text-zinc-950 max-md:text-4xl max-md:leading-10">
            Rapid-Response mRNA Vaccine Platform for West African SARS-CoV-2
            Variants
          </div>
          <div className="flex flex-wrap gap-6 items-center py-4 mt-8 w-full text-sm leading-none border-t border-b border-zinc-200 max-sm:flex-col max-sm:gap-4">
            <div className="flex flex-col flex-1 justify-between self-stretch my-auto basis-0 min-h-[44px] min-w-[240px] max-sm:w-full">
              <div className="font-bold text-zinc-900">Organization</div>
              <div className="mt-1 text-zinc-700">
                {projectDetails.organization}
              </div>
            </div>
            <ProjectMetric label="Location" value={projectDetails.location} />
            <ProjectMetric label="Timeline" value={projectDetails.timeline} />
            <ProjectMetric label="Budget" value={projectDetails.budget} />
            <ProjectMetric label="Team" value={projectDetails.teamSize} />
          </div>
          <div className="flex flex-col mt-12 w-full">
            <div className="text-lg font-semibold tracking-tight leading-loose text-zinc-900">
              Project Focus
            </div>
            <div className="mt-2 text-base tracking-normal leading-7 text-zinc-700">
              This project aims to develop a rapid-response mRNA vaccine
              platform targeting emerging SARS-CoV-2 variants in West Africa.
              The team is focusing on creating a flexible vaccine candidate
              adaptable to the evolving landscape of COVID-19 in the region.
              They are leveraging genomic surveillance data from five West
              African countries to identify prevalent variants, including
              B.1.1.7 (Alpha), B.1.351 (Beta), B.1.617.2 (Delta), and a novel
              lineage designated as WAF-1. The project combines bioinformatics,
              molecular biology, and immunology to address specific challenges
              posed by SARS-CoV-2 variants circulating in West African
              populations.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-12 w-full max-md:flex-col">
          <div className="flex flex-col min-w-[240px] w-[566px] max-md:w-full">
            <div className="text-lg font-semibold tracking-tight leading-loose text-zinc-900">
              Team Composition
            </div>
            <div className="mt-2 text-sm leading-6 text-zinc-700">
              The core team consists of 7 members, including a Principal
              Investigator (Dr. Aisha Ndiaye), two Co-Investigators (Dr. Kwame
              Osei and Dr. Fatima Sow), a Senior Research Assistant, two
              Research Assistants, and a Lab Technician. The team has expertise
              in molecular virology, immunology, and pharmaceutical sciences.
            </div>
          </div>
          <div className="flex flex-col flex-1 basis-0 min-w-[240px]">
            <div className="text-lg font-semibold tracking-tight leading-loose text-zinc-900">
              Key Challenges
            </div>
            <div className="flex flex-col gap-1 mt-2 w-full text-sm leading-none text-zinc-700">
              {challenges.map((item, index) => (
                <div key={index} className="gap-2 self-stretch w-full">
                  {item.challenge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
