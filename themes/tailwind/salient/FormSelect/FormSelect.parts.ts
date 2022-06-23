import type { Parts } from "@barebones/types/component";
import type { FormSelect } from "@barebones/types/components/FormSelect";

// Base styles

export default function FormSelectLocal(): FormSelect {
  const parts: Parts = {
    component: {
      style: {
        default: ["border border-slate-300 rounded p-2 text-slate-700 w-full"],
      },
    },
  };

  return {
    parts,
  };
}
