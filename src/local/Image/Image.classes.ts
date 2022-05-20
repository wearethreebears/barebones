import type { PropType } from "vue";
import type { ClassProps } from "@jumpstart/types/prop";

export const classProps: ClassProps = {
    width: {
        type: String as PropType<string>,
        default: "default",
    },
};
