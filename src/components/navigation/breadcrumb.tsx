import { BreadcrumbItem } from "./breadcrumb-item";
import Image from "next/image";

type BreadcrumbData = {
  text: string;
  isActive?: boolean;
};

export const Breadcrumb: React.FC = () => {
  const items: BreadcrumbData[] = [
    { text: "Stages", isActive: true },
    { text: "Tasks" },
  ];

  return (
    <div className="flex flex-grow flex-wrap gap-2 mx-auto my-0 max-w-[920px] max-md:p-5 text-xs leading-none whitespace-nowrap text-zinc-500">
      <Image
        loading="lazy"
        src="/chevron-left.svg"
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        width={16}
        height={16}
        alt=""
      />
      {items.map((item, index) => (
        <BreadcrumbItem
          key={item.text}
          text={item.text}
          isActive={item.isActive}
          showDivider={index !== items.length - 1}
        />
      ))}
    </div>
  );
};
