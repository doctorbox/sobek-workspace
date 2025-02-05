import * as React from "react";
import { ContentBlock } from "./content-block";

const contentData = [
  {
    icon: "/layout-list.svg",
    title: "Stage Overview for Sequence Selection",
    description:
      "The researchers engaged in a multi-step process to identify and evaluate potential epitopes for vaccine development. They focused on structural proteins of SARS-CoV-2 and SARS-CoV, employing various computational tools for epitope prediction. The process involved predicting both B-cell and T-cell epitopes, followed by stringent filtering based on antigenicity, allergenicity, and conservancy. The researchers also conducted conservancy analysis and assessed the immunogenic potential of selected epitopes.",
    iconBgColor: "bg-blue-100",
  },
  {
    icon: "/check-check.svg",
    title: "Task Overview for Epitope Mapping and Selection",
    description:
      "The researchers began by selecting target proteins, focusing on the Spike, Envelope, Membrane, and Nucleocapsid proteins of SARS-CoV-2 and SARS-CoV. They used multiple tools to predict linear and conformational B-cell epitopes, as well as MHC Class I and II T-cell epitopes. The process involved cross-validation of results from different prediction tools. The researchers then applied stringent selection criteria, including antigenicity and allergenicity assessments, to shortlist potential epitopes for further analysis.",
    iconBgColor: "bg-purple-100",
  },
];

export const Overview: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[856px]">
      <div className="flex flex-col self-start max-md:max-w-full">
        <div className="text-lg font-semibold tracking-tight leading-loose text-zinc-900 max-md:max-w-full">
          Overview
        </div>
        <div className="mt-2 text-base tracking-normal leading-7 text-zinc-700 max-md:max-w-full">
          The authors of this paper aimed to identify potential B-cell and
          T-cell epitopes within the structural proteins of SARS-CoV-2 and
          SARS-CoV, focusing primarily on the Sequence Selection stage of
          early-stage mRNA vaccine development R&D. Their approach involved
          implementing and demonstrating three key Stage Level Tasks: Epitope
          Mapping and Selection, Conservancy Analysis of Selected.
        </div>
      </div>
      <div className="flex flex-wrap gap-10 mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex shrink-0 w-1 bg-zinc-200 h-[352px] rounded-[300px]" />
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <div className="mr-5 max-md:mr-2.5">
            {contentData.map((content, index) => (
              <div key={index} className={index > 0 ? "mt-10" : ""}>
                <ContentBlock {...content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
