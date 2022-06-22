<template>
  <div
    :data-component="$options.name"
    :class="part['component']"
    data-part="component"
  >
    <nav
      tabindex="0"
      ref="navigation"
      data-key="tab-navigation"
      :class="part['navigation']"
      data-part="navigation"
    >
      <ul :class="part['navigationList']" data-part="navigationList">
        <li
          v-for="(tab, index) in tabs"
          :key="tab.key"
          :class="part['navigationListItem']"
          data-part="navigationListItem"
        >
          <button
            @click="onButtonClick(tab.key)"
            @keydown.tab.exact.prevent="onButtonTabDown($event)"
            @keydown.left.exact.prevent="onButtonArrowLeftDown($event)"
            @keydown.right.exact.prevent="onButtonArrowRightDown($event)"
            @keydown.shift.tab.exact="onButtonShiftTabDown"
            :data-index="index"
            ref="key"
            role="tab"
            :class="
              activeTab == tab.key
                ? part['navigationButtonActive']
                : part['navigationButton']
            "
            data-part="navigationButton"
          >
            {{ tab.title }}
          </button>
        </li>
      </ul>
    </nav>
    <div
      ref="contentItems"
      :class="part['contentItems']"
      data-part="contentItems"
      tabindex="0"
    >
      <template v-for="(tab, index) in tabs">
        <div
          :key="tab.key"
          v-if="
            renderInactiveTabs || (!renderInactiveTabs && activeTab == tab.key)
          "
          v-show="activeTab == tab.key"
          :aria-hidden="activeTab == tab.key ? 'false' : 'true'"
          ref="contentItem"
          tabindex="0"
          :data-index="index"
          role="tabpanel"
          @keydown.shift.tab.exact.self="onPanelKeyDown($event)"
          :class="part['contentItem']"
          data-part="contentItem"
        >
          <slot :name="`${tab.key}`" />
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: "BonesTabs" };
</script>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref, PropType } from "vue";

import type { Tab } from "@barebones/types/tab";

import useComponent from "@barebones/composables/useComponent";

import { classProps } from "@barebones-local/Tabs/Tabs.props";
import TabsLocal from "@barebones-local/Tabs/Tabs.parts";

const { parts } = TabsLocal();

const props = defineProps({
  ...classProps,
  tabs: {
    required: true,
    type: Array as PropType<Tab[]>,
    default: [], // @todo: Remove when resolved - Tests fail when there's not default
  },
  renderInactiveTabs: {
    required: false,
    type: Boolean as PropType<boolean>,
    default: true,
  },
});

const activeTab: Ref<string | undefined> = ref(undefined);
const navigation: Ref<HTMLElement | undefined> = ref(undefined);
const key: Ref<HTMLButtonElement[]> = ref([]);
const contentItem: Ref<HTMLElement[]> = ref([]);

const { part } = useComponent(parts, props, classProps);

const onButtonClick = (key: string) => {
  return (activeTab.value = key);
};

const onButtonTabDown = (event: KeyboardEvent): void => {
  let index = (event.target as HTMLElement).getAttribute("data-index") as any;
  let newContentItem = (contentItem.value as HTMLElement[])[index];
  return newContentItem.focus();
};

// @todo repeated code - Is is worth combining?

const onButtonArrowLeftDown = (event: KeyboardEvent): void => {
  let index: number = parseInt(
    (event.target as HTMLElement).getAttribute("data-index") as string
  );
  if (index > 0) {
    let newIndex = index - 1,
      newKey = (key.value as HTMLButtonElement[])[newIndex];
    return newKey.focus();
  }
};

const onButtonArrowRightDown = (event: KeyboardEvent): void => {
  let index: number = parseInt(
    (event.target as HTMLElement).getAttribute("data-index") as string
  );
  if (index < props.tabs.length) {
    let newIndex = index + 1,
      newKey = (key.value as HTMLButtonElement[])[newIndex];
    return newKey.focus();
  }
  return;
};

const onButtonShiftTabDown = (event: KeyboardEvent): void => {
  return (navigation.value as HTMLElement).focus();
};

const onPanelKeyDown = (event: KeyboardEvent): void => {
  event.preventDefault();
  const index = (event.target as HTMLElement).getAttribute("data-index") as any,
    newKey = (key.value as HTMLButtonElement[])[index];
  return newKey.focus();
};

onMounted(() => {
  activeTab.value = props.tabs[0]?.key;
});
</script>
