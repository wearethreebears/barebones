import type { Parts } from "@barebones/types/component";
import type { Text } from "@barebones/types/components/Text";

// Base Classes

export default function TextLocal(): Text {
  const parts: Parts = {
    component: {
      style: {
        default: ["font-sans"],
      },
      color: {
        default: ["text-slate-500"],
      },
      size: {
        default: ["text-base"],
        title: ["text-2xl"],
      },
    },
  };

  return {
    parts,
  };
}
