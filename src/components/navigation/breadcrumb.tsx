import { BreadcrumbItem } from "./breadcrumb-item";
import Image from "next/image";
import { useRouter } from "next/router";

type BreadcrumbData = {
  text: string;
  isActive?: boolean;
  gotoRoute: string;
};

export const Breadcrumb: React.FC = () => {
  const router = useRouter();

  type RouterMapItem = {
    routePath: string;
    text: string;
    gotoRoute: string;
  };

  const routerMap: RouterMapItem[] = [
    {
      routePath: "/session",
      text: "Stages",
      gotoRoute: "/session",
    },
    {
      routePath: "/session/[levelId]",
      text: "Tasks",
      gotoRoute: `/session/${router.query.levelId}`,
    },
    {
      routePath: "/session/[levelId]/proposed-workflow-[id]",
      text: "Propesed Workflow",
      gotoRoute: `/session/${router.query.levelId}/proposed-workflow-${router.query.subId}`,
    },
    {
      routePath: "/session/[levelId]/[subId]/score-source",
      text: "Score and Sources",
      gotoRoute: `/session/${router.query.levelId}/${router.query.subId}/score-source`,
    },
    {
      routePath:
        "/session/[levelId]/[subId]/score-source/learning-[learningId]",
      text: "Learning",
      gotoRoute: `/session/${router.query.levelId}/${router.query.subId}/score-source/learning-${router.query.learningId}`,
    },
  ];

  const items: BreadcrumbData[] = routerMap.filter((route) => {
    console.log(route.routePath, router.pathname);
    if (router.pathname.startsWith(route.routePath)) {
      return true;
    }
  });

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
          gotoRoute={item.gotoRoute}
          showDivider={index !== items.length - 1}
        />
      ))}
    </div>
  );
};
