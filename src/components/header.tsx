import Image from "next/image";

function Header() {
  return (
    <div className="flex flex-col mx-auto self-end pb-4 w-full text-xs leading-none border-b border-zinc-200 max-w-[920px] max-md:max-w-full">
      <div className="flex flex-wrap gap-2 items-start w-full max-md:max-w-full">
        <Image
          src="/book-text.svg"
          width={16}
          height={16}
          alt=""
          className="object-contain w-4 aspect-square"
        />
        <div className="font-semibold uppercase text-zinc-900">Project</div>
        <div className="text-zinc-700 max-md:max-w-full">
          Rapid-Response mRNA Vaccine Platform for West African SARS-CoV-2
          Variants
        </div>
      </div>
    </div>
  );
}

export default Header;
