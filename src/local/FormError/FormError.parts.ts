import type { Parts } from "@barebones/types/component";
import type { FormError } from "@barebones/types/components/FormError";

export default function FormErrorLocal(): FormError {
  const parts: Parts = {
    component: {},
  };

  return {
    parts,
  };
}
