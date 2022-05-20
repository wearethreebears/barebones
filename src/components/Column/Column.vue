<template>
  <div :data-component="$options.name" :class="part['component']"><slot /></div>
</template>

<script lang="ts">
export default { name: 'Column' }
</script>

<script setup lang="ts">
import useComponent from "@jumpstart/composables/useComponent";

import { classProps } from "@jumpstart-local/Column/Column.classes";
import parts from "@jumpstart-local/Column/Column";

const props = defineProps({
  ...classProps,
});

const { part } = useComponent(parts, props, classProps);
</script>