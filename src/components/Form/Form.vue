<template>
  <form
    :data-component="$options.name"
    data-part="component"
    :class="part['component']"
    :action="props.action"
    :method="props.method"
    :enctype="encode"
  >
    <slot />
  </form>
</template>

<script lang="ts">
export default { name: "BonesForm" };
</script>

<script setup lang="ts">
import type { PropType } from "vue";

import { FORM_ENCODES, FORM_METHODS } from "@barebones/constants/form";

import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Form/Form.props";
import FormLocal from "@barebones-local/Form/Form.parts";

const { parts } = FormLocal();

const props = defineProps({
  ...classProps,
  action: {
    required: false,
    type: String as PropType<string>,
    default: "",
  },
  method: {
    required: false,
    type: String as PropType<typeof FORM_METHODS[keyof typeof FORM_METHODS]>,
    default: FORM_METHODS.POST,
  },
  encode: {
    required: false,
    type: String as PropType<typeof FORM_ENCODES[keyof typeof FORM_ENCODES]>,
    default: FORM_ENCODES.DEFAULT,
  },
});

const { part } = useComponent(parts, props, classProps);
</script>
