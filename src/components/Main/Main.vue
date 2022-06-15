<template>
  <main
    :data-component="$options.name"
    :class="part['component']"
    data-part="component"
  >
    <slot />
  </main>
</template>

<script lang="ts">
export default { name: "BonesMain" };
</script>

<script setup lang="ts">
import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Main/Main.props";
import MainLocal from "@barebones-local/Main/Main.parts";

const { parts } = MainLocal();

const props = defineProps({
  ...classProps,
});

const { part } = useComponent(parts, props, classProps);
</script>
