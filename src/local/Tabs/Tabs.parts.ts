import type { Parts } from "@barebones/types/component";
import type { Tabs } from "@barebones/types/components/Tabs";

// Base Classes

export default function TabsLocal(): Tabs {
  const parts: Parts = {
    component: {
      theme: {
        default: ["border-x border-b border-gray-200 rounded-b"],
      },
    },
    navigation: {
      theme: {
        default: ["bg-gray-200 rounded-t overflow-hidden"],
      },
    },
    navigationList: {
      theme: {
        default: ["flex"],
      },
    },
    navigationListItem: {},
    navigationButton: {
      theme: {
        default: ["p-4 text-white bg-grey-300 text-sky-900"],
      },
    },
    navigationButtonActive: {
      theme: {
        default: ["p-4 text-white bg-sky-600 text-white"],
      },
    },
    contentItems: {},
    contentItem: {
      theme: {
        default: ["p-4"],
      },
    },
  };

  return {
    parts,
  };
}
