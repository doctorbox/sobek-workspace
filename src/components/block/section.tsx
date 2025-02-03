import React from "react";
import BlockCard from "./card";

const blocks = [
  {
    blockNumber: 1,
    status: "UNDERWAY",
    title: "Target Protein or Segment Identification",
    description:
      "The research team has completed the task of identifying target proteins and segments for their mRNA vaccine.",
    moreInfoURL: "#",
  },
  {
    blockNumber: 2,
    status: "UNDERWAY",
    title: "Epitope Mapping and Selection",
    description:
      "The team is actively working on epitope mapping and selection using computational tools and genomic data analysis.",
    moreInfoURL: "#",
  },
  {
    blockNumber: 3,
    status: "UNDERWAY",
    title: "Conservancy Analysis of Selected Sequences",
    description:
      "The team is conducting conservancy analysis of selected sequences.",
    moreInfoURL: "#",
  },
];

function BlockSection() {
  return (
    <div className="flex flex-col gap-8 mt-12 w-full max-md:mt-10 max-md:max-w-full">
      {blocks.map((block) => (
        <BlockCard
          key={block.blockNumber}
          blockNumber={block.blockNumber}
          status={block.status}
          title={block.title}
          description={block.description}
          moreInfoURL={block.moreInfoURL}
        />
      ))}
    </div>
  );
}

export default BlockSection;
