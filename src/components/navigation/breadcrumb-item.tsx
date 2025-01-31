
type BreadcrumbItemProps = {
  text: string;
  showDivider?: boolean;
  isActive?: boolean;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  text,
  showDivider = true,
  isActive = false
}) => {
  return (
    <>
      <div className={`self-stretch my-auto ${isActive ? 'text-zinc-700' : ''}`}>
        {text}
      </div>
      {showDivider && (
        <div className="self-stretch my-auto">/</div>
      )}
    </>
  );
};