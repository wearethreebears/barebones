import type { Parts } from "@barebones/types/component";
import type { Accordion } from "@barebones/types/components/Accordion";

export default function AccordionLocal(): Accordion {
  const parts: Parts = {
    component: {
      animation: {},
    },
    title: {},
    content: {
      // "animation" is not required but suggested
      /*
        It is suggested you add the following css classes properties:
        .<contentClassName> {
          overflow: hidden;
        }
        [data-state="OPEN"] .<contentClassName> {
          visibility: visible;
          max-height: var(accordion-height);
        }
        [data-state="CLOSED"] .<contentClassName> {
          visibility: hidden; // This will ensure accessibility remains intact
          max-height: 0;
        }
      */
      animation: {
        default: [
          "<contentClassName>", // Replace <contentClassName> with your classes
        ],
      },
    },
  };

  return {
    parts,
  };
}
