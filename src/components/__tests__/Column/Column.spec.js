import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import Column from "@barebones/components/Column/Column.vue";

import ColumnLocal from "@barebones-local/Column/Column.parts";
const { parts } = ColumnLocal();


const defaultSlot = "Hello world";

allComponentPartClassesToDisplayCorrectly(Column, parts);

describe("Column", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(Column, {
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
