import { useState, useRef, useEffect, useCallback } from "react";
import { CollapseProps } from "./types";

/**
 * Collapse component that provides a collapsible section with a header.
 *
 * @param {CollapseProps} props - The properties for the Collapse component.
 * @param {React.ReactNode} props.headerCollapsed - The content to display in the header when the section is collapsed.
 * @param {React.ReactNode} props.headerExpanded - The content to display in the header when the section is expanded.
 * @param {React.ReactNode} props.children - The content to display inside the collapsible section.
 * @param {string} [props.className] - Additional class names to apply to the outer container.
 * @param {string} [props.contentClassName] - Additional class names to apply to the content container.
 *
 * @returns {JSX.Element} The rendered Collapse component.
 *
 * @example
 * ```tsx
 * <Collapse
 *   headerCollapsed={<span>Show More</span>}
 *   headerExpanded={<span>Show Less</span>}
 * >
 *   <p>This is the content that will be toggled.</p>
 * </Collapse>
 * ```
 */
const Collapse = ({
  headerCollapsed,
  headerExpanded,
  children,
  className = "",
  contentClassName = "",
}: CollapseProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleCollapse = useCallback(() => {
    if (isAnimating) return;
    setIsExpanded((prev) => !prev);
  }, [isAnimating]);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const handleTransitionEnd = () => setIsAnimating(false);
    contentElement.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      contentElement.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    if (isExpanded) {
      contentElement.style.height = `${contentElement.scrollHeight + 2}px`;
      contentElement.style.maxHeight = `${contentElement.scrollHeight + 2}px`;
    } else {
      contentElement.style.maxHeight = "0";
    }
  }, [isExpanded, children]);

  return (
    <div className={`w-full ${className}`}>
      <button
        type="button"
        onClick={toggleCollapse}
        aria-expanded={isExpanded}
        aria-controls="collapsible-content"
        className="w-full flex justify-between items-center gap-4"
      >
        <div className="flex-1 text-left text-sm">
          {isExpanded ? headerExpanded : headerCollapsed}
        </div>
        <svg
          style={{
            transform: `rotate(${isExpanded ? 180 : 0}deg)`,
            transition: "transform 300ms ease-in-out",
          }}
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        ref={contentRef}
        id="collapsible-content"
        role="region"
        aria-labelledby="collapsible-header"
        style={{
          maxHeight: 0,
          overflow: "hidden",
          transition: "max-height 300ms ease-in-out",
        }}
        className={contentClassName}
      >
        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
