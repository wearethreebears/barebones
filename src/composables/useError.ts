import { ref } from "vue";
import type { Ref } from "vue";

interface Error {
  errorId: Ref<string>;
  hasError: (error: string | undefined) => boolean;
  errorMessageId: (error: string | undefined) => string | undefined;
}

export default function useError(name: string): Error {
  const errorId: Ref<string> = ref(`error-${name}`);

  const hasError = (error: string | undefined) => !!error?.length;

  const errorMessageId = (error: string | undefined) => {
    return hasError(error) ? errorId.value : undefined;
  };
  return {
    errorId,
    hasError,
    errorMessageId,
  };
}
