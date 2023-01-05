import type { PropType } from "vue";
import type { ClassProps } from "@barebones/types/prop";

export const classProps: ClassProps = {
  animation: {
    // "animation" is not required but suggested
    type: String as PropType<string>,
    default: "default",
  },
};
