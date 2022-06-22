import type { DynamicParts } from "@barebones/types/component";
import type { FormGroup } from "@barebones/types/components/FormGroup";

export default function FormGroupLocal(): FormGroup {
  const parts: DynamicParts = {
    default: {
      component: {
        layout: {
          default: [""],
        },
      },
    },
  };

  return {
    parts,
  };
}
