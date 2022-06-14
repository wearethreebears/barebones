<template>
  <component
    ref="button"
    :data-component="$options.name"
    data-part="component"
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
export default { name: "BonesButton" };
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { ComputedRef, Ref, PropType } from "vue";

import useComponent from "@barebones/composables/useComponent";

import ButtonDefault from "./ButtonDefault.vue";
import ButtonLink from "./ButtonLink.vue";

import { BUTTON_STATES } from "@barebones/constants/button";

import classProps from "@barebones-local/Button/Button.props";
import ButtonLocal from "@barebones-local/Button/Button.parts";

const { parts } = ButtonLocal();

const props = defineProps({
  ...classProps,
  to: {
    required: false,
    type: String as PropType<string>,
  },
  state: {
    required: false,
    type: String as PropType<typeof BUTTON_STATES[keyof typeof BUTTON_STATES]>,
    default: BUTTON_STATES.DEFAULT,
  },
});

const { part } = useComponent(parts, props, classProps);

const button: Ref<typeof ButtonDefault | typeof ButtonLink> = ref(
  null as unknown as typeof ButtonDefault
);

const component: ComputedRef<any> = computed((): any => {
  return props.to !== undefined ? ButtonLink : ButtonDefault;
});

const focusOnButton = (): void => button.value.focusOnButton();

defineExpose({ focusOnButton });
</script>
