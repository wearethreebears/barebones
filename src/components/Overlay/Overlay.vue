<template>
  <div
    :data-component="$options.name"
    :class="part['component']"
    data-part="component"
  >
    <div
      data-overlay-inner
      :class="part['overlayInner']"
      data-part="overlayInner"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default { name: "BonesOverlay" };
</script>

<script setup lang="ts">
import { watch, toRefs } from "vue";
import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Overlay/Overlay.props";
import OverlayLocal from "@barebones-local/Overlay/Overlay.parts";

const { parts } = OverlayLocal();

const props = defineProps({
  ...classProps,
});

const emit = defineEmits(["visibility:change"]);

const { part } = useComponent(parts, props, classProps);

const { state } = toRefs(props);

watch(state, async (newState: string): Promise<void> => {
  // nextTick doesn't wait for visibility transition
  await setTimeout(() => {
    emit("visibility:change", newState);
  }, 100);
});
</script>
