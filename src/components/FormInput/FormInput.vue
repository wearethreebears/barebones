<template>
  <BonesFormGroup
    :label="props.label"
    :name="props.name"
    :group-type="props.type"
    v-bind="props.formGroupProps"
  >
    <component
      :is="inputConfig.tag"
      :data-component="$options.name"
      data-part="component"
      :class="part['component']"
      :type="inputConfig.type"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :aria-disabled="props.disabled"
      :aria-invalid="hasError(error)"
      :aria-errormessage="errorMessageId(error)"
      :checked="inputConfig.checked"
      :value="props.value"
      :id="id"
      :name="props.name"
      :multiple="inputConfig.isMultipleFileUpload"
      :min="inputConfig.min"
      :max="inputConfig.max"
      :step="inputConfig.step"
      @input="updateValue($event, props.type)"
    />
    <div data-part="customInput" :class="part['customInput']" />
    <slot v-if="slots.icon" name="icon" />
  </BonesFormGroup>
</template>

<script lang="ts">
export default { name: "BonesFormInput" };
</script>

<script setup lang="ts">
import { computed, useSlots } from "vue";
import type { ComputedRef, PropType } from "vue";

import BonesFormGroup from "@barebones/components/FormGroup/FormGroup.vue";

import type { InputConfig } from "@barebones/types/form";

import useComponent from "@barebones/composables/useComponent";
import useForm from "@barebones/composables/useForm";
import useError from "@barebones/composables/useError";

import { classProps } from "@barebones-local/FormInput/FormInput.props";
import FormInputLocal from "@barebones-local/FormInput/FormInput.parts";

import {
  label,
  name,
  error,
  value,
  placeholder,
  disabled,
  formGroupProps,
  type,
} from "@barebones/components/__shared__/props/form";

const { parts } = FormInputLocal();

const props = defineProps({
  ...classProps,
  error,
  name,
  value,
  label,
  placeholder,
  disabled,
  formGroupProps,
  type,
  multipleFiles: {
    required: false,
    type: Boolean as PropType<boolean>,
    default: false,
  },
  min: {
    required: false,
    type: Number as PropType<number>,
    default: 0,
  },
  max: {
    required: false,
    type: Number as PropType<number>,
    default: 100,
  },
  step: {
    required: false,
    type: Number as PropType<number>,
    default: 1,
  },
  checkedOnMount: {
    required: false,
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const dynamicParts = parts[props.type] ? parts[props.type] : parts.default;
const { part } = useComponent(dynamicParts, props, classProps);
const { updateValue } = useForm();
const { hasError, errorMessageId } = useError(props.name);
const slots = useSlots();

const id: string =
  props.type === "radio" ? `${props.name}-${props.value}` : props.name;

const inputConfig: ComputedRef<InputConfig> = computed(() => ({
  tag: props.type === "textarea" ? "textarea" : "input",
  type: props.type,
  checked:
    (props.type === "checkbox" || props.type === "radio") &&
    props.checkedOnMount
      ? true
      : false,
  min: props.type === "range" ? props.min : undefined,
  max: props.type === "range" ? props.max : undefined,
  step: props.type === "range" ? props.step : undefined,
  isMultipleFileUpload:
    props.multipleFiles && props.type === "file" ? true : undefined,
}));
</script>
