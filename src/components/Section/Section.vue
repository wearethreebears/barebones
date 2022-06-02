<template>
  <div :data-component="$options.name" :class="part['component']"></div>
</template>

<script lang="ts">
export default { name: "BonesSection" };
</script>

<script setup lang="ts">
import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Section/Section.classes";
import SectionLocal from "@barebones-local/Section/Section";

const { parts } = SectionLocal();

const props = defineProps({
  ...classProps,
});

const { part } = useComponent(parts, props, classProps);
</script>
