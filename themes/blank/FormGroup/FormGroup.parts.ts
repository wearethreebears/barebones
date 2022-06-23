import type { DynamicParts } from "@barebones/types/component";
import type { FormGroup } from "@barebones/types/components/FormGroup";

// Base styles

export default function FormGroupLocal(): FormGroup {
  const parts: DynamicParts = {
    default: {
      component: {},
      labelWrapper: {},
      label: {},
      inputWrapper: {},
      input: {},
      customInput: {},
      errorWrapper: {},
      iconWrapper: {},
    },
  };

  return {
    parts,
  };
}
