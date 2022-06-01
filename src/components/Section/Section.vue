<template>
  <div :data-component="$options.name" :class="part['component']"></div>
</template>

<script lang="ts">
export default { name: "BonesSection" };
</script>

<script setup lang="ts">
import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Section/Section.classes";
import parts from "@barebones-local/Section/Section";

const props = defineProps({
  ...classProps,
});

const { part } = useComponent(parts, props, classProps);
</script>
