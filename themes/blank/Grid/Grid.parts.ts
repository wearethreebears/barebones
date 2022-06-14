import type { Parts } from "@barebones/types/component";
import type { Grid } from "@barebones/types/components/Grid";

// Base Classes

export default function GridLocal(): Grid {
  const parts: Parts = {
    component: {},
  };

  return {
    parts,
  };
}
