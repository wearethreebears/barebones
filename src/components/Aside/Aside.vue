<template>
  <aside
    :data-component="$options.name"
    data-part="component"
    :class="part['component']"
  >
    <slot />
  </aside>
</template>

<script lang="ts">
export default { name: "BonesAside" };
</script>

<script setup lang="ts">
import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Aside/Aside.props";
import AsideLocal from "@barebones-local/Aside/Aside.parts";

const { parts } = AsideLocal();

const props = defineProps({
  ...classProps,
});

const { part } = useComponent(parts, props, classProps);
</script>
