import type { Parts } from "@barebones/types/component";
import type { Button } from "@barebones/types/components/Button";

// Base Classes
const ComponentDesignDefault = "py-2 px-4 rounded text-white border";
const ComponentDesignLine = "border-b-2 py-2";

export default function ButtonLocal(): Button {
  const parts: Parts = {
    component: {
      design: {
        default: [ComponentDesignDefault, "bg-sky-600 border-sky-700"],
        "default-grey": [ComponentDesignDefault, "bg-gray-500 border-gray-600"],
        line: [ComponentDesignLine, "border-sky-500 text-gray-600"],
        "line-grey": [ComponentDesignLine, "border-gray-500 text-gray-600"],
      },
    },
  };

  return {
    parts,
  };
}
