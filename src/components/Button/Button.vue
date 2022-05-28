<template>
  <component
    :data-component="$options.name"
    :is="component"
    :to="props.to"
    :class="part.component"
  >
    <template v-if="state === BUTTON_STATES.PROCESSING">
      <slot :name="BUTTON_STATES.PROCESSING" />
    </template>
    <template v-else-if="state === BUTTON_STATES.LOADING">
      <slot :name="BUTTON_STATES.LOADING" />
    </template>
    <template v-else-if="state === BUTTON_STATES.COMPLETE">
      <slot :name="BUTTON_STATES.COMPLETE" />
    </template>
    <template v-else>
      <slot />
    </template>
  </component>
</template>

<script lang="ts">
export default { name: 'Button' }
</script>

<script setup lang="ts">
import { computed } from "vue";
import type { ComputedRef, PropType } from "vue";

import useComponent from "@barebones/composables/useComponent";

import ButtonDefault from './ButtonDefault.vue';
import ButtonLink from './ButtonLink.vue';

import { BUTTON_STATES } from '@barebones/constants/button';

import classProps from "@barebones-local/Button/Button.classes";
import parts from "@barebones-local/Button/Button";

const props = defineProps({
  ...classProps,
  to: {
    required: false,
    type: String as PropType<string>
  },
  state: {
    required: false,
    type: String as PropType<typeof BUTTON_STATES[keyof typeof BUTTON_STATES]>,
    default: BUTTON_STATES.DEFAULT
  }
});

const { part } = useComponent(parts, props, classProps);

const component: ComputedRef<any> = computed((): any => {
  return props.to !== undefined ? ButtonLink : ButtonDefault;
});

</script>
