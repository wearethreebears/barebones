<template>
  <div
    :data-component="$options.name"
    :class="part['component']"
    :style="wrapperPadding"
  >
    <picture>
      <img
        :class="part['image']"
        :src="props.image.url"
        :alt="props.image.alt"
        :height="props.image.height"
        :width="props.image.width"
        ref="componentImage"
        loading="lazy"
      />
    </picture>
  </div>
</template>

<script lang="ts">
export default { name: "Image" };
</script>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref, PropType } from "vue";

import type { Image } from "@barebones/types/image";

import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Image/Image.classes";
import parts from "@barebones-local/Image/Image";

const props = defineProps({
  ...classProps,
  image: {
    required: true,
    type: Object as PropType<Image>,
  },
});

const { part } = useComponent(parts, props, classProps);

const componentImage: Ref<HTMLElement | undefined> = ref(undefined);
const wrapperPadding: Ref<string> = ref("");

const getGCD = (width: number, height: number): number => {
  return width % height ? getGCD(height, width % height) : height;
};
const ratio = (width: number, height: number): string => {
  const gcd: number = getGCD(width, height);
  return `${width / gcd}/${height / gcd}`;
};

const setWrapperPadding = (): void => {
  const width: number = props.image.width;
  const height: number = props.image.height;

  const padding: string = CSS?.supports("aspect-ratio: 1/1")
    ? `aspect-ratio: ${ratio(width, height)}`
    : `padding-top: ${(height / width) * 100}%`;

  wrapperPadding.value = padding;
};

const loadImage: () => void = (): void => {
  (componentImage.value as unknown as HTMLElement).addEventListener(
    "load",
    () => {
      (componentImage.value as unknown as HTMLElement).setAttribute(
        "loaded",
        "true"
      );
    }
  );
};

onMounted((): void => {
  loadImage();
  setWrapperPadding();
});
</script>
