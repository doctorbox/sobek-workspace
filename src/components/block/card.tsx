import Image from "next/image";

interface BlockCardProps {
  blockNumber: number;
  status: string;
  title: string;
  description: string;
  moreInfoURL: string;
}

function BlockCard({
  blockNumber,
  status,
  title,
  description,
  moreInfoURL,
}: BlockCardProps) {
  return (
    <div className="flex overflow-hidden w-full bg-white rounded-lg border border-solid border-zinc-200 shadow-[0px_1px_2px_rgba(0,0,0,0.06)]">
      <div className="w-2 h-full bg-purple-200" />
      <div className="flex-1 p-10 border-b border-solid border-b-zinc-200 max-md:p-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center text-base font-semibold text-purple-600">
            <Image src="/check.svg" alt="" width={24} height={24} />
            <div>{`Task ${blockNumber}`}</div>
          </div>
          <div className="px-3 py-1 text-xs font-medium text-yellow-600 bg-yellow-50 rounded-md border border-yellow-200 border-solid">
            {status}
          </div>
        </div>
        <div className="mt-6 text-2xl font-bold tracking-tight leading-none text-zinc-950">
          {title}
        </div>
        <div className="mt-4 text-sm leading-none text-zinc-700">
          {description}
        </div>
        <a
          href={moreInfoURL}
          className="mt-6 font-medium underline text-zinc-950"
        >
          Show more
        </a>
      </div>
      <div className="flex px-10 py-8 max-md:p-5">
        <button className="px-8 py-2.5 text-sm font-medium text-blue-900 rounded-md border border-current border-solid cursor-pointer max-md:px-5 max-md:py-2.5 max-md:w-full">
          See Scores and Sources
        </button>
      </div>
    </div>
  );
}

export default BlockCard;
