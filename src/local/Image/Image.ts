import type { Parts } from "@barebones/types/component";

// Loading classes
export const loadingDefault = "transition-opacity duration-300";
export const loadedFalse = "opacity-0";
export const loadedTrue = "opactity-1";

// Base Classes

const parts: Parts = {
  component: {},
  image: {
    width: {
      default: ["w-full"],
    },
  },
};

export default parts;
