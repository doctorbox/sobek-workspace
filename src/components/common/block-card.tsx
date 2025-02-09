import { BlockCardProps } from "./types";

/**
 * BlockCard component is a reusable card component with an optional left border color,
 * footer, and additional custom classes. It is designed to display content within a
 * styled card layout.
 *
 * @component
 * @param {BlockCardProps} props - The properties for the BlockCard component.
 * @param {React.ReactNode} props.children - The main content to be displayed inside the card.
 * @param {string} [props.leftBorderColor="purple-300"] - The color of the left border. Defaults to "purple-300".
 * @param {React.ReactNode} [props.footer] - Optional footer content to be displayed at the bottom of the card.
 * @param {string} [props.className=""] - Additional custom classes to be applied to the card.
 * @returns {JSX.Element} The rendered BlockCard component.
 */
const BlockCard: React.FC<BlockCardProps> = ({
  children,
  leftBorderColor = "purple-300", // default blue color
  footer,
  className = "",
}) => {
  return (
    <div
      className={`
        bg-white rounded-lg shadow-sm overflow-hidden
        relative
        border-${leftBorderColor}
        border-l-8
        ${className}
        border-1
      `}
    >
      {/* Main content */}
      <div className="p-10">{children}</div>

      {/* Footer with border if provided */}
      {footer && (
        <>
          <div className="h-px bg-zinc-200" />
          <div className="p-6">{footer}</div>
        </>
      )}
    </div>
  );
};

export default BlockCard;
