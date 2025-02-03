import router from "next/router";
import { DocumentList } from "./document-list";
import { ProjectDetailsProps } from "@/types";

export function ProjectDetails({
  title,
  organization,
  location,
  timeline,
  description,
  documents,
}: ProjectDetailsProps) {
  return (
    <div className="overflow-hidden pb-4 pl-12 bg-white rounded-lg border border-solid border-zinc-200 shadow-[0px_1px_2px_rgba(0,0,0,0.06)] max-md:pl-5 mb-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch pr-12 my-auto w-full text-sm max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <h1 className="w-full text-2xl font-bold tracking-tight leading-8 text-zinc-950 max-md:max-w-full">
                {title}
              </h1>
              <div className="flex flex-wrap gap-6 items-center self-start mt-6 leading-none max-md:max-w-full">
                <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[258px]">
                  <div className="font-bold text-zinc-900">Organization</div>
                  <div className="mt-1 text-zinc-700">{organization}</div>
                </div>
                <div className="flex flex-col self-stretch my-auto w-[212px]">
                  <div className="font-bold text-zinc-900">Location</div>
                  <div className="mt-1 text-zinc-700">{location}</div>
                </div>
                <div className="flex flex-col self-stretch my-auto w-[212px]">
                  <div className="font-bold text-zinc-900">Timeline</div>
                  <div className="mt-1 text-zinc-700">{timeline}</div>
                </div>
              </div>
              <div className="mt-6 leading-6 text-zinc-700 max-md:max-w-full">
                {description}
              </div>
            </div>

            <button
              className="gap-2 self-start px-8 py-2.5 mt-8 font-medium leading-none text-white bg-indigo-800 rounded-md min-h-[40px] shadow-[0px_1px_3px_rgba(0,0,0,0.1)] max-md:px-5"
              tabIndex={0}
              onClick={() => router.push("/session")}
            >
              Open Session
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full bg-[linear-gradient(180deg,_#EEF2FF_0%,_#FFF_100%)]">
          <div className="flex flex-col grow pt-12 pb-48 max-md:pb-24">
            <div className="flex flex-col pl-6 max-md:pl-5">
              <h2 className="text-lg font-semibold tracking-tight leading-loose text-zinc-900 pb-[24px] border-b">
                Uploaded documents
              </h2>

              <DocumentList documents={documents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
