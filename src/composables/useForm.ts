import { getCurrentInstance } from "vue";
import type { FormInputType } from "@barebones/types/form";

interface Form {
  updateValue: (event: Event, type: FormInputType | "select") => void;
}

export default function useForm(): Form {
  const { emit } = getCurrentInstance() as any;
  const updateValue: (
    event: Event,
    inputType: FormInputType | "select"
  ) => void = (event: Event, inputType: FormInputType | "select") => {
    emit("reset:errors");
    if (inputType === "checkbox") {
      emit("update:value", (event.target as HTMLInputElement).checked);
      return;
    }
    if (inputType === "file") {
      emit("update:value", (event.target as HTMLInputElement).files);
      return;
    }
    emit("update:value", (event.target as HTMLInputElement).value);
    return;
  };

  return {
    updateValue,
  };
}
