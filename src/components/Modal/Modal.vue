<template>
  <BonesButton
    ref="modalOpenButton"
    @click="toggleModal('open')"
    v-bind="modalOpenProps"
    ><slot name="modalOpenButtonText">Open modal</slot></BonesButton
  >
  <BonesOverlay
    :aria-hidden="!isVisable"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    role="dialog"
    :state="state"
    @visibility:change="setFocus($event)"
  >
    <div :data-component="$options.name" :class="part['component']" ref="modal">
      <div id="modal-description" class="sr-only">
        <slot name="SRDescription">This is an open modal window</slot>
      </div>
      <div :class="part['titleWrapper']">
        <h2 id="modal-title" ref="modalTitle" tabindex="0">
          <slot name="title" />
        </h2>
      </div>
      <slot />
      <button
        :class="part['modalClose']"
        @click="toggleModal('default')"
        v-if="['both', 'default'].includes(props.showCloseButton)"
        aria-label="Close modal"
      >
        <slot name="modalClose">Close</slot>
      </button>
    </div>
    <button
      :class="part['overlayClose']"
      @click="toggleModal('default')"
      v-if="['both', 'overlay'].includes(props.showCloseButton)"
      aria-label="Close modal"
    >
      <slot name="overlayClose">Close</slot>
    </button>
  </BonesOverlay>
</template>

<script lang="ts">
export default { name: "BonesModal" };
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { ComputedRef, Ref, PropType } from "vue";

import BonesOverlay from "@barebones/components/Overlay/Overlay.vue";
import BonesButton from "@barebones/components/Button/Button.vue";

import useComponent from "@barebones/composables/useComponent";
import useFocusTrap from "@barebones/composables/useFocusTrap";

import { classProps } from "@barebones-local/Modal/Modal.classes";
import parts from "@barebones-local/Modal/Modal";

const props = defineProps({
  ...classProps,
  showCloseButton: {
    type: String as PropType<"both" | "none" | "modal" | "overlay">,
    default: "default",
  },
  modalOpenProps: {
    type: Object as PropType<Record<string, string>>,
    default: {},
  },
});

const state: Ref<string> = ref("default");
const modalOpenButton: Ref<typeof BonesButton> = ref(
  null as unknown as typeof BonesButton
);
const modal: Ref<HTMLElement> = ref(null as unknown as HTMLElement);
const modalTitle: Ref<HTMLElement> = ref(null as unknown as HTMLElement);

const { part } = useComponent(parts, props, classProps);
const { initFocusTrap, destroyFocusTrap } = useFocusTrap();

const isVisable: ComputedRef<boolean> = computed(
  () => state.value !== "default"
);

const toggleModal = (newState: string): void => {
  state.value = newState;
};

const setFocus = (newState: String): void => {
  if (newState === "default") {
    modalOpenButton.value.focusOnButton();
    destroyFocusTrap(modal.value);
    return;
  }
  modalTitle.value.focus();
  initFocusTrap(modal.value);
};
</script>
