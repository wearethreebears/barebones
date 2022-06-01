import { computed } from "vue";
import type { ComputedRef } from "vue";

import type { Parts } from "@barebones/types/component";

import type { ClassProps, Props } from "@barebones/types/prop";

export default function (
  parts: Parts,
  props: Props,
  classProps: ClassProps = {}
) {
  const part: ComputedRef<Record<string, string[]>> = computed(() => {
    const warnings: Array<string> = [];
    const successes: Array<string> = [];

    const part: Record<string, string[]> = {};
    Object.keys(parts).forEach((componentPart) => {
      Object.keys(classProps).forEach((classProp) => {
        const propArray =
          typeof props[classProp] === "string"
            ? [props[classProp]]
            : props[classProp];
        propArray.forEach((prop: string) => {
          const propStyle = parts[componentPart]?.[classProp]?.[prop];
          if (!propStyle) {
            warnings.push(`${prop}-${classProp}`);
            return;
          }
          successes.push(`${prop}-${classProp}`);
          const classes = part[componentPart]
            ? [...part[componentPart], ...propStyle]
            : propStyle;
          part[componentPart] = classes;
        });
      });
    });
    warnings.forEach((warning: string) => {
      if (!successes.includes(warning)) {
        const [propClass, prop] = warning.split("-");
        console.warn(
          `BAREBONES WARNING: ${propClass} does not exist on ${prop}`
        );
      }
    });

    return part;
  });

  return {
    part,
  };
}
