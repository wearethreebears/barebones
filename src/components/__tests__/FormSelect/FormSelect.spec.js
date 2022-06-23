import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import FormSelect from "@barebones/components/FormSelect/FormSelect.vue";
import FormSelectOption from "@barebones/components/FormSelectOption/FormSelectOption.vue";

import FormSelectLocal from "@barebones-local/FormSelect/FormSelect.parts";
const { parts } = FormSelectLocal();

const props = {
  label: 'Movies',
  name: 'movies',
  options: [
    {
      label: "Bronx tale",
      value: "bronx-tale"
    },
    {
      label: "Scarface",
      value: "scarface"
    },
    {
      label: "Goodfellas",
      value: "goodfellas"
    }
  ]
}


allComponentPartClassesToDisplayCorrectly(FormSelect, parts);

describe("FormSelect", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(FormSelect, {
      props: {
        label: props.label,
        name: props.name,
        options: props.options,
      }
    });
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has the correct name", () => {
    expect(wrapper.find('select').attributes("name")).toBe(props.name)
  })

  it("renders the correct amount of options", () => {
    expect(wrapper.findAllComponents(FormSelectOption).length).toBe(3);
  });

});
