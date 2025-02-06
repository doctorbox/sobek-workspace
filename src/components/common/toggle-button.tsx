import type React from "react";
import { useState } from "react";

interface ToggleButtonGroupProps {
  options: string[];
  defaultActive?: string;
  onChange?: (active: string) => void;
  className?: string;
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  options,
  defaultActive,
  onChange,
  className = "",
}) => {
  const [activeOption, setActiveOption] = useState(defaultActive || options[0]);

  const handleToggle = (option: string) => {
    setActiveOption(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div
      className={`inline-flex p-[4px] rounded-lg bg-neutral-200 ${className}`}
      role="group"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`
            px-3 w-[220px] py-1.5 text-sm font-medium rounded-md transition-all duration-200 ease-in-out 
            ${activeOption === option ? "bg-white text-black" : "text-zinc-600 hover:text-black"}
            focus:outline-none
          `}
          style={{
            boxShadow:
              activeOption === option
                ? "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                : "none",
          }}
          onClick={() => handleToggle(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
