import type { Parts } from "@barebones/types/component";
import type { Column } from "@barebones/types/components/Column";

// Base Classes

export default function ColumnLocal(): Column {
  const parts: Parts = {
    component: {},
    },
  };

  return {
    parts,
  };
}
