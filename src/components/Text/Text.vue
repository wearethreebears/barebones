<template>
  <component :is="tag" :class="part['component']" data-part="component"
    ><slot
  /></component>
</template>

<script lang="ts">
export default { name: "BonesText" };
</script>

<script setup lang="ts">
import useComponent from "@barebones/composables/useComponent";

import type { PropType } from "vue";
import type { Text } from "@barebones/types/tag";

import { classProps } from "@barebones-local/Text/Text.props";
import TextLocal from "@barebones-local/Text/Text.parts";

const { parts } = TextLocal();

const props = defineProps({
  ...classProps,
  tag: {
    required: false,
    type: String as PropType<Text>,
    default: "p",
  },
});

const { part } = useComponent(parts, props, classProps);
</script>
