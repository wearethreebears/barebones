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
    <div
      :data-component="$options.name"
      data-part="component"
      :class="part['component']"
      ref="modal"
    >
      <div id="modal-description" class="sr-only">
        <slot name="SRDescription">This is an open modal window</slot>
      </div>
      <div :class="part['titleWrapper']" data-part="titleWrapper">
        <h2 id="modal-title" ref="modalTitle" tabindex="0">
          <slot name="title" />
        </h2>
      </div>
      <slot />
      <button
        :class="part['modalClose']"
        data-part="modalClose"
        @click="toggleModal('default')"
        v-if="
          props.showCloseButton === CLOSE_BUTTON_DISPLAYS.BOTH ||
          props.showCloseButton === CLOSE_BUTTON_DISPLAYS.MODAL
        "
        aria-label="Close modal"
      >
        <slot name="modalClose">Close</slot>
      </button>
    </div>
    <button
      :class="part['overlayClose']"
      data-part="overlayClose"
      @click="toggleModal('default')"
      v-if="
        props.showCloseButton === CLOSE_BUTTON_DISPLAYS.BOTH ||
        props.showCloseButton === CLOSE_BUTTON_DISPLAYS.OVERLAY
      "
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

import { CLOSE_BUTTON_DISPLAYS } from "@barebones/constants/modal";

import useComponent from "@barebones/composables/useComponent";
import useFocusTrap from "@barebones/composables/useFocusTrap";

import { classProps } from "@barebones-local/Modal/Modal.props";
import ModalLocal from "@barebones-local/Modal/Modal.parts";

const { parts } = ModalLocal();

const props = defineProps({
  ...classProps,
  showCloseButton: {
    type: String as PropType<
      typeof CLOSE_BUTTON_DISPLAYS[keyof typeof CLOSE_BUTTON_DISPLAYS]
    >,
    default: CLOSE_BUTTON_DISPLAYS.MODAL,
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
