<template>
  <main :data-component="$options.name" :class="part['component']"></main>
</template>

<script lang="ts">
export default { name: "Main" };
</script>

<script setup lang="ts">
import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Main/Main.classes";
import parts from "@barebones-local/Main/Main";

const props = defineProps({
  ...classProps,
});

const { part } = useComponent(parts, props, classProps);
</script>
