import type { PropType } from "vue";
import type { ClassProps } from "@jumpstart/types/prop";

export const classProps: ClassProps = {
  design: {
    type: String as PropType<string>,
    default: "default",
  },
};

export default classProps;
