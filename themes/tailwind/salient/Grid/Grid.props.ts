import type { PropType } from "vue";
import type { ClassProps } from "@barebones/types/prop";

export const classProps: ClassProps = {
  columns: {
    type: String as PropType<string>,
    default: "default",
  },
  gap: {
    type: String as PropType<string>,
    default: "default",
  },
};
