import * as React from "react";
import { ModelItem } from "./types";

interface ModelListProps {
  models: ModelItem[];
}

export function ModelList({ models }: ModelListProps) {
  return (
    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
      <div className="text-base font-semibold text-zinc-900 max-md:max-w-full">
        Models
      </div>
      <ul className="flex flex-col mt-2 w-full text-sm leading-none text-zinc-700 list-disc">
        {models.map((model, index) => (
          <li key={index} className="mt-1 max-md:max-w-full ml-4">
            {model.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
