import type { Parts } from "@barebones/types/component";
import type { Modal } from "@barebones/types/components/Modal";

// Base Classes
const ComponentDefault =
  "w-11/12 max-w-4xl rounded drop-shadow-md p-4 my-20 relative";
const modalCloseDefault = "absolute top-4 right-4";
const overlayCloseDefault = "absolute top-4 right-4";

export default function ModalLocal(): Modal {
  const parts: Parts = {
    component: {
      color: {
        default: [ComponentDefault, "bg-white"],
      },
    },
    modalClose: {
      color: {
        default: [modalCloseDefault],
      },
    },
    overlayClose: {
      color: {
        default: [overlayCloseDefault],
      },
    },
  };

  return {
    parts,
  };
}
