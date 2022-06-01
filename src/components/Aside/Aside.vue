<template>
  <div :data-component="$options.name" :class="part['component']"></div>
</template>

<script lang="ts">
export default { name: "BonesAside" };
</script>

<script setup lang="ts">
import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Aside/Aside.classes";
import parts from "@barebones-local/Aside/Aside";

const props = defineProps({
  ...classProps,
});

const { part } = useComponent(parts, props, classProps);
</script>
