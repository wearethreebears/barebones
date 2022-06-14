import type { Parts } from "@barebones/types/component";
import type { Tabs } from "@barebones/types/components/Tabs";

// Base Classes

export default function TabsLocal(): Tabs {
  const parts: Parts = {
    component: {},
    navigation: {},
    navigationList: {},
    navigationListItem: {},
    navigationButton: {},
    navigationButtonActive: {},
    contentItems: {},
    contentItem: {},
  };

  return {
    parts,
  };
}
