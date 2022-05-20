<template>
  <div :data-component="$options.name" :class="part['component']" :style="wrapperPadding">
    <picture>
      <img
        :class="part['image']"
        :src="props.image.url"
        :alt="props.image.alt"
        :height="props.image.height"
        :width="props.image.width"
        ref="defaultImage"
        loading="lazy"
      />
    </picture>
  </div>
</template>

<script lang="ts">
export default { name: 'Image' }
</script>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import type { ComputedRef, Ref, PropType } from 'vue';

import type { Image } from '@jumpstart/types/image';

import useComponent from "@jumpstart/composables/useComponent";

import { classProps } from "@jumpstart-local/Image/Image.classes";
import parts from "@jumpstart-local/Image/Image";

const props = defineProps({
  ...classProps,
  image: {
    required: true,
    type: Object as PropType<Image>,
  },
});

const { part } = useComponent(parts, props, classProps);

const defaultImage = ref(null) as Ref<HTMLElement | null>;

const getGCD = ( width: number, height: number ): number => {
    return (width % height) ? getGCD(height,width % height) : height;
}
const ratio = ( width: number, height: number ): string => {
    const gcd: number = getGCD(width, height);
    return `${width/gcd}/${height/gcd}`;
}

const wrapperPadding: ComputedRef<string> = computed(() => {
  const width: number = props.image.width;
  const height: number = props.image.height;
  if (CSS?.supports("aspect-ratio: 1/1")) {
    return `aspect-ratio: ${ratio(width, height)}`
  }
  const padding = (height / width) * 100;
  return `padding-top: ${padding}%`;
});

const loadImage: () => void = (): void => {
  (defaultImage.value as unknown as HTMLElement).addEventListener('load', () => {
    (defaultImage.value as unknown as HTMLElement).setAttribute('loaded', 'true');
  });
};

onMounted((): void => {
  loadImage();
});
</script>