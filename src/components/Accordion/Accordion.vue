<template>
  <div
    :data-component="$options.name"
    data-part="component"
    :class="part['component']"
    :data-state="state"
  >
    <button
      :id="headerId"
      data-part="title"
      :class="part['title']"
      :aria-controls="contentId"
      :aria-expanded="isOpen"
      :disabled="props.disableToggle"
      @click="updateAccordionState()"
    >
      <slot name="title" />
    </button>
    <div
      :id="contentId"
      data-part="contentWrapper"
      ref="accordionContentWrapper"
      :class="part['contentWrapper']"
      :style="`--accordion-height: ${accordionMaxHeight}`"
      :aria-labelledby="headerId"
      :aria-hidden="!isOpen"
    >
      <div data-part="content" :class="part['content']" ref="accordionContent">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: "BonesAccordion" };
</script>

<script setup lang="ts">
import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Accordion/Accordion.props";
import AccordionLocal from "@barebones-local/Accordion/Accordion.parts";
import {
  onBeforeUnmount,
  onMounted,
  ref,
  computed,
  type ComputedRef,
  type PropType,
  type Ref,
} from "vue";
import type { State } from "@barebones/types/accordion";

const { parts } = AccordionLocal();

const props = defineProps({
  ...classProps,
  name: {
    required: true,
    type: String as PropType<string>,
    validator: (name: string) => {
      if (!/^[a-zA-Z0-9-_]+$/.test(name)) {
        console.error(
          `[Barebones warn]: Invalid prop error: custom validator check failed for prop "name": "${name}".\n`,
          `>> Suggestion: "name" should contain alpha-numeric, dashes and underscores only, please ensure your prop has no spaces or other disallowed characters.`
        );
        return false;
      }
      return true;
    },
  },
  initialState: {
    required: false,
    type: String as PropType<State>,
    default: "CLOSED",
  },
  disableToggle: {
    required: false,
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const stateToIsOpen = (state: State): boolean =>
  state === "OPEN" ? true : false;

const { part } = useComponent(parts, props, classProps);
const accordionContentWrapper: Ref<HTMLElement> = ref({} as HTMLElement);
const accordionContent: Ref<HTMLElement> = ref({} as HTMLElement);
const accordionMaxHeight: Ref<string> = ref("");
const headerId = `${props.name}-header-id`;
const contentId = `${props.name}-content-id`;
const state: Ref<State> = ref(props.initialState);

const isOpen: ComputedRef<boolean> = computed(() => stateToIsOpen(state.value));

const updateAccordionState = () =>
  (state.value = state.value === "OPEN" ? "CLOSED" : "OPEN");
const updateAccordionHeight = (): void => {
  accordionMaxHeight.value = `${accordionContent.value.offsetHeight}px`;
};

// @ts-ignore
const observer: MutationObserver | null = import.meta.browser
  ? new MutationObserver(updateAccordionHeight)
  : null;

onMounted(() => {
  updateAccordionHeight();
  if (observer) {
    observer.observe(accordionContent.value, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
  }
});
onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
