import type { PropType } from "vue";
import type { ClassProps } from "@barebones/types/prop";

export const classProps: ClassProps = {
  layout: {
    type: [String, Array] as PropType<string | string[]>,
    default: "default",
  },
};
