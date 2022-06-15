import type { PropType } from "vue";
import type { ClassProps } from "@barebones/types/prop";

export const classProps: ClassProps = {
  width: {
    type: String as PropType<string>,
    default: "default",
  },
};
