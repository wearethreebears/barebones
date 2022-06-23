import type { Parts } from "@barebones/types/component";
import type { Overlay } from "@barebones/types/components/Overlay";

// Base Classes

export default function OverlayLocal(): Overlay {
  const parts: Parts = {
    component: {
      state: {
        default: ["transition-all duration-300 opacity-0 invisible"],
        open: ["transition-all duration-300 opacity-100 visible"],
      },
      color: {
        default: [
          "bg-opacity-75 z-50 fixed h-full w-full top-0 left-0 bg-slate-500",
        ],
      },
    },
    overlayInner: {
      color: {
        default: [
          "w-full h-full flex justify-center items-start overflow-y-auto relative",
        ],
      },
    },
  };

  return {
    parts,
  };
}
