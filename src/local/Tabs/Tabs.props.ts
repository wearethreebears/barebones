import type { PropType } from "vue";
import type { ClassProps } from "@barebones/types/prop";

export const classProps: ClassProps = {
  theme: {
    type: String as PropType<string>,
    default: "default",
  },
};
