import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import FormFieldSet from "@barebones/components/FormFieldSet/FormFieldSet.vue";

import FormFieldSetLocal from "@barebones-local/FormFieldSet/FormFieldSet.parts";
const { parts } = FormFieldSetLocal();


const defaultSlot = "Hello world";
const props = {
  label: "Movies"
}

allComponentPartClassesToDisplayCorrectly(FormFieldSet, parts);

describe("FormFieldSet", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(FormFieldSet, {
      props: {
        label: props.label
      },
      slots: {
        default: defaultSlot
      }
    });
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays the correct slot", () => {
    expect(wrapper.find('[ data-part="label"]').html()).contains(props.label)
  });

  it("displays the correct slot", () => {
    expect(wrapper.find('[ data-part="fieldsWrapper"]').html()).contains(defaultSlot)
  });

});
