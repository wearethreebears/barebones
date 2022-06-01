<template>
  <BaseButton design="line">TEST</BaseButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <BaseButton>TEST</BaseButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <BaseButton design="default-blue">TEST</BaseButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <BaseButton design="line-blue">TEST</BaseButton>&nbsp;&nbsp;&nbsp;&nbsp;

  <BaseText>Hello world</BaseText>

  <BaseGrid>
    <BaseColumn :span="['4', 'md-6e']" class="text-white bg-red-500"
      >Hello world</BaseColumn
    >
    <BaseColumn span="6" class="text-white bg-green-500"
      >Hello world</BaseColumn
    >
  </BaseGrid>

  <BaseTabs
    :tabs="[
      {
        key: 'foo',
        title: 'Foo',
      },
      {
        key: 'bar',
        title: 'Bar',
      },
    ]"
  >
    <template #foo>This is Foo</template>
    <template #bar>This is Bar</template>
  </BaseTabs>

  <div style="width: 200px">
    <BaseImage
      :image="{
        url: 'https://via.placeholder.com/150',
        width: 150,
        height: 150,
        alt: 'Hello world',
      }"
    />
  </div>
  <BaseModal :modal-open-props="{ design: 'line-blue' }">
    <template #title><BaseText tag="span">Hello world</BaseText></template>
    <BaseText>Hello world from Modal</BaseText>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseButton from "./Button/Button.vue";
import BaseText from "./Text/Text.vue";
import BaseGrid from "./Grid/Grid.vue";
import BaseColumn from "./Column/Column.vue";
import BaseImage from "./Image/Image.vue";
import BaseTabs from "./Tabs/Tabs.vue";
import BaseModal from "./Modal/Modal.vue";
</script>
