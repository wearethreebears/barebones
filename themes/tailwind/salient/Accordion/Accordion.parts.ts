import type { Parts } from "@barebones/types/component";
import type { Accordion } from "@barebones/types/components/Accordion";

export default function AccordionLocal(): Accordion {
  const parts: Parts = {
    component: {
      animation: {
        default: ["group"],
      },
    },
    title: {
      animation: {},
      design: {
        default: ["box-border p-4 w-full text-white bg-sky-600"],
      },
    },
    contentWrapper: {
      design: {
        default: [
          "border-b border-l border-r border-solid border-gray-200 rounded-b",
        ],
      },
      animation: {
        default: [
          "overflow-hidden transition transition-all duration-300 group-data-[state=OPEN]:max-h-[var(--accordion-height)] group-data-[state=OPEN]:visible group-data-[state=CLOSED]:max-h-0 group-data-[state=CLOSED]:invisible",
        ],
      },
    },
    content: {
      design: {
        default: ["box-border p-4"],
      },
    },
  };

  return {
    parts,
  };
}
