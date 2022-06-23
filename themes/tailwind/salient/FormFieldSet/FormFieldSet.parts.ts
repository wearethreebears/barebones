import type { Parts } from "@barebones/types/component";
import type { FormFieldSet } from "@barebones/types/components/FormFieldSet";

// Base styles

export default function FormFieldSetLocal(): FormFieldSet {
  const parts: Parts = {
    component: {
      style: {
        default: ["p-4 border border-gray-200 mb-4"],
      },
    },
    label: {
      style: {
        default: ["text-sky-900 py-2 px-4 border border-gray-200 rounded"],
      },
    },
    fieldsWrapper: {
      default: {
        style: ["flex"],
      },
    },
  };

  return {
    parts,
  };
}
