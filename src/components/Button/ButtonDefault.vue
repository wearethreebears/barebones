<template>
    <button :type="props.type">
      <slot />
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { BUTTON_TYPES } from '@barebones/constants/button';

const props = defineProps({
    type: {
        type: String as PropType<typeof BUTTON_TYPES[keyof typeof BUTTON_TYPES]>,
        default: BUTTON_TYPES.BUTTON
    }
})

</script>