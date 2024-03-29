import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import Aside from "@barebones/components/Aside/Aside.vue";

import AsideLocal from "@barebones-local/Aside/Aside.parts";
const { parts } = AsideLocal();


const defaultSlot = "Hello world";

allComponentPartClassesToDisplayCorrectly(Aside, parts);

describe("Aside", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(Aside, {
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
