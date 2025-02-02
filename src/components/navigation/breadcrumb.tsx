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
    <div className="flex flex-wrap gap-2 items-center text-xs leading-none whitespace-nowrap text-zinc-500">
      <Image
        loading="lazy"
        src=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
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
