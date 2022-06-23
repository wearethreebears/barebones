import type { Parts } from "@barebones/types/component";
import type { Aside } from "@barebones/types/components/Aside";

// Base Classes

export default function AsideLocal(): Aside {
  const parts: Parts = {
    component: {
      padding: {
        default: ["p-4"],
      },
    },
  };

  return {
    parts,
  };
}
