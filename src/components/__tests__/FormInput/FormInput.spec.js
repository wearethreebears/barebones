import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import FormInput from "@barebones/components/FormInput/FormInput.vue";

import FormInputLocal from "@barebones-local/FormInput/FormInput.parts";
const { parts } = FormInputLocal();

const props = {
  label: "Email address",
  name: "email",
  type: "email",
}

allComponentPartClassesToDisplayCorrectly(FormInput, parts, [], true);

describe("FormInput", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(FormInput, {
      props
    });
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("is has the correct name", () => {
    expect(wrapper.find('input').attributes('name')).toBe(props.name);
  });

  it("is the correct type", () => {
    expect(wrapper.find('input').attributes('type')).toBe(props.type);
  });

});
