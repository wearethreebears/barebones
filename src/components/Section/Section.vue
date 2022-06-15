<template>
  <section
    :data-component="$options.name"
    :class="part['component']"
    data-part="component"
  >
    <slot />
  </section>
</template>

<script lang="ts">
export default { name: "BonesSection" };
</script>

<script setup lang="ts">
import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Section/Section.props";
import SectionLocal from "@barebones-local/Section/Section.parts";

const { parts } = SectionLocal();

const props = defineProps({
  ...classProps,
});

const { part } = useComponent(parts, props, classProps);
</script>
