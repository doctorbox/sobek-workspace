import * as React from "react";
import { InfoRow } from "./InfoRow";
import { AcceptButton } from "./AcceptButton";

const researchInfo = [
  { title: "Published", content: "Research Article, 2020" },
  {
    title: "Organization(s)",
    content:
      "Tezpur University, National Institute of Immunology, Bodoland University, Nagaland University",
  },
  { title: "Country", content: "India" },
];

export const ResearchArticle: React.FC = () => {
  const handleAcceptLearnings = () => {
    // Handle accept learnings action
  };

  return (
    <div className="flex flex-col max-w-[920px]">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap justify-between items-center w-full max-md:max-w-full">
          <div className="flex flex-wrap flex-1 shrink gap-3 items-center self-stretch my-auto text-base font-semibold basis-16 min-w-[240px] max-md:max-w-full">
            <div className="self-stretch my-auto text-cyan-800">
              AI Potential
            </div>
            <div className="flex-1 shrink self-stretch my-auto basis-0 text-zinc-900 max-md:max-w-full">
              Learnings for Epitope Mapping and Selection
            </div>
          </div>
          <AcceptButton
            iconSrc="/check-single.svg"
            text="Accept New Learnings"
            onClick={handleAcceptLearnings}
          />
        </div>
        <h1 className="mt-8 text-5xl font-semibold tracking-tight leading-[52px] text-zinc-950 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Potential immune epitope map for structural proteins of SARS-CoV-2
        </h1>
      </div>
      <div className="flex flex-col py-4 mt-8 w-full text-sm leading-none border-t border-b border-zinc-200 max-md:max-w-full">
        {researchInfo.map((info, index) => (
          <div key={info.title} className={index > 0 ? "mt-4" : ""}>
            <InfoRow
              title={info.title}
              content={info.content}
              minHeight={info.title === "Country" ? "44px" : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
