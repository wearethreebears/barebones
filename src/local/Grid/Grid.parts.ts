import type { Parts } from "@barebones/types/component";
import type { Grid } from "@barebones/types/components/Grid";

// Base Classes

export default function GridLocal(): Grid {
  const parts: Parts = {
    component: {
      columns: {
        default: ["grid grid-cols-12 w-full"],
      },
      gap: {
        default: ["gap-4"],
      },
    },
  };

  return {
    parts,
  };
}
