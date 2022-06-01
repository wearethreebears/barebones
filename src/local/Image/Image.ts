import type { Parts } from "@barebones/types/component";

interface Image {
  parts: Parts;
  loadingDefault: string;
  loadedFalse: string;
  loadedTrue: string;
}

export default function image(): Image {
  const loadingDefault: string = "transition-opacity duration-300";
  const loadedFalse: string = "opacity-0";
  const loadedTrue: string = "opactity-1";

  const parts: Parts = {
    component: {},
    image: {
      width: {
        default: ["w-full"],
      },
    },
  };

  return {
    loadingDefault,
    loadedFalse,
    loadedTrue,
    parts,
  };
}
