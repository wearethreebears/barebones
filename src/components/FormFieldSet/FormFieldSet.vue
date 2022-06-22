<template>
  <fieldset :data-component="$options.name" :class="part['component']">
    <legend :class="part['legend']">{{ props.label }}</legend>
    <div :class="part['fields']">
      <slot />
    </div>
  </fieldset>
</template>

<script lang="ts">
export default { name: "BonesFormFieldSet" };
</script>

<script setup lang="ts">
import type { PropType } from "vue";
import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/FormFieldSet/FormFieldSet.props";
import FormFieldSetLocal from "@barebones-local/FormFieldSet/FormFieldSet.parts";

const { parts } = FormFieldSetLocal();

const props = defineProps({
  ...classProps,
  label: {
    required: true,
    type: String as PropType<string>,
  },
});

const { part } = useComponent(parts, props, classProps);
</script>
