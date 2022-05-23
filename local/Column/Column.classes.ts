import type { PropType } from "vue";
import type { ClassProps } from "@jumpstart/types/prop";

export const classProps: ClassProps = {
    span: {
        type: [String, Array] as PropType<string | string[]>,
        default: "default",
    },
};
