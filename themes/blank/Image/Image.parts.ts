import type { Parts } from "@barebones/types/component";
import type { Image } from "@barebones/types/components/Image";

//Base Classes

export default function ImageLocal(): Image {
  const loadingDefault: string = "";
  const loadedFalse: string = "";
  const loadedTrue: string = "";

  const parts: Parts = {
    component: {},
    image: {},
  };

  return {
    loadingDefault,
    loadedFalse,
    loadedTrue,
    parts,
  };
}
