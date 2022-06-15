import type { Parts } from "@barebones/types/component";
import type { Button } from "@barebones/types/components/Button";

// Base Classes
const ComponentDesignDefault = "p-4";
const ComponentDesignLine = "border-b-2";

export default function ButtonLocal(): Button {
  const parts: Parts = {
    component: {
      design: {
        default: [ComponentDesignDefault, "bg-red-500"],
        "default-blue": [ComponentDesignDefault, "bg-blue-500"],
        line: [ComponentDesignLine, "border-red-500"],
        "line-blue": [ComponentDesignLine, "border-blue-500"],
      },
    },
  };

  return {
    parts,
  };
}
