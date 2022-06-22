export type FormInputType =
  | "text"
  | "number"
  | "date"
  | "email"
  | "password"
  | "search"
  | "url"
  | "file"
  | "textarea"
  | "checkbox"
  | "tel"
  | "range"
  | "radio";

export interface InputConfig {
  tag: "textarea" | "input";
  type: FormInputType | undefined;
  checked: boolean | undefined;
  isMultipleFileUpload: boolean | undefined;
  min: number | undefined;
  max: number | undefined;
  step: number | undefined;
}

export interface SelectOption {
  label: string;
  value: string;
}
