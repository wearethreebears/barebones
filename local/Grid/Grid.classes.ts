import type { PropType } from "vue";
import type { ClassProps } from "@jumpstart/types/prop";

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
