import type { DynamicParts } from "@barebones/types/component";
import type { FormInput } from "@barebones/types/components/FormInput";

export default function FormInputLocal(): FormInput {
  const parts: DynamicParts = {
    file: {
      component: {
        style: {
          default: ["border border-lime-400"],
        },
      },
    },
    default: {
      component: {
        style: {
          default: ["border"],
        },
      },
    },
  };

  return {
    parts,
  };
}
