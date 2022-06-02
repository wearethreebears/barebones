import type { Parts } from "@barebones/types/component";
import type { Grid } from "@barebones/types/components/Grid";

// Base Classes
const ComponentColumnsDefault = "grid";

export default function GridLocal(): Grid {
  const parts: Parts = {
    component: {
      columns: {
        default: [ComponentColumnsDefault, "grid-cols-12 w-full"],
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
