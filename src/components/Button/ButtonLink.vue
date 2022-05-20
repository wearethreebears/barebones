<template>
    <NuxtLink v-if="isInternal && isNuxt" :to="props.to"><slot /></NuxtLink>
    <RouterLink v-else-if="isInternal && !isNuxt" :to="props.to"><slot /></RouterLink>
    <a v-else :href="props.to" target="_blank" rel="nofollow noopener"><slot /></a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef, PropType } from 'vue';

const props = defineProps({
    to: {
        required: true,
        type: String as PropType<string>,
    }
})

const isInternal: ComputedRef<boolean> = computed((): boolean => {
  return props.to.startsWith('/');
});

// @ts-ignore: for $nuxt only
const isNuxt = typeof $nuxt !== 'undefined';
</script>