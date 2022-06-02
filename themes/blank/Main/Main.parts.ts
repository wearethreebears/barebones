import type { Parts } from "@barebones/types/component";
import type { Main } from "@barebones/types/components/Main";

// Base Classes

export default function MainLocal(): Main {
  const parts: Parts = {
    component: {},
  };

  return {
    parts,
  };
}
