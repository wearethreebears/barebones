<template>
  <div :data-component="$options.name" :class="part['component']">
    <div :class="part['componentInner']">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'Overlay' }
</script>

<script setup lang="ts">
import { watch, toRefs } from 'vue';
import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Overlay/Overlay.classes";
import parts from "@barebones-local/Overlay/Overlay";

const props = defineProps({
  ...classProps,
});

const emit = defineEmits(['visibility:change']);

const { part } = useComponent(parts, props, classProps);

const { state } = toRefs(props)

watch(state, async (newState: string): Promise<void> => {
    // nextTick doesn't wait for visibility transition
    await setTimeout(() => {
      emit('visibility:change', newState)
    }, 100);
})
</script>