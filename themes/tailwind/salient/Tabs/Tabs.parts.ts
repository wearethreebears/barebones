import type { Parts } from "@barebones/types/component";
import type { Tabs } from "@barebones/types/components/Tabs";

// Base Classes
const NavigationListDefault = "flex";
const NavigationButtonThemeDefault = "p-4 text-white";

export default function TabsLocal(): Tabs {
  const parts: Parts = {
    component: {
      theme: {
        default: ["border-x border-b border-red-500"],
      },
    },
    navigation: {
      theme: {
        default: ["bg-red-500"],
      },
    },
    navigationList: {
      theme: {
        default: [NavigationListDefault],
      },
    },
    navigationListItem: {},
    navigationButton: {
      theme: {
        default: [NavigationButtonThemeDefault],
      },
    },
    navigationButtonActive: {
      theme: {
        default: [NavigationButtonThemeDefault, "bg-red-400"],
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
