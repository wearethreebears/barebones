import type { PropType } from "vue";
import type { ClassProps } from "@barebones/types/prop";

export const classProps: ClassProps = {
  animation: {
    type: String as PropType<string>,
    default: "default",
  },
  design: {
    type: String as PropType<string>,
    default: "default",
  },
};
