<template>
  <component :is="tag" :class="part['component']"><slot /></component>
</template>

<script setup lang="ts">
import useComponent from "@barebones/composables/useComponent";

import type { PropType } from "vue";
import type { Text } from '@barebones/types/tag';

import { classProps } from "@barebones-local/Text/Text.classes";
import parts from "@barebones-local/Text/Text";

const props = defineProps({
  ...classProps,
   tag: {
    required: false,
    type: String as PropType<Text>,
    default: 'p'
  },
});

const { part } = useComponent(parts, props, classProps);

</script>
