import * as React from 'react';
import { StageCard } from './card';
import { StageProps } from '@/types';

const stagesData: StageProps[] = [
  {
    stageNumber: 1,
    title: "Sequence Selection",
    objectives: [
      "Analyze genomic data of circulating SARS-CoV-2 variants in West Africa",
      "Select key antigenic regions based on conservation and immunogenicity",
      "Identify conserved and immunogenic regions of the SARS-CoV-2 genome"
    ],
    lastUpdated: "January 18, 2025"
  },
  {
    stageNumber: 2,
    title: "Sequence Optimization",
    objectives: [
      "Optimize codon usage for human cell expression",
      "Ensure selected sequences are suitable for expression in human cells",
      "Remove repeat sequences"
    ],
    lastUpdated: "January 18, 2025"
  },
  {
    stageNumber: 3,
    title: "Delivery Mechanism",
    objectives: [
      "Develop a basic Lipid Nanoparticle (LNP) formulation",
      "Encapsulate mRNA in LNPs",
      "Characterize LNP size and stability"
    ],
    lastUpdated: "January 18, 2025"
  },
  {
    stageNumber: 4,
    title: "Sequence Selection",
    objectives: [
      "Verify protein expression in mammalian cell lines",
      "Evaluate cellular uptake of LNPs",
      "Assess immune responses in small animal models"
    ],
    lastUpdated: "January 18, 2025"
  }
];

export const StagesView: React.FC = () => {
  return (
    <div className="flex flex-col px-64 pt-16 pb-32 mx-auto my-0 bg-white max-w-[1440px] max-md:px-10 max-md:pt-10 max-md:pb-20 max-sm:px-5 max-sm:pt-5 max-sm:pb-16">
      <div className="flex justify-between items-start mb-8 w-full">
        <div className="flex-1">
          <h1 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-zinc-950 max-sm:text-2xl">
            Stages
          </h1>
          <p className="text-sm leading-none text-zinc-700">
            Below are the project stages that we were able to extract from the documents you uploaded
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        {stagesData.map((stage, index) => (
          <StageCard key={index} {...stage} />
        ))}
      </div>
    </div>
  );
};