<template>
  <BaseButton design="line">TEST</BaseButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <BaseButton>TEST</BaseButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <BaseButton design="default-blue">TEST</BaseButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <BaseButton design="line-blue">TEST</BaseButton>&nbsp;&nbsp;&nbsp;&nbsp;

  <BaseText>Hello world</BaseText>

  <BaseGrid>
    <BaseColumn :span="['4', 'md-6e']" class="text-white bg-red-500">Hello world</BaseColumn>
    <BaseColumn span="6" class="text-white bg-green-500">Hello world</BaseColumn>
  </BaseGrid>

  <div style="width: 200px">
    <BaseImage :image="{ url: 'https://via.placeholder.com/150', width: 150, height: 150, alt: 'Hello world'}" />
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./Button/Button.vue";
import BaseText from "./Text/Text.vue";
import BaseGrid from "./Grid/Grid.vue";
import BaseColumn from "./Column/Column.vue";
import BaseImage from "./Image/Image.vue";

</script>
