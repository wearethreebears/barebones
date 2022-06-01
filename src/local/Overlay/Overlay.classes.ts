import type { PropType } from "vue";
import type { ClassProps } from "@barebones/types/prop";

export const classProps: ClassProps = {
  state: {
    type: String as PropType<string>,
    default: "default",
  },
  color: {
    type: String as PropType<string>,
    default: "default",
  },
};
