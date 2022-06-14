import type { Parts } from "@barebones/types/component";
import type { Overlay } from "@barebones/types/components/Overlay";

// Base Classes

export default function OverlayLocal(): Overlay {
  const parts: Parts = {
    component: {},
    componentInner: {},
  };

  return {
    parts,
  };
}
