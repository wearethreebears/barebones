import type { Parts } from "@barebones/types/component";
import type { Section } from "@barebones/types/components/Section";

// Base Classes

export default function SectionLocal(): Section {
  const parts: Parts = {
    component: {},
  };

  return {
    parts,
  };
}
