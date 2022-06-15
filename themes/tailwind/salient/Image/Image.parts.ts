import type { Parts } from "@barebones/types/component";
import type { Image } from "@barebones/types/components/Image";

//Base Classes

export default function ImageLocal(): Image {
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
