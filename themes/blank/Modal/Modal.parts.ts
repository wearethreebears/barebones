import type { Parts } from "@barebones/types/component";
import type { Modal } from "@barebones/types/components/Modal";

// Base Classes

export default function ModalLocal(): Modal {
  const parts: Parts = {
    component: {},
    titleWrapper: {},
    modalClose: {},
    overlayClose: {},
  };

  return {
    parts,
  };
}
