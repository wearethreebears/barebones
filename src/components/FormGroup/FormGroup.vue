<template>
  <div
    :data-component="$options.name"
    data-part="component"
    :class="part['component']"
    :for="props.name"
  >
    <label :class="part['labelWrapper']" data-part="labelWrapper">
      <div :class="part['label']" data-part="label">
        {{ props.label }}
      </div>
      <div :class="part['inputWrapper']" data-part="inputWrapper">
        <slot :class="part['input']" data-part="input" />
      </div>
      <div
        v-if="slots.customInput"
        :class="part['customInput']"
        data-part="customInput"
      >
        <slot name="customInput" />
      </div>
    </label>
    <div v-if="error" :class="part['errorWrapper']" data-part="errorWrapper">
      <BonesFormError :name="props.name" v-bind="props.formErrorProps">{{
        props.error
      }}</BonesFormError>
    </div>
    <div v-if="slots.icon" :class="part['iconWrapper']" data-part="iconWrapper">
      <slot name="icon" />
    </div>
  </div>
</template>

<script lang="ts">
export default { name: "BonesFormGroup" };
</script>

<script setup lang="ts">
import { useSlots } from "vue";
import BonesFormError from "@barebones/components/FormError/FormError.vue";
import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/FormGroup/FormGroup.props";
import FormGroupLocal from "@barebones-local/FormGroup/FormGroup.parts";

import {
  label,
  name,
  error,
  formErrorProps,
  groupType,
} from "@barebones/components/__shared__/props/form";

const { parts } = FormGroupLocal();

const props = defineProps({
  ...classProps,
  label,
  name,
  error,
  formErrorProps,
  groupType,
});

const slots = useSlots();
const dynamicParts = parts[props.groupType]
  ? parts[props.groupType]
  : parts.default;
const { part } = useComponent(dynamicParts, props, classProps);
</script>
