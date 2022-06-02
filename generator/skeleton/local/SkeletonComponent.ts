import type { Parts } from "@barebones/types/component";
import type { SkeletonComponent } from "@barebones/types/components/SkeletonComponent";

export default function SkeletonComponentLocal(): SkeletonComponent {
  const parts: Parts = {
    component: {},
  };

  return {
    parts,
  };
}
