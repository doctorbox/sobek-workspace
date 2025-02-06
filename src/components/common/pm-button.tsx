import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // Content inside the button
  onClick?: () => void; // Optional click handler
  disabled?: boolean; // Optional disabled state
  className?: string; // Optional additional classes
}

const PmButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  className,
}) => {
  // Base Tailwind styles
  const baseStyles =
    "flex p-2 px-8 justify-center items-center font-medium text-sm rounded-md border text-blue-800 transition-colors border-blue-800 bg-white hover:bg-blue-800 hover:text-white disabled:bg-zinc-100 disabled:text-zinc-400 disabled:border-zinc-100";

  // Combine base styles with optional custom classes
  const combinedClasses = `${baseStyles} ${className || ""}`;

  return (
    <button className={combinedClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default PmButton;
