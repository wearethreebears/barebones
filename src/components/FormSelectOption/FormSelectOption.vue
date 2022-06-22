<template>
  <option
    :data-component="$options.name"
    :class="part['component']"
    :value="value"
    :selected="selected"
  >
    {{ label }}
  </option>
</template>

<script lang="ts">
export default { name: "BonesFormSelectOption" };
</script>

<script setup lang="ts">
import type { PropType } from "vue";

import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/FormSelectOption/FormSelectOption.props";
import FormSelectOptionLocal from "@barebones-local/FormSelectOption/FormSelectOption.parts";

const { parts } = FormSelectOptionLocal();

const props = defineProps({
  ...classProps,
  label: {
    required: true,
    type: String as PropType<string>,
  },
  value: {
    required: true,
    type: String as PropType<string>,
  },
  selected: {
    required: false,
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
});

const { part } = useComponent(parts, props, classProps);
</script>
