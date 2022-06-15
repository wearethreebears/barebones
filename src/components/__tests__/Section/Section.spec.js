import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import Section from "@barebones/components/Section/Section.vue";

import SectionLocal from "@barebones-local/Section/Section.parts";
const { parts } = SectionLocal();


const defaultSlot = "Hello world";

allComponentPartClassesToDisplayCorrectly(Section, parts);

describe("Section", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(Section, {
      slots: {
        default: defaultSlot
      }
    });
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays the correct slot", () => {
    expect(wrapper.html()).contains(defaultSlot)
  });

});
