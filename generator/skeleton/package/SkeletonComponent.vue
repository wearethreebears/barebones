<template>
  <div :data-component="$options.name" :class="part['component']"></div>
</template>

<script lang="ts">
export default { name: 'SkeletonComponent' }
</script>

<script setup lang="ts">
import useComponent from "@jumpstart/composables/useComponent";

import { classProps } from "@jumpstart-local/SkeletonComponent/SkeletonComponent.classes";
import parts from "@jumpstart-local/SkeletonComponent/SkeletonComponent";

const props = defineProps({
  ...classProps,
});

const { part } = useComponent(parts, props, classProps);
</script>