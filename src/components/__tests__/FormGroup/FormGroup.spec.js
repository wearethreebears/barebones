import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import FormGroup from "@barebones/components/FormGroup/FormGroup.vue";

import FormGroupLocal from "@barebones-local/FormGroup/FormGroup.parts";
const { parts } = FormGroupLocal();

const defaultSlot = "Hello World";
const props = {
  label: ' First name'
}


allComponentPartClassesToDisplayCorrectly(FormGroup, parts, [], true);

describe("FormGroup", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(FormGroup, {
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

  it("renders the correct label", () => {
    expect(wrapper.find('[data-part="label"]').html()).contains(props.label);
  });

  it("renders the correct slot", () => {
    expect(wrapper.find('[data-part="inputWrapper"]').html()).contains(defaultSlot);
  });

});
