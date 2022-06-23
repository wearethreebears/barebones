import type { Parts } from "@barebones/types/component";
import type { FormFieldSet } from "@barebones/types/components/FormFieldSet";

// Base styles

export default function FormFieldSetLocal(): FormFieldSet {
  const parts: Parts = {
    component: {},
    label: {},
    fieldsWrapper: {},
  };

  return {
    parts,
  };
}
