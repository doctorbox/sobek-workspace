import * as React from "react";
import { SummarySection } from "./SummarySection";

export function SummaryContainer() {
  const summaryData = {
    summaryText:
      "The project could enhance its epitope mapping and selection by integrating additional computational tools for more comprehensive predictions. Incorporating BepiPred-2.0 would refine B-cell epitope predictions, complementing their use of the IEDB Analysis Resource, while NetMHCIIpan 4.0 could expand T-cell epitope predictions to include a broader range of HLA class II alleles prevalent in West African populations. Additionally, utilizing the IFNepitope Server may help prioritize epitopes capable of inducing critical interferon-gamma responses.",
    opportunities: [
      {
        title:
          "Potential immune epitope map for structural proteins of SARS-CoV-2",
        description:
          "The team could enhance their Epitope Mapping and Selection process by integrating several predictive tools from this study.",
      },
      {
        title:
          "A novel approach to designing viral precision vaccines applied to SARS-CoV-2",
        description:
          "The team might consider integrating BepiPred-2.0 into their Epitope Mapping and Selection process to enhance the predictive accuracy.",
      },
    ],
  };

  return (
    <SummarySection
      summaryText={summaryData.summaryText}
      opportunities={summaryData.opportunities}
    />
  );
}
