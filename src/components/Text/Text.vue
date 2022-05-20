<template>
  <component :is="tag" :class="part['component']"><slot /></component>
</template>

<script setup lang="ts">
import useComponent from "@jumpstart/composables/useComponent";

import type { PropType } from "vue";
import type { Text } from '@jumpstart/types/tag';

import { classProps } from "@jumpstart-local/Text/Text.classes";
import parts from "@jumpstart-local/Text/Text";

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
