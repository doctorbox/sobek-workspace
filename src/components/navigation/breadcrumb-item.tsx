import Link from "next/link";

type BreadcrumbItemProps = {
  text: string;
  showDivider?: boolean;
  isActive?: boolean;
  gotoRoute: string;
};

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  text,
  showDivider = true,
  isActive = false,
  gotoRoute,
}) => {
  return (
    <>
      <Link
        href={gotoRoute}
        className={`self-stretch my-auto ${isActive ? "text-zinc-700" : ""}`}
      >
        {text}
      </Link>
      {showDivider && <div className="self-stretch my-auto">/</div>}
    </>
  );
};
