import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import Grid from "@barebones/components/Grid/Grid.vue";

import GridLocal from "@barebones-local/Grid/Grid.parts";
const { parts } = GridLocal();


const defaultSlot = "Hello world";

allComponentPartClassesToDisplayCorrectly(Grid, parts);

describe("Grid", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(Grid, {
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
