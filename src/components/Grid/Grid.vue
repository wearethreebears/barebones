<template>
  <component
    :is="tag"
    :data-component="$options.name"
    :class="part['component']"
    ><slot
  /></component>
</template>

<script lang="ts">
export default { name: "Grid" };
</script>

<script setup lang="ts">
import type { PropType } from "vue";
import type { Layout } from "@barebones/types/tag";

import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Grid/Grid.classes";
import parts from "@barebones-local/Grid/Grid";

const props = defineProps({
  ...classProps,
  tag: {
    required: false,
    type: String as PropType<Layout>,
    default: "div",
  },
});

const { part } = useComponent(parts, props, classProps);
</script>
