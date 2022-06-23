import type { DynamicParts } from "@barebones/types/component";
import type { FormGroup } from "@barebones/types/components/FormGroup";

// Base styles
const component = "w-full pb-4";
const label = "text-sky-900";
const layoutRow = {
  component: {
    layout: {
      default: [component],
    },
  },
  labelWrapper: {
    layout: {
      default: ["flex"],
    },
  },
  label: {
    layout: {
      default: [label, "pr-4"],
    },
  },
};

export default function FormGroupLocal(): FormGroup {
  const parts: DynamicParts = {
    checkbox: layoutRow,
    radio: layoutRow,
    default: {
      component: {
        layout: {
          default: [component, "block"],
        },
      },
      label: {
        layout: {
          default: [label, "pb-1"],
        },
      },
    },
  };

  return {
    parts,
  };
}
