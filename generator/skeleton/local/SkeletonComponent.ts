import type { Parts } from "@barebones/types/component";
import type { SkeletonComponent } from "@barebones/types/components/SkeletonComponent";

export default function ComponentSkeletonComponent(): SkeletonComponent {
  const parts: Parts = {
    component: {},
  };

  return {
    parts,
  };
}
