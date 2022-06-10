<template>
  <BonesButton design="line">TEST</BonesButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <BonesButton>TEST</BonesButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <BonesButton design="default-blue">TEST</BonesButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <BonesButton design="line-blue">TEST</BonesButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <br />
  <br />
  <hr />
  <br />
  <br />
  <BonesButton design="line" to="https://bbc.co.uk">LINK</BonesButton
  >&nbsp;&nbsp;&nbsp;&nbsp;
  <br />
  <br />
  <hr />
  <br />
  <br />

  <BonesText>Hello world</BonesText>

  <br />
  <br />

  <BonesGrid>
    <BonesColumn :span="['4', 'md-6e']" class="text-white bg-red-500"
      >Hello world</BonesColumn
    >
    <BonesColumn span="6" class="text-white bg-green-500"
      >Hello world</BonesColumn
    >
  </BonesGrid>

  <br />
  <br />

  <BonesTabs
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
  </BonesTabs>

  <br />
  <br />

  <div style="width: 200px">
    <BonesImage
      :image="{
        url: 'https://via.placeholder.com/150',
        width: 150,
        height: 150,
        alt: 'Hello world',
      }"
    />
  </div>

  <br />
  <br />

  <BonesModal :modal-open-props="{ design: 'line-blue' }">
    <template #title><BonesText tag="span">Hello world</BonesText></template>
    <BonesText>Hello world from Modal</BonesText>
  </BonesModal>

  <br />
  <br />
</template>

<script setup lang="ts">
import BonesButton from "./Button/Button.vue";
import BonesText from "./Text/Text.vue";
import BonesGrid from "./Grid/Grid.vue";
import BonesColumn from "./Column/Column.vue";
import BonesImage from "./Image/Image.vue";
import BonesTabs from "./Tabs/Tabs.vue";
import BonesModal from "./Modal/Modal.vue";
</script>
