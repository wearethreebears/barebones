import type { Parts } from "@barebones/types/component";
import type { Overlay } from "@barebones/types/components/Overlay";

// Base Classes
const ComponentDefault = "bg-opacity-75 z-50 fixed h-full w-full top-0 left-0";
const ComponentStateDefault = "transition-all duration-300";
const ComponentInnerDefault =
  "w-full h-full flex justify-center items-start overflow-y-auto relative";

export default function OverlayLocal(): Overlay {
  const parts: Parts = {
    component: {
      state: {
        default: [ComponentStateDefault, "opacity-0 invisible"],
        open: [ComponentStateDefault, "opacity-100 visible"],
      },
      color: {
        default: [ComponentDefault, "bg-slate-500"],
      },
    },
    componentInner: {
      color: {
        default: [ComponentInnerDefault],
      },
    },
  };

  return {
    parts,
  };
}
