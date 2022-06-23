import type { DynamicParts } from "@barebones/types/component";
import type { FormInput } from "@barebones/types/components/FormInput";

// Base styles

export default function FormInputLocal(): FormInput {
  const parts: DynamicParts = {
    default: {
      component: {},
      customInput: {},
    },
  };

  return {
    parts,
  };
}
