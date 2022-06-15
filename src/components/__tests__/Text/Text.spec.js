import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import Text from "@barebones/components/Text/Text.vue";

import TextLocal from "@barebones-local/Text/Text.parts";
const { parts } = TextLocal();


const defaultSlot = "Hello world";

allComponentPartClassesToDisplayCorrectly(Text, parts);

describe("Text", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(Text, {
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
