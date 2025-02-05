import * as React from "react";
import { Opportunity } from "./opportunity";
import { ModelList } from "./model-list";
import { OpportunityProps } from "./types";
import Image from "next/image";

const opportunityData: OpportunityProps = {
  title: "Opportunity",
  description:
    "The team could enhance their Epitope Mapping and Selection process by integrating several predictive tools from this study. Incorporating BepiPred-2.0 would allow the team to cross-validate and refine their current linear B-cell epitope predictions, complementing the IEDB Analysis Resource they are already using. By adding NetMHCIIpan 4.0 to their workflow, the team can predict CD4+ T-cell epitopes across a broader range of HLA class II alleles prevalent in West African populations, improving the identification of promiscuous epitopes with wider population coverage. Utilizing the Proteasomal Cleavage/TAP Transport/MHC Class I Combined Predictor could refine the selection of CD8+ T-cell epitopes by considering antigen processing pathways, ensuring that predicted epitopes are naturally processed and presented on MHC class I molecules. Incorporating the IFNepitope Server would help the team prioritize epitopes capable of inducing interferon-gamma responses, which are crucial for antiviral immunity. Lastly, integrating DiscoTope into their methodology would enable the identification of conformational B-cell epitopes using structural data, uncovering important epitopes that may not be detected through linear sequence analysis alone.",
  models: [
    { name: "BepiPred-2.0" },
    { name: "NetMHCIIpan 4.0" },
    { name: "DiscoTope" },
  ],
};

export function AIPotential() {
  return (
    <div className="flex flex-col max-w-[920px] mt-14">
      <div className="flex flex-col py-8 pr-20 pl-8 w-full rounded-lg border border-cyan-200 border-solid bg-cyan-50 bg-opacity-40 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-6 self-start text-2xl font-bold tracking-tight leading-none text-cyan-600">
          <Image
            loading="lazy"
            src="/sparkles.svg"
            alt=""
            width={24}
            height={24}
            className="object-contain shrink-0 my-auto w-6 aspect-square"
          />
          <div className="basis-auto">AI Potential</div>
        </div>
        <div className="flex flex-col self-end mt-8 w-full max-w-[760px] max-md:max-w-full">
          <Opportunity
            title={opportunityData.title}
            description={opportunityData.description}
            models={opportunityData.models}
          />
          <ModelList models={opportunityData.models} />
        </div>
      </div>
    </div>
  );
}
