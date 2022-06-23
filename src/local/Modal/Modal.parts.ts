import type { Parts } from "@barebones/types/component";
import type { Modal } from "@barebones/types/components/Modal";

// Base Classes

export default function ModalLocal(): Modal {
  const parts: Parts = {
    component: {
      color: {
        default: [
          "w-11/12 max-w-4xl rounded drop-shadow-md p-4 my-20 relative bg-white",
        ],
      },
    },
    modalClose: {
      color: {
        default: ["absolute top-4 right-4"],
      },
    },
    overlayClose: {
      color: {
        default: ["absolute top-4 right-4"],
      },
    },
  };

  return {
    parts,
  };
}
