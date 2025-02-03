import Image from "next/image";
import { Inter } from "next/font/google";
import { MainHeading } from "@/components/main-heading";
import { ProjectDetails } from "@/components/project-detail";
import { HelpFeatures } from "@/components/help-features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const projectData = {
    title:
      "Rapid-Response mRNA Vaccine Platform for West African SARS-CoV-2 Variants",
    organization: "Vaccine Research Laboratory",
    location: "West Africa",
    timeline: "12 months",
    description:
      "This project aims to develop a rapid-response mRNA vaccine platform targeting emerging SARS-CoV-2 variants in West Africa. The team is focusing on creating a flexible vaccine candidate adaptable to the evolving landscape of COVID-19 in the region. They are leveraging genomic surveillance data from five West African countries to identify prevalent variants, including B.1.1.7 (Alpha), B.1.351 (Beta), B.1.617.2 (Delta), and a novel lineage designated as WAF-1. The project combines bioinformatics, molecular biology, and immunology to address specific challenges posed by SARS-CoV-2 variants circulating in West African populations.",
    documents: [
      { title: "Research Proposal.pdf" },
      { title: "Sequence Selection Protocol.pdf" },
      { title: "Regional Variant Data.pdf" },
      { title: "Lab Capabilities.pdf" },
    ],
  };
  return (
    <div className="flex flex-col w-full">
      {/* Hero section with background image - adjusted height */}
      <section className="relative h-[950px] w-full">
        <Image
          src="/bkgd.png"
          alt="Abstract purple and blue waves background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="relative z-10 ml-5 mt-10 flex">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={94}
            height={94}
            className="p-[15px]"
          />
          <MainHeading name="Jane" />
        </div>
        <div className="relative z-10 mt-[80px] mx-[140px]">
          <div className="flex text-white">
            <span className="text-5xl basis-124 grow-0 shrink-0 w-[450px]">
              Your research journey is unique.
            </span>
            <span className="text-2xl">
              Sobek AI is designed to support researchers like you, ensuring
              that cutting-edge mRNA vaccine development capabilities are
              accessible to scientists worldwide and adaptable to your unique
              needs.
            </span>
          </div>
        </div>
        <div className="relative z-10">
          <HelpFeatures />
        </div>
      </section>

      {/* Scrollable content section - wider and overlapping */}
      <section className=" mx-auto px-4 -mt-16 z-10 pb-5 bg-gradient-to-b from-[#f4f4f5] to-[#ffffff]">
        <div className="space-y-12">
          <div className="bg-white rounded-lg px-6 -mt-[60px] pb-8">
            <h2
              className={`${inter.className} text-[48px] font-semibold mb-4 pt-[80px] text-center text-indigo-900`}
            >
              Your research
            </h2>
            <h3 className="text-xl text-center mb-5">
              Jon, based on uploaded documents, we’ve prepared the following
              project summary.
            </h3>
            <ProjectDetails {...projectData} />
          </div>
        </div>
      </section>
    </div>
  );
}
