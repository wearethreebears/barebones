import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import Main from "@barebones/components/Main/Main.vue";

import MainLocal from "@barebones-local/Main/Main.parts";
const { parts } = MainLocal();


const defaultSlot = "Hello world";

allComponentPartClassesToDisplayCorrectly(Main, parts);

describe("Main", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(Main, {
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
