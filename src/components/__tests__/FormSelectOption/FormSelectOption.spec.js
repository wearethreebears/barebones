import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import FormSelectOption from "@barebones/components/FormSelectOption/FormSelectOption.vue";

import FormSelectOptionLocal from "@barebones-local/FormSelectOption/FormSelectOption.parts";
const { parts } = FormSelectOptionLocal();


const movie = {
  value: "bronx-tale",
  label: "Bronx tale"
};

allComponentPartClassesToDisplayCorrectly(FormSelectOption, parts);

describe("FormSelectOption", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(FormSelectOption, {
      props: {
        value: movie.value,
        label: movie.label,
      }
    });
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays the correct label", () => {
    expect(wrapper.html()).contains(movie.label)
  });

  it("has the correct value", () => {
    expect(wrapper.attributes("value")).toBe(movie.value)
  });

});
