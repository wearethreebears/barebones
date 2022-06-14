import type { Parts } from "@barebones/types/component";
import type { Text } from "@barebones/types/components/Text";

// Base Classes
export default function TextLocal(): Text {
  const parts: Parts = {
    component: {},
  };

  return {
    parts,
  };
}
