<template>
  <BonesForm>
    <BonesFormInput
      name="my-checkbox"
      label="Checkbox"
      v-model:value="formData.checkbox"
      type="checkbox"
    />
    <BonesFormSelect
      name="film"
      label="Film"
      v-model:value="formData.film"
      :options="films"
    />
    <BonesFormInput
      name="first_name"
      label="First name"
      v-model:value="formData.firstName"
    />
    <BonesFormInput
      type="password"
      name="password"
      label="Password"
      v-model:value="formData.password"
    />
    <BonesFormInput
      type="file"
      name="file"
      label="Files"
      multiple-files
      value=""
      v-model:value="formData.files"
    />
    <BonesFormInput
      type="date"
      name="date"
      label="Date"
      v-model:value="formData.date"
    />
    <BonesFormInput
      type="range"
      name="range"
      label="Range"
      v-model:value="formData.range"
    />

    <BonesFormFieldSet label="Radio buttons">
      <BonesFormInput
        v-for="field in radioButtons"
        :key="field.value"
        type="radio"
        name="random"
        :label="field.label"
        :value="field.value"
        :checked-on-mount="formData.random === field.value"
        v-model:value="formData.random"
      />
    </BonesFormFieldSet>
  </BonesForm>
  <BonesButton design="line">TEST</BonesButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <BonesButton @click="log">TEST</BonesButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <BonesButton design="default-grey">TEST</BonesButton>&nbsp;&nbsp;&nbsp;&nbsp;
  <BonesButton design="line-grey">TEST</BonesButton>&nbsp;&nbsp;&nbsp;&nbsp;
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
    <BonesColumn :span="['4', 'md-6']" class="text-white bg-red-500"
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

  <BonesModal>
    <template #title
      ><BonesText tag="h2" size="title">Hello world</BonesText></template
    >
    <BonesText>Hello world from Modal</BonesText>
  </BonesModal>

  <br />
  <br />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import BonesButton from "./Button/Button.vue";
import BonesText from "./Text/Text.vue";
import BonesGrid from "./Grid/Grid.vue";
import BonesColumn from "./Column/Column.vue";
import BonesImage from "./Image/Image.vue";
import BonesTabs from "./Tabs/Tabs.vue";
import BonesModal from "./Modal/Modal.vue";
import BonesForm from "./Form/Form.vue";
import BonesFormFieldSet from "./FormFieldSet/FormFieldSet.vue";
import BonesFormInput from "./FormInput/FormInput.vue";
import BonesFormSelect from "./FormSelect/FormSelect.vue";

const radioButtons = [
  { label: "Random 1", value: "radio-1" },
  { label: "Random 2", value: "radio-2" },
];

const films = [
  { label: "Mario", value: "mario" },
  { label: "Cart", value: "cart" },
];

const formData = reactive({
  firstName: "Liam",
  password: "",
  date: "",
  random: "radio-2",
  range: "30",
  files: undefined,
  film: "mario",
  checkbox: false,
});

const log = () => console.log(formData);
</script>
