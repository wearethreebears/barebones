<template>
  <component
    :is="tag"
    :data-component="$options.name"
    data-part="component"
    :class="part['component']"
    ><slot
  /></component>
</template>

<script lang="ts">
export default { name: "BonesGrid" };
</script>

<script setup lang="ts">
import type { PropType } from "vue";
import type { Layout } from "@barebones/types/tag";

import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Grid/Grid.props";
import GridLocal from "@barebones-local/Grid/Grid.parts";

const { parts } = GridLocal();

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
