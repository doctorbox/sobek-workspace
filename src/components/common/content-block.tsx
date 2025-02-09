import { ContentBlockProps } from "./types";

const ContentBlock: React.FC<ContentBlockProps> = ({ heading, children }) => {
  return (
    <div className="flex flex-col justify-start gap-2 ">
      {/* Heading */}
      <h2 className="text-base/6 font-semibold text-zinc-900">{heading}</h2>

      {/* Content */}
      <div className="text-sm/5 text-zinc-700">{children}</div>
    </div>
  );
};

export default ContentBlock;
