import type { PropType } from "vue";
import type { FormInputType } from "@barebones/types/form";

export const error = {
  required: false,
  type: String as PropType<string>,
  default: undefined,
};

export const label = {
  required: true,
  type: String as PropType<string>,
};

export const name = {
  required: true,
  type: String as PropType<any>,
};

export const disabled = {
  required: false,
  type: Boolean as PropType<boolean>,
  default: false,
};

export const placeholder = {
  required: false,
  type: String as PropType<string | undefined>,
  default: undefined,
};

export const value = {
  required: false,
  type: [String, Boolean, Array, Object] as PropType<
    string | boolean | FileList
  >,
  default: "",
};

export const type = {
  required: false,
  type: String as PropType<FormInputType>,
  default: "text",
};

export const groupType = {
  required: false,
  type: String as PropType<FormInputType | "select">,
  default: "text",
};

export const formGroupProps = {
  type: Object as PropType<Record<string, string>>,
  default: {},
};

export const formErrorProps = {
  type: Object as PropType<Record<string, string>>,
  default: {},
};
