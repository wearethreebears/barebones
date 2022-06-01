<template>
  <button ref="button" :type="props.type">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref, PropType } from "vue";
import { BUTTON_TYPES } from "@barebones/constants/button";

const props = defineProps({
  type: {
    type: String as PropType<typeof BUTTON_TYPES[keyof typeof BUTTON_TYPES]>,
    default: BUTTON_TYPES.BUTTON,
  },
});

const button: Ref<HTMLElement> = ref(null as unknown as HTMLElement);

const focusOnButton = (): void => {
  button.value.focus();
};

defineExpose({ focusOnButton });
</script>
