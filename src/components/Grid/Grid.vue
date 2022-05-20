<template>
  <div :data-component="$options.name" :class="part['component']"><slot /></div>
</template>

<script lang="ts">
export default { name: 'Grid' }
</script>

<script setup lang="ts">
import useComponent from "@jumpstart/composables/useComponent";

import { classProps } from "@jumpstart-local/Grid/Grid.classes";
import parts from "@jumpstart-local/Grid/Grid";

const props = defineProps({
  ...classProps,
});

const { part } = useComponent(parts, props, classProps);
</script>