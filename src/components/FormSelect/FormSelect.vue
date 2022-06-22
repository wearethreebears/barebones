<template>
  <BonesFormGroup
    :label="props.label"
    :name="props.name"
    group-type="select"
    v-bind="props.formGroupProps"
  >
    <select
      :data-component="$options.name"
      data-part="component"
      :class="part['component']"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :aria-disabled="props.disabled"
      :aria-invalid="hasError(error)"
      :aria-errormessage="errorMessageId(error)"
      :value="props.value"
      :id="props.name"
      :name="props.name"
      @change="updateValue($event, 'select')"
    >
      <BonesFormSelectOption
        v-for="option in options"
        :value="option.value"
        :key="option.value"
        :selected="props.value === option.value"
        :label="option.label"
      />
    </select>
  </BonesFormGroup>
</template>

<script lang="ts">
export default { name: "BonesFormSelect" };
</script>

<script setup lang="ts">
import BonesFormGroup from "@barebones/components/FormGroup/FormGroup.vue";
import BonesFormSelectOption from "@barebones/components/FormSelectOption/FormSelectOption.vue";

import type { SelectOption } from "@barebones/types/form";

import useComponent from "@barebones/composables/useComponent";
import useForm from "@barebones/composables/useForm";
import useError from "@barebones/composables/useError";

import { classProps } from "@barebones-local/FormSelect/FormSelect.props";
import FormSelectLocal from "@barebones-local/FormSelect/FormSelect.parts";

import {
  label,
  name,
  error,
  value,
  placeholder,
  disabled,
  formGroupProps,
} from "@barebones/components/__shared__/props/form";
import type { PropType } from "vue";

const { parts } = FormSelectLocal();

const props = defineProps({
  ...classProps,
  label,
  name,
  error,
  value,
  placeholder,
  disabled,
  formGroupProps,
  options: {
    required: true,
    type: Array as PropType<SelectOption[]>,
    default: [],
  },
});

const { updateValue } = useForm();
const { hasError, errorMessageId } = useError(props.name);
const { part } = useComponent(parts, props, classProps);
</script>
