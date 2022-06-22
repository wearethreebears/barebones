<template>
  <span
    v-if="props.error"
    :data-component="$options.name"
    :id="errorId"
    :class="part['component']"
    data-part="component"
    >{{ props.error }}</span
  >
</template>

<script lang="ts">
export default { name: "BonesFormError" };
</script>

<script setup lang="ts">
import useComponent from "@barebones/composables/useComponent";
import useError from "@barebones/composables/useError";
import { name, error } from "@barebones/components/__shared__/props/form";

import { classProps } from "@barebones-local/FormError/FormError.props";
import FormErrorLocal from "@barebones-local/FormError/FormError.parts";

const { parts } = FormErrorLocal();

const props = defineProps({
  ...classProps,
  name,
  error,
});

const { part } = useComponent(parts, props, classProps);
const { errorId } = useError(props.name);
</script>
