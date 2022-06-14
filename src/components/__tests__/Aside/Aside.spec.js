import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import Aside from "@barebones/components/Aside/Aside.vue";

//// For each component part
//--// For each prop
//----// If prop exists
//------// Check component part has classes from that prop

const defaultSlot = "Hello world";

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
